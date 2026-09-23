import * as THREE from 'three';
import { FilesetResolver, HandLandmarker, ImageSegmenter } from '@mediapipe/tasks-vision';

/* ─────────────────────────────────────────────
   照片世界 · Photo World（V5 · 主题 / 氛围 / 开场）
   白域 / 夜域双主题 + 无边框照片 + 触碰动效 + 大数量支持
   + IndexedDB 持久化 + 8 种排布模板（保证缝隙不重叠）+ 手势控制
   + 地面接触阴影 + 地台 + 雾随布局分层 + 开场相机推进
   ───────────────────────────────────────────── */

const SAMPLE_COUNT = 30;

const state = {
  tour: false,
  focusIndex: -1,
  fly: null,          // 聚焦飞行动画
  forceHover: null,   // 调试用：强制悬停某张
  cards: [],
  layoutId: 'scatter',  // 当前排布模板
  theme: 'light',       // 当前主题：light 白域 / dark 夜域
  stereo: { on: false, loading: false, card: null, group: null },
};

/* ═══════════════ 主题调色板 ═══════════════
   白域 = 云海空间：晨光云海，软白云团缓缓漂移
   夜域 = 星河空间：星空银河，星光闪烁 + 流星划过
   场景内无任何附着在照片上的光效，观看照片 = 原图画质 */
const THEMES = {
  light: {
    bg: 0xf5f5f7, fogD: 0.0105, ground: 0xedeef1,
    gShadowOp: 0.5,
    labelBg: 'rgba(255,255,255,0.94)', labelBorder: '#e0e0e8', labelFg: '#a07a2a',
  },
  dark: {
    bg: 0x0a0b12, fogD: 0.0118, ground: 0x090a10,
    gShadowOp: 0.18,
    labelBg: 'rgba(20,20,27,0.92)', labelBorder: '#34343e', labelFg: '#d9a84e',
  },
};
let themeAnim = null;   /* 主题切换过渡 { t, from, to } */

/* ── 渲染器：双主题世界 ── */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
scene.background = new THREE.Color(THEMES.light.bg);
/* 雾 = 空气感纵深：越远的照片越融进背景（密度随主题与布局缓动） */
scene.fog = new THREE.FogExp2(THEMES.light.bg, THEMES.light.fogD);
let fogTarget = THEMES.light.fogD;
const camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.1, 3200);
camera.rotation.order = 'YXZ';

/* ═══════════════ 天空系统（全程缓慢运动，随主题淡入淡出） ═══════════════
   白域 = 云海：软白云团绕世界缓漂 + 轻微起伏
   夜域 = 程序化真星空（V10.4）：三层星野按真实星等/色温分布 + 倾斜银河带
   （9000 星尘点云：银心密度调制 / 尘埃裂隙 / 银心辉光）+ 流星，全 3D 点云有真实视差
   skyMix: 0 = 白域 → 1 = 夜域，主题切换时两侧交叉淡化 */
const GROUND_Y = -15;
let skyTarget = 0, skyMix = 0;
const _sv1 = new THREE.Vector3(), _sv2 = new THREE.Vector3();

function _dotTex(sz) {
  const c = document.createElement('canvas'); c.width = c.height = sz;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, sz / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.7)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, sz, sz);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
/* ═══════════════ 自定义配置（V10.12 全量 DIY） ═══════════════
   相框（含上传）/ 照片尺寸 / 淡入淡出距离 / 两域底色 / 雾感 / 星空密度 / 银河亮度
   存 localStorage('pw.cfg')，可一键复制 JSON 分享 —— 开源用户改配置即可换风格。 */
const CFG_DEFAULT = {
  frame: 'none',      /* none | hair | white | film | mat | custom */
  frameW: 1,          /* 相框宽度倍率（窄 0.7 / 标准 1 / 宽 1.5） */
  cardK: 1,           /* 照片尺寸倍率 */
  fadeK: 1.6,         /* 淡入淡出距离倍率（默认比基准更远） */
  bgLight: '#f5f5f7', /* 白域底色 */
  bgDark: '#0a0b12',  /* 夜域底色 */
  fogK: 1,            /* 雾感（越小越通透、越远越朦胧） */
  starK: 1,           /* 星空密度 */
  milkyK: 1,          /* 银河亮度 */
  idleMin: 3,         /* 待机屏保触发时间（分钟） */
};
let CFG = Object.assign({}, CFG_DEFAULT);
try {
  const raw = localStorage.getItem('pw.cfg');
  if (raw) CFG = Object.assign(CFG, JSON.parse(raw));
} catch (e) { /* ignore */ }
function saveCfg() { try { localStorage.setItem('pw.cfg', JSON.stringify(CFG)); } catch (e) { /* ignore */ } }

/* 相框预设：ext = 四周外扩（世界单位，× frameW）；front = 画在照片之前（自定义透心相框） */
const FRAMES = {
  none:   { label: '无',     ext: 0,    color: 0x000000, front: false },
  hair:   { label: '细线',   ext: 0.10, color: 0xb9b9c2, front: false },
  white:  { label: '白边',   ext: 0.34, color: 0xffffff, front: false },
  film:   { label: '胶片',   ext: 0.52, color: 0x14141a, front: false },
  mat:    { label: '留白',   ext: 0.95, color: 0xfbfbf9, front: false },
  custom: { label: '自定义', ext: 0.5,  color: 0xffffff, front: true },
};
let frameTex = null;   /* 自定义相框贴图（带透明中心的 PNG 最理想） */

/* 由底色推地面色（略暗一档，保留"地台"层次） */
function shade(hex, k) {
  return '#' + new THREE.Color(hex).multiplyScalar(k).getHexString();
}

/* ── 天空带工具（V10.8 已无调用方，保留供后续素材扩展：真实照片贴合天空环）── */
function _skyBand(url, { radius, height, y = 0, repeatX = 1, additive = false, opacity = 1 } = {}) {
  const mat = new THREE.MeshBasicMaterial({
    transparent: true, opacity: 0, fog: false, depthWrite: false,
    side: THREE.BackSide, toneMapped: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 72, 1, true), mat);
  mesh.position.y = y;
  mesh.userData.baseOp = opacity;
  new THREE.TextureLoader().load(url, tex => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.repeat.x = repeatX;
    tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
    mat.map = tex; mat.needsUpdate = true;
  });
  return mesh;
}
function _streakTex() {
  const c = document.createElement('canvas'); c.width = 160; c.height = 12;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 160, 0);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.75, 'rgba(220,230,255,0.55)');
  g.addColorStop(1, 'rgba(255,255,255,1)');
  x.fillStyle = g;
  x.beginPath(); x.ellipse(80, 6, 80, 4, 0, 0, 7); x.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/* ── 白域：V10.8 起不再有任何天空贴图 —— 纯净底色 + 地台 + 雾，画面只剩照片 ── */
const skyLight = new THREE.Group(); skyLight.visible = false; scene.add(skyLight);

/* ── 夜域 · 星河 ── */
const skyDark = new THREE.Group(); skyDark.visible = false; scene.add(skyDark);
const _starTex = _dotTex(48);
const STAR_PALETTE = [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1], [0.72, 0.8, 1], [0.72, 0.8, 1], [1, 0.87, 0.7]];
function _makeStars(N, rMin, rMax, sizePx, baseOp, palette) {
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    /* V10.5：全球面均匀分布（u = cosθ 均匀）——夜域没有地面，上下左右都必须有星 */
    const u = Math.random() * 2 - 1;
    const a = Math.random() * Math.PI * 2, r = rMin + Math.random() * (rMax - rMin);
    const s = Math.sqrt(Math.max(0, 1 - u * u));
    pos[i * 3] = Math.cos(a) * s * r; pos[i * 3 + 1] = u * r; pos[i * 3 + 2] = Math.sin(a) * s * r;
    const c = palette[(Math.random() * palette.length) | 0], v = 0.62 + Math.random() * 0.38;
    col[i * 3] = c[0] * v; col[i * 3 + 1] = c[1] * v; col[i * 3 + 2] = c[2] * v;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const p = new THREE.Points(g, new THREE.PointsMaterial({
    size: sizePx, map: _starTex, transparent: true, opacity: baseOp,
    vertexColors: true, sizeAttenuation: false, depthWrite: false, fog: false,
  }));
  p.userData.baseOp = baseOp;
  return p;
}
/* V10.12 星空层：改为可重建（密度 starK 可调），引用集中在 skyLayers */
let starsA = null, starsB = null, starsC = null, gSpecks = null, gGlow = null;

/* 银河带：倾斜约 55°（真实黄银交角量级），星尘 + 辉光 + 裂隙全部程序化生成 */
const galaxy = new THREE.Group();
galaxy.rotation.set(0.98, 0, 0.42);
skyDark.add(galaxy);
/* 银河 = 沿银道面密布的星尘点云（V10.4 替代 ESO 贴图带）：
   银心方向更密更暖，经向成团，Great Rift 尘埃裂隙穿插其间 —— 全 3D 点，飞行有真视差 */
function galSpecksPoints(k = 1) {
  const N = Math.round(9000 * k), pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  const BULGE = 0.9;   /* 银心方位角 */
  const angDiff = a => { let d = (a - BULGE) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return Math.abs(d); };
  let i = 0;
  while (i < N) {
    const th = Math.random() * Math.PI * 2;
    const dens = Math.min(1, 0.42 + 1.15 * Math.exp(-Math.pow(angDiff(th), 2) / 0.22))
      * (0.72 + 0.28 * Math.sin(th * 3 + 1.3) * Math.sin(th * 0.9 + 0.5));
    if (Math.random() > dens) continue;                       /* 经向密度调制 */
    const gs = (Math.random() + Math.random() + Math.random() - 1.5) * 66;
    const rift = Math.sin(th * 2.1) * 12 + Math.sin(th * 0.7 + 2) * 6;
    if (Math.abs(gs - rift) < 10 && Math.random() < 0.55) continue;   /* 尘埃裂隙 */
    const r = 640 + Math.random() * 380;
    pos[i * 3] = Math.cos(th) * r; pos[i * 3 + 1] = gs; pos[i * 3 + 2] = Math.sin(th) * r;
    const warm = Math.exp(-Math.pow(angDiff(th), 2) / 0.5);   /* 银心偏暖，外缘偏蓝白 */
    const v = 0.4 + Math.random() * 0.6;
    col[i * 3] = (0.8 + 0.2 * warm) * v;
    col[i * 3 + 1] = (0.85 - 0.08 * warm) * v;
    col[i * 3 + 2] = (1.0 - 0.32 * warm) * v;
    i++;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const p = new THREE.Points(g, new THREE.PointsMaterial({
    size: 1.9, map: _starTex, transparent: true, opacity: 1.0,
    vertexColors: true, sizeAttenuation: false, depthWrite: false, fog: false,
    blending: THREE.AdditiveBlending,
  }));
  p.name = 'gSpecks';
  p.userData.baseOp = 1.0;
  return p;
}
/* 银心辉光：银道面上大量超大柔光点叠成连续雾状亮带（替代星云贴图，纯点云实现） */
function galGlowPoints(k = 1) {
  const N = Math.round(90 * Math.min(2, k)), pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  const BULGE = 0.9;
  for (let i = 0; i < N; i++) {
    const th = BULGE + (Math.random() + Math.random() + Math.random() - 1.5) * 1.7;
    const gs = (Math.random() + Math.random() + Math.random() - 1.5) * 34;
    const r = 720 + Math.random() * 180;
    pos[i * 3] = Math.cos(th) * r; pos[i * 3 + 1] = gs; pos[i * 3 + 2] = Math.sin(th) * r;
    const warm = 0.72 + Math.random() * 0.28, v = 0.1 + Math.random() * 0.14;
    col[i * 3] = v; col[i * 3 + 1] = v * 0.9 * warm; col[i * 3 + 2] = v * 0.74 * warm;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const p = new THREE.Points(g, new THREE.PointsMaterial({
    size: 150, map: _starTex, transparent: true, opacity: 0.16,
    vertexColors: true, sizeAttenuation: false, depthWrite: false, fog: false,
    blending: THREE.AdditiveBlending,
  }));
  p.name = 'gGlow';
  p.userData.baseOp = 0.16;
  return p;
}

/* 星空构建/重建：starK = 密度倍率（1 = 标准） */
function buildSky(starK = 1) {
  [starsA, starsB, starsC, gSpecks, gGlow].forEach(p => {
    if (!p) return;
    if (p.parent) p.parent.remove(p);
    p.geometry.dispose(); p.material.dispose();
  });
  starsA = _makeStars(Math.round(4500 * starK), 620, 980, 2.2, 0.95, STAR_PALETTE);
  starsB = _makeStars(Math.round(2600 * starK), 620, 980, 1.5, 0.6, STAR_PALETTE);
  /* 亮星层：少量大颗彩色星（蓝巨星 / 黄白 / 橙红巨星），闪烁更明显 */
  starsC = _makeStars(Math.round(260 * starK), 640, 960, 3.6, 1.0,
    [[0.68, 0.78, 1], [0.85, 0.9, 1], [1, 0.94, 0.82], [1, 0.8, 0.62], [1, 0.68, 0.5]]);
  skyDark.add(starsA, starsB, starsC);
  gSpecks = galSpecksPoints(starK); galaxy.add(gSpecks);
  gGlow = galGlowPoints(starK); galaxy.add(gGlow);
}
buildSky(1);

/* 流星（世界坐标挂 scene，夜域随机划过） */
const shootMat = new THREE.SpriteMaterial({
  map: _streakTex(), transparent: true, opacity: 0, fog: false, depthWrite: false,
  blending: THREE.AdditiveBlending,
});
const shootSp = new THREE.Sprite(shootMat); shootSp.scale.set(170, 9, 1); scene.add(shootSp);
let shootT = 9, shootDur = 1;
const shootFrom = new THREE.Vector3(), shootVel = new THREE.Vector3();

function skyStep(dt, t) {
  skyMix += (skyTarget - skyMix) * Math.min(1, dt * 2.1);
  const d = skyMix, l = 1 - skyMix;
  /* 观看照片时天空整体退场：pinCard 的 depthTest=false 会让照片不写深度，
     任何透明物（云/星/星云）都会穿透叠在照片上 —— 必须整体隐藏保证照片零干扰 */
  const focusClean = state.focusIndex >= 0;
  skyLight.visible = false;   /* V10.8 白域无天空贴图 */
  skyDark.visible = d > 0.02 && !focusClean;
  if (skyDark.visible) {
    skyDark.rotation.y = t * 0.0052;
    starsA.material.opacity = starsA.userData.baseOp * d * (0.8 + 0.2 * Math.sin(t * 1.15));
    starsB.material.opacity = starsB.userData.baseOp * d * (0.72 + 0.28 * Math.sin(t * 1.8 + 2.4));
    starsC.material.opacity = starsC.userData.baseOp * d * (0.55 + 0.45 * Math.sin(t * 2.3 + 1.2));
    /* 银河星尘与辉光不闪烁（真实银河是累积光），只随主题淡入；亮度受 milkyK 调节 */
    if (gSpecks) gSpecks.material.opacity = gSpecks.userData.baseOp * d * CFG.milkyK;
    if (gGlow) gGlow.material.opacity = gGlow.userData.baseOp * d * CFG.milkyK;    if (d > 0.6 && !focusClean) {
      shootT += dt;
      if (shootT >= shootDur) {
        if (Math.random() < dt * 0.16) {   /* 平均约 6 秒一颗 */
          shootT = 0; shootDur = 0.85 + Math.random() * 0.6;
          const a = Math.random() * Math.PI * 2, r = 620 + Math.random() * 130;
          /* 无地面后流星可在任意高度出现（含星星下方），不再只在天顶区 */
          shootFrom.set(Math.cos(a) * r, -420 + Math.random() * 900, Math.sin(a) * r);
          shootVel.set(-Math.sin(a), -0.18 - Math.random() * 0.3, Math.cos(a)).multiplyScalar(400 + Math.random() * 260);
          shootSp.position.copy(shootFrom);
        }
      } else {
        const p = shootT / shootDur;
        shootSp.position.copy(shootFrom).addScaledVector(shootVel, shootT);
        shootMat.opacity = Math.sin(Math.PI * p) * 0.85;
        _sv1.copy(shootSp.position).project(camera);
        _sv2.copy(shootSp.position).addScaledVector(shootVel, 0.02).project(camera);
        shootMat.rotation = Math.atan2(_sv2.y - _sv1.y, _sv2.x - _sv1.x);
      }
    } else shootMat.opacity = 0;
  }
  /* 夜域地面淡出：太空没有地板，星星四面八方环绕（彻底消除地平线硬边） */
  const gOp = Math.max(0, 1 - d * 1.55);
  groundMat.opacity = gOp;
  groundPlane.visible = gOp > 0.01;
}

/* ── 地面：地台（颜色随主题缓动） ──
   V10.5：尺寸放大到远超星空球半径（980），杜绝"地台边缘切出一条硬地平线"；
   夜域整体淡出 → 太空里没有地板，星星四面八方环绕 */
const groundMat = new THREE.MeshBasicMaterial({ color: THEMES.light.ground, transparent: true, opacity: 1 });
const groundPlane = new THREE.Mesh(new THREE.PlaneGeometry(4200, 4200), groundMat);
groundPlane.rotation.x = -Math.PI / 2;
groundPlane.position.y = GROUND_Y - 0.4;
scene.add(groundPlane);

/* ═══════════════ IndexedDB 持久化 ═══════════════ */

const DB = {
  db: null, ok: false,
  open() {
    return new Promise((res, rej) => {
      let req;
      try { req = indexedDB.open('photo-world', 3); } catch (e) { return rej(e); }
      req.onupgradeneeded = () => {
        const d = req.result;
        if (!d.objectStoreNames.contains('photos')) d.createObjectStore('photos', { keyPath: 'id' });
        if (!d.objectStoreNames.contains('depth')) d.createObjectStore('depth', { keyPath: 'id' });
        if (!d.objectStoreNames.contains('memories')) d.createObjectStore('memories', { keyPath: 'id' });
      };
      req.onsuccess = () => { this.db = req.result; this.ok = true; res(); };
      req.onerror = () => rej(req.error || new Error('idb open failed'));
      req.onblocked = () => rej(new Error('idb blocked'));
    });
  },
  tx(mode, store = 'photos') { return this.db.transaction(store, mode).objectStore(store); },
  put(rec) {
    return new Promise((res, rej) => {
      if (!this.ok) return rej(new Error('idb not ready'));
      const r = this.tx('readwrite').put(rec);
      r.onsuccess = () => res(); r.onerror = () => rej(r.error);
    });
  },
  all() {
    return new Promise((res, rej) => {
      if (!this.ok) return rej(new Error('idb not ready'));
      const r = this.tx('readonly').getAll();
      r.onsuccess = () => res(r.result || []); r.onerror = () => rej(r.error);
    });
  },
  clear() {
    return new Promise((res, rej) => {
      if (!this.ok) return rej(new Error('idb not ready'));
      const r = this.tx('readwrite').clear();
      r.onsuccess = () => res(); r.onerror = () => rej(r.error);
    });
  },
  depthGet(id) {
    return new Promise((res, rej) => {
      if (!this.ok) return rej(new Error('idb not ready'));
      const r = this.tx('readonly', 'depth').get(id);
      r.onsuccess = () => res(r.result || null); r.onerror = () => rej(r.error);
    });
  },
  depthPut(rec) {
    return new Promise((res, rej) => {
      if (!this.ok) return rej(new Error('idb not ready'));
      const r = this.tx('readwrite', 'depth').put(rec);
      r.onsuccess = () => res(); r.onerror = () => rej(r.error);
    });
  },
  /* ── memories store：记忆卡片（心情/文字/录音/音视频） ── */
  memAll() {
    return new Promise((res, rej) => {
      if (!this.ok) return rej(new Error('idb not ready'));
      const r = this.tx('readonly', 'memories').getAll();
      r.onsuccess = () => res(r.result || []); r.onerror = () => rej(r.error);
    });
  },
  memPut(rec) {
    return new Promise((res, rej) => {
      if (!this.ok) return rej(new Error('idb not ready'));
      const r = this.tx('readwrite', 'memories').put(rec);
      r.onsuccess = () => res(); r.onerror = () => rej(r.error);
    });
  },
  memDel(id) {
    return new Promise((res, rej) => {
      if (!this.ok) return rej(new Error('idb not ready'));
      const r = this.tx('readwrite', 'memories').delete(id);
      r.onsuccess = () => res(); r.onerror = () => rej(r.error);
    });
  },
};

/* ═══════════════ EXIF 拍摄时间解析（轻量，JPEG） ═══════════════ */

function exifDateOf(buf) {
  try {
    const v = new DataView(buf);
    if (v.byteLength < 12 || v.getUint16(0) !== 0xFFD8) return null;
    let off = 2;
    while (off + 4 < v.byteLength) {
      if (v.getUint8(off) !== 0xFF) break;
      const marker = v.getUint8(off + 1);
      if (marker === 0xD8 || marker === 0x01 || (marker >= 0xD0 && marker <= 0xD7)) { off += 2; continue; }
      if (marker === 0xDA) break; /* SOS：像素数据开始 */
      const size = v.getUint16(off + 2);
      if (marker === 0xE1 && size > 8 && off + 2 + size <= v.byteLength
          && v.getUint32(off + 4) === 0x45786966 && v.getUint16(off + 8) === 0x0000) {
        const d = tiffDate(v, off + 10);
        if (d) return d;
      }
      off += 2 + size;
    }
  } catch (e) { /* 非法结构当无 EXIF */ }
  return null;
}

function tiffDate(v, base) {
  const little = v.getUint16(base) === 0x4949;
  const u16 = o => v.getUint16(base + o, little);
  const u32 = o => v.getUint32(base + o, little);
  if (u16(2) !== 42) return null;
  const ifd0 = u32(4);
  const findTag = (ifd, tag) => {
    if (!ifd || ifd + 2 > v.byteLength) return null;
    const cnt = u16(ifd);
    for (let i = 0; i < cnt; i++) {
      const e = ifd + 2 + i * 12;
      if (e + 12 > v.byteLength) return null;
      if (u16(e) !== tag) continue;
      const len = u32(e + 4);
      const valOff = (len <= 4 ? e + 8 : u32(e + 8)) + base;
      let s = '';
      for (let k = 0; k < len - 1 && valOff + k < v.byteLength; k++) s += String.fromCharCode(v.getUint8(valOff + k));
      return /^\d{4}:\d{2}:\d{2} \d{2}:\d{2}:\d{2}/.test(s) ? s.slice(0, 19) : null;
    }
    return null;
  };
  /* ExifIFD 的 DateTimeOriginal 优先，退回 IFD0 的修改时间 */
  let sub = 0;
  const n0 = Math.min(u16(ifd0), 256);
  for (let i = 0; i < n0; i++) {
    const e = ifd0 + 2 + i * 12;
    if (u16(e) === 0x8769) { sub = u32(e + 8); break; }
  }
  /* ExifIFD 的 DateTimeOriginal 优先；兼容写入 IFD0 的 0x9003（部分工具）与 IFD0 的 0x0132 */
  return findTag(sub, 0x9003) || findTag(ifd0, 0x9003) || findTag(ifd0, 0x0132);
}

function shotTs(str) {
  if (!str) return null;
  const t = new Date(str.slice(0, 10).replace(/:/g, '-') + 'T' + str.slice(11)).getTime();
  return Number.isFinite(t) ? t : null;
}

/* ═══════════════ 排布模板库 ═══════════════
   每个模板 = { id, name, tag, desc, place(cards) → view }
   place 把每张卡的目标位姿写入 userData.to / toQ，
   并返回总览机位 { pos, yaw, pitch }。
   所有模板均保证照片两两留缝、互不重叠。 */

const rand = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const g3 = i => (rand(i) + rand(i + 57.31) + rand(i + 113.79) - 1.5) / 1.5;

/* V10.11 间距可调：GAP / CELL / PANEL_GAP_Z 全面由 SPREAD 系数驱动。
   自动档按照片数量自适应（张数少→更舒展，张数多→自动收紧，避免世界大到看不见）；
   手动档 紧凑 0.85 / 标准 1.15 / 舒展 1.45，选择记在 localStorage。 */
const GAP_BASE = 7.5, CELL_BASE = 19, PANEL_GAP_BASE = 42;
let GAP = GAP_BASE, CELL = CELL_BASE, PANEL_GAP_Z = PANEL_GAP_BASE;
let spreadMode = 'auto';
const autoSpread = n => n <= 12 ? 1.45 : n <= 40 ? 1.18 : n <= 120 ? 1.0 : n <= 300 ? 0.88 : 0.78;
function applySpread() {
  const v = spreadMode === 'auto' ? autoSpread(state.cards.length) : spreadMode;
  GAP = GAP_BASE * v; CELL = CELL_BASE * v; PANEL_GAP_Z = PANEL_GAP_BASE * v;
  return v;
}

/* ── 晶格分配器：3D 网格胞按离原点距离排序 + 微抖动 ──
   胞中心间距 CELL（由 SPREAD 调节），抖动幅度 ≤0.07 格，任意两胞最小间距仍 ≥0.86 格，
   散布类布局从数学上杜绝重叠，且任意两张照片之间都有充足呼吸空间。 */
const LATTICE = (() => {
  const cells = [];
  const R = 15, YR = 9;
  for (let x = -R; x <= R; x++)
    for (let y = -YR; y <= YR + 2; y++)
      for (let z = -R; z <= R; z++) {
        const d = Math.sqrt(x * x + (y * 1.5) * (y * 1.5) + z * z);
        if (d > R + 0.5) continue;
        const s = (x + 40) * 131 + (y + 20) * 17 + (z + 40) * 3;
        cells.push({
          x, y, z, d,
          jx: g3(s) * 0.07, jy: g3(s + 1) * 0.06, jz: g3(s + 2) * 0.07,
        });
      }
  cells.sort((a, b) => a.d - b.d);
  return cells;
})();

/* 卡片朝向：面向 aim 点 + 轻微随机偏转 */
function orientToward(pos, aim, i, wob = 0.12) {
  const d = new THREE.Object3D();
  d.position.copy(pos);
  d.up.set(0, 1, 0);
  d.lookAt(
    aim.x + g3(i * 5 + 21) * wob * 4,
    aim.y + g3(i * 5 + 22) * wob * 3,
    aim.z + g3(i * 5 + 23) * wob * 4
  );
  d.rotateZ(g3(i * 5 + 24) * wob * 1.4);
  d.rotateX(g3(i * 5 + 25) * wob * 0.9);
  return d.quaternion.clone();
}
/* 朝向目标偏向 +z（总览相机侧）：飞入看几乎全是正面，减少背面穿帮 */
const orientAt = (pos, i) => orientToward(
  pos, { x: pos.x * 0.2, y: pos.y * 0.2, z: 34 + pos.z * 0.35 }, i);

const dimsOf = c => ({ W: c.userData.W, H: c.userData.H });
const Q_FACE = new THREE.Quaternion();   /* 面朝 +z（总览相机方向） */

function boundsOf(cards) {
  const bb = { minX: 1e9, maxX: -1e9, minY: 1e9, maxY: -1e9, minZ: 1e9, maxZ: -1e9 };
  cards.forEach(c => {
    const p = c.userData.to;
    if (p.x < bb.minX) bb.minX = p.x; if (p.x > bb.maxX) bb.maxX = p.x;
    if (p.y < bb.minY) bb.minY = p.y; if (p.y > bb.maxY) bb.maxY = p.y;
    if (p.z < bb.minZ) bb.minZ = p.z; if (p.z > bb.maxZ) bb.maxZ = p.z;
  });
  return bb;
}

/* ── 1. 自由散布：晶格蓝噪声，均匀漂浮互不接触 ── */
function layScatter(cards) {
  cards.forEach((c, i) => {
    const P = LATTICE[i];
    c.userData.to.set((P.x + P.jx) * CELL, (P.y + P.jy) * CELL, (P.z + P.jz) * CELL);
    c.userData.toQ.copy(orientAt(c.userData.to, i));
  });
  const rMax = cards.reduce((a, c) => Math.max(a, c.userData.to.length()), 0);
  /* 总览机位不再等比后退（V10.5）：后退系数 1.72→1.18，让"间距加大"在总览里看得见 */
  return {
    pos: new THREE.Vector3(0, 2.0 + rMax * 0.09, 13 + rMax * 1.05),
    yaw: 0, pitch: -0.02,
  };
}

/* ── 展墙通用：按卡片实际宽度装箱成行，行内绝不重叠 ── */
function shelfRows(cards, maxRowW) {
  const rows = [];
  let row = { items: [], w: 0, h: 0 };
  cards.forEach(c => {
    const { W, H } = dimsOf(c);
    const add = (row.items.length ? GAP : 0) + W;
    if (row.items.length && row.w + add > maxRowW) { rows.push(row); row = { items: [], w: 0, h: 0 }; }
    row.items.push(c);
    row.w += row.items.length > 1 ? GAP + W : W;
    row.h = Math.max(row.h, H);
  });
  if (row.items.length) rows.push(row);
  return rows;
}
const ROWS_PER_PANEL = 9;   /* 面板纵深间距 PANEL_GAP_Z 由 SPREAD 驱动（见 applySpread） */

function layWall(cards, wave) {
  const rows = shelfRows(cards, Math.min(150, 40 + cards.length * 0.35));
  const wallW = Math.max(...rows.map(r => r.w));
  /* 波浪行距附加余量：跨行 x 反相时波浪相对差最大 ~1.5，不能吃掉缝隙 */
  const waveSlack = wave ? 2.2 : 0;
  const totalH = rows.reduce((a, r) => a + r.h, 0) + (GAP + waveSlack) * (rows.length - 1);
  let y = totalH / 2;
  rows.forEach((row, ri) => {
    const panel = Math.floor(ri / ROWS_PER_PANEL);
    const rowY = y - row.h / 2;
    let x = -row.w / 2;
    row.items.forEach(c => {
      const { W } = dimsOf(c);
      x += W / 2;
      /* 波浪相位不掺行号，保证同列上下两卡同相位，垂直缝隙不被压缩 */
      const wy = wave ? Math.sin(x * 0.22) * 0.5 + Math.sin(ri * 0.9) * 0.55 : 0;
      const wz = wave ? Math.cos(x * 0.15 + panel) * 0.6 : 0;
      c.userData.to.set(x, rowY + wy, -panel * PANEL_GAP_Z + wz);
      c.userData.toQ.copy(Q_FACE);
      x += W / 2 + GAP;
    });
    y -= row.h / 2 + GAP + waveSlack;
  });
  const bb = boundsOf(cards);
  const cy = (bb.minY + bb.maxY) / 2;
  const dist = Math.max(wallW * 0.52, totalH * 0.45) + 12;   /* V10.6 后退系数再压小 */
  return { pos: new THREE.Vector3(0, cy * 0.85, bb.maxZ + dist), yaw: 0, pitch: -0.01 };
}

/* ── 2. 矩阵展墙 / 3. 波浪幕墙 ── */
const layGrid = cards => layWall(cards, false);
const layWave = cards => layWall(cards, true);
/* 照片墙：单面巨墙（排布同平墙，配合墙相机平移/推拉模式） */
const layFlat = cards => layWall(cards, false);

/* ── 4. 环形剧场：围成一圈或多圈，站在圆心被环绕 ── */
function layRing(cards) {
  const n = cards.length;
  const dims = cards.map(dimsOf);
  const maxW = Math.max(...dims.map(d => d.W));
  const maxH = Math.max(...dims.map(d => d.H));
  const rows = n <= 26 ? 1 : n <= 80 ? 2 : n <= 180 ? 3 : Math.ceil(n / 70);
  const per = Math.ceil(n / rows);
  const R = Math.max(9, (per * (maxW + GAP + 0.5)) / (Math.PI * 2));
  const stepY = maxH + GAP + 0.4;
  cards.forEach((c, i) => {
    const row = Math.floor(i / per);
    const k = i % per;
    const a = (k / per) * Math.PI * 2 + row * (Math.PI / per);
    const y = (row - (rows - 1) / 2) * stepY;
    const p = new THREE.Vector3(Math.cos(a) * R, y, Math.sin(a) * R);
    c.userData.to.copy(p);
    c.userData.toQ.copy(orientToward(p, { x: 0, y, z: 0 }, i, 0.05));
  });
  const yMid = ((rows - 1) / 2) * stepY;
  return { pos: new THREE.Vector3(0, yMid * 0.5, 0), yaw: 0, pitch: 0 };
}

/* ── 5. 螺旋之塔：双螺旋盘旋而上 ── */
function layHelix(cards) {
  const n = cards.length;
  const maxW = Math.max(...cards.map(dimsOf).map(d => d.W));
  const strands = 2, per = Math.ceil(n / strands);
  const r = 8.5;
  const angStep = ((maxW + GAP + 1.2) / r) * 1.06;
  const yStep = 2.5;
  const H = per * yStep;
  cards.forEach((c, i) => {
    const s = i % strands, k = Math.floor(i / strands);
    const a = k * angStep + s * Math.PI;
    const y = (k + 0.5 - per / 2) * yStep + (s ? yStep * 0.5 : 0);
    const p = new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r);
    c.userData.to.copy(p);
    c.userData.toQ.copy(orientToward(p,
      { x: Math.cos(a) * 40, y: y * 0.9, z: Math.sin(a) * 40 }, i, 0.05));
  });
  return { pos: new THREE.Vector3(0, 0, r * 2.1 + H * 0.42), yaw: 0, pitch: -0.05 };
}

/* ── 6. 穹顶星空：斐波那契球面内壁，置身正中央 ── */
function layDome(cards) {
  const n = cards.length;
  const maxW = Math.max(...cards.map(dimsOf).map(d => d.W));
  const r = Math.max(19, (maxW + GAP + 1.1) * Math.sqrt(n) / 3.4);
  const GA = Math.PI * (3 - Math.sqrt(5));
  cards.forEach((c, i) => {
    const t = n === 1 ? 0.5 : (i + 0.5) / n;
    const y = 1 - 2 * t;
    const s = Math.sqrt(Math.max(0, 1 - y * y));
    const a = GA * i;
    const p = new THREE.Vector3(Math.cos(a) * s * r, y * r, Math.sin(a) * s * r);
    c.userData.to.copy(p);
    c.userData.toQ.copy(orientToward(p, { x: 0, y: 0, z: 0 }, i, 0.04));
  });
  return { pos: new THREE.Vector3(0, 0, 0), yaw: 0, pitch: 0 };
}

/* ── 7. 时光隧道：两壁交错展开，向纵深延伸 ── */
function layTunnel(cards) {
  const dims = cards.map(dimsOf);
  const maxW = Math.max(...dims.map(d => d.W));
  const maxH = Math.max(...dims.map(d => d.H));
  const halfW = maxW / 2 + 6.5;   /* 两壁离中轴更远，隧道更开阔 */
  const zStep = maxW + GAP + 0.8;
  const lvY = [-(maxH / 2 + 0.4), maxH / 2 + GAP + 0.4];
  cards.forEach((c, i) => {
    const side = i % 2 ? 1 : -1;
    const k = Math.floor(i / 2);
    const col = Math.floor(k / 2), lv = k % 2;
    const z = 8 - col * zStep - (lv ? zStep / 2 : 0);
    const p = new THREE.Vector3(side * halfW, lvY[lv], z);
    c.userData.to.copy(p);
    c.userData.toQ.copy(orientToward(p, { x: 0, y: p.y, z }, i, 0.05));
  });
  const bb = boundsOf(cards);
  return { pos: new THREE.Vector3(0, 0.6, bb.maxZ + 9), yaw: 0, pitch: 0 };
}

/* ═══════════════ 时间分区布局 ═══════════════ */

/* 按拍摄年月分组；无时间的归入「未标注时间」组排最后 */
function buildTimeGroups() {
  const map = new Map();
  state.cards.forEach((c, i) => {
    const ts = c.userData.item.dateTs;
    let key = 'unknown', label = '未标注时间';
    if (ts) {
      const d = new Date(ts);
      key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      label = `${d.getFullYear()}年${d.getMonth() + 1}月`;
    }
    if (!map.has(key)) map.set(key, { key, label, indices: [] });
    map.get(key).indices.push(i);
  });
  const keys = [...map.keys()].sort((a, b) =>
    a === 'unknown' ? 1 : b === 'unknown' ? -1 : a.localeCompare(b));
  const list = keys.map(key => map.get(key));
  const giOf = new Map();
  list.forEach((g, gi) => g.indices.forEach(ix => giOf.set(ix, gi)));
  return { list, giOf };
}

/* ── 8. 时间星岛：按拍摄年月聚岛，从旧到新；岛内从全局晶格领胞 ── */
function layTime(cards) {
  const n = cards.length;
  const groups = buildTimeGroups();
  const G = groups.list.length;
  const rMax = 22 + n * 0.3;   /* 岛间半径随 CELL 一齐放大 */
  const centers = groups.list.map((g, gi) => {
    const t = G <= 1 ? 0.5 : gi / (G - 1);
    const a = -Math.PI / 2 + t * Math.PI * 2.15;
    const r = 7.5 + t * rMax;
    return { x: Math.cos(a) * r, y: (t - 0.5) * 4.6, z: Math.sin(a) * r };
  });
  /* 每个晶格胞归最近的岛；岛按距离就近取用，天然互不重叠 */
  const buckets = centers.map(() => []);
  LATTICE.forEach(P => {
    const px = (P.x + P.jx) * CELL, py = (P.y + P.jy) * CELL, pz = (P.z + P.jz) * CELL;
    let bi = 0, bd = Infinity;
    centers.forEach((C, gi) => {
      const dx = px - C.x, dy = py - C.y, dz = pz - C.z;
      const d = dx * dx + dy * dy + dz * dz;
      if (d < bd) { bd = d; bi = gi; }
    });
    buckets[bi].push({ P, d: bd });
  });
  const claimed = new Set();
  const cellFor = new Map();
  buckets.forEach((list, gi) => {
    list.sort((a, b) => a.d - b.d);
    const idxs = groups.list[gi].indices;
    const m = Math.min(idxs.length, list.length);
    for (let k = 0; k < m; k++) { cellFor.set(idxs[k], list[k].P); claimed.add(list[k].P); }
  });
  /* 岛周围的胞不够时（月份过密），从全局剩余胞里就近补齐 */
  groups.list.forEach((g, gi) => {
    g.indices.forEach(ix => {
      if (cellFor.has(ix)) return;
      const C = centers[gi];
      let best = null, bd = Infinity;
      for (const P of LATTICE) {
        if (claimed.has(P)) continue;
        const dx = (P.x + P.jx) * CELL - C.x, dy = (P.y + P.jy) * CELL - C.y, dz = (P.z + P.jz) * CELL - C.z;
        const d = dx * dx + dy * dy + dz * dz;
        if (d < bd) { bd = d; best = P; }
      }
      if (best) { cellFor.set(ix, best); claimed.add(best); }
    });
  });
  cards.forEach((c, i) => {
    const P = cellFor.get(i);
    const C = centers[groups.giOf.get(i)];
    c.userData.to.set((P.x + P.jx) * CELL, (P.y + P.jy) * CELL, (P.z + P.jz) * CELL);
    c.userData.toQ.copy(orientToward(c.userData.to,
      { x: C.x * 0.85, y: C.y, z: C.z * 0.85 + 30 }, i, 0.1));
  });
  /* 岛屿标签（白色 Sprite 常驻面向相机） */
  groups.list.forEach((g, gi) => {
    const s = makeLabel(`${g.label} · ${g.indices.length}张`);
    s.position.set(centers[gi].x, centers[gi].y + 3.0, centers[gi].z);
    labelGroup.add(s);
  });
  return { pos: new THREE.Vector3(0, 3.4, 15 + rMax * 1.12), yaw: 0, pitch: -0.03 };
}

const LAYOUTS = [
  { id: 'scatter', name: '自由散布', tag: '漂浮世界', desc: '均匀漂浮 · 互不接触', place: layScatter, fogK: 1.0 },
  { id: 'flatwall', name: '照片墙', tag: '无限画布', desc: '单面巨墙 · 拖拽平移 · 零重叠', place: layFlat, fogK: 0.55 },
  { id: 'grid',    name: '矩阵展墙', tag: '画廊模式', desc: '多面展墙 · 整齐有缝隙', place: layGrid,    fogK: 0.9 },
  { id: 'wave',    name: '波浪幕墙', tag: '呼吸节律', desc: '起伏墙面 · 错落波动', place: layWave,    fogK: 0.9 },
  { id: 'ring',    name: '环形剧场', tag: '环绕沉浸', desc: '站上圆心 · 被照片环绕', place: layRing,    fogK: 0.78 },
  { id: 'helix',   name: '螺旋之塔', tag: '盘旋向上', desc: '双螺旋 · 向天空生长', place: layHelix,   fogK: 1.0 },
  { id: 'dome',    name: '穹顶星空', tag: '包裹穹顶', desc: '球幕内壁 · 置身正中央', place: layDome,    fogK: 0.5 },
  { id: 'tunnel',  name: '时光隧道', tag: '纵深穿行', desc: '两壁交错 · 向深处延伸', place: layTunnel,  fogK: 1.7 },
  { id: 'time',    name: '时间星岛', tag: '拍摄年月', desc: '按拍摄时间聚岛 · 旧→新', place: layTime,    fogK: 0.95 },
];
const curLayout = () => LAYOUTS.find(l => l.id === state.layoutId) || LAYOUTS[0];

/* 时间段标签（Sprite 常驻面向相机，白底金字） */
const labelGroup = new THREE.Group();
scene.add(labelGroup);

function disposeLabels() {
  labelGroup.children.forEach(s => { s.material.map?.dispose(); s.material.dispose(); });
  labelGroup.clear();
}

function makeLabel(text) {
  const cv = document.createElement('canvas');
  const g = cv.getContext('2d');
  const font = '600 30px Inter, "PingFang SC", "Microsoft YaHei", sans-serif';
  g.font = font;
  const tw = Math.ceil(g.measureText(text).width);
  cv.width = tw + 56; cv.height = 64;
  const r = 18, w = cv.width, h = cv.height;
  g.beginPath();
  g.moveTo(r, 0); g.arcTo(w, 0, w, h, r); g.arcTo(w, h, 0, h, r); g.arcTo(0, h, 0, 0, r); g.arcTo(0, 0, w, 0, r);
  g.closePath();
  const TC = THEMES[state.theme];
  g.fillStyle = TC.labelBg;
  g.fill();
  g.strokeStyle = TC.labelBorder; g.lineWidth = 2; g.stroke();
  g.font = font; g.fillStyle = TC.labelFg;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, w / 2, h / 2 + 1);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
  const k = 0.0125;
  sp.scale.set(w * k, h * k, 1);
  return sp;
}

/* ═══════════════ 卡片 ═══════════════ */

const photoMeshes = [];
const unitPlane = new THREE.PlaneGeometry(1, 1);

/* 记忆角标纹理：金色小圆点（有记忆的照片右上角亮起） */
const memBadgeTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  g.beginPath(); g.arc(32, 32, 13, 0, 7); g.fillStyle = '#d9a84e'; g.fill();
  g.beginPath(); g.arc(32, 32, 19, 0, 7); g.strokeStyle = 'rgba(217,168,78,.4)'; g.lineWidth = 5; g.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

/* 接触阴影纹理：地面软椭圆黑影（白域 = 清晰黑影；夜域同色低透明度） */
const shadowTex = (() => {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 14, 64, 64, 64);
  grd.addColorStop(0, 'rgba(8,10,16,0.60)');
  grd.addColorStop(0.55, 'rgba(8,10,16,0.26)');
  grd.addColorStop(1, 'rgba(8,10,16,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
})();

/* ── 地面接触阴影：实例化软圆斑，随照片升高而放大变淡 ── */
const flatGeo = new THREE.PlaneGeometry(1, 1);
flatGeo.rotateX(-Math.PI / 2);
const gShadowMat = new THREE.MeshBasicMaterial({
  map: shadowTex, transparent: true, opacity: THEMES.light.gShadowOp, depthWrite: false,
});
let gShadow = null, gShadowCap = 0;
const _gsM = new THREE.Matrix4(), _gsP = new THREE.Vector3(),
      _gsS = new THREE.Vector3(), _gsQ = new THREE.Quaternion();
function ensureGShadow(n) {
  if (n <= gShadowCap) return;
  if (gShadow) { scene.remove(gShadow); gShadow.dispose(); }
  gShadowCap = Math.ceil(n * 1.3) + 8;
  gShadow = new THREE.InstancedMesh(flatGeo, gShadowMat, gShadowCap);
  gShadow.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  gShadow.count = 0;
  gShadow.frustumCulled = false;
  scene.add(gShadow);
}
function syncGroundShadows() {
  /* V10.3：用户明确要求彻底移除地面影子（白域黑影 / 夜域暗影都不要）。
     不再创建也不渲染任何接触阴影，仅保证历史实例不残留。 */
  if (gShadow) gShadow.count = 0;
}

/** 照片 = 无边框双面平面（V10.3：地面投影已按需求移除）；尺寸带随机变化 */
function makeCard(item, index) {
  let H = 3.0, W = H * item.aspect;
  if (W > 4.6) { W = 4.6; H = W / item.aspect; }
  if (H > 3.6) { H = 3.6; W = H * item.aspect; }
  const mulBase = 0.85 + rand(index * 1.7 + 3) * 0.38;   /* 随机尺寸（配置里的"照片尺寸"在它之上再乘） */
  const mul = mulBase * CFG.cardK;
  H *= mul; W *= mul;

  const mat = new THREE.MeshBasicMaterial({ map: item.tex, side: THREE.DoubleSide, fog: true, toneMapped: false, transparent: true });
  const mesh = new THREE.Mesh(unitPlane, mat);
  mesh.scale.set(W, H, 1);
  mesh.userData.cardIndex = index;
  photoMeshes.push(mesh);

  /* 照片本体零附加效果：无描边、无光晕、无背景板，观看时原画质呈现 */

  const g = new THREE.Group();
  g.add(mesh);

  /* 相框层（V10.12）：预设框 = 不透明底板贴在照片后（四周露出即边框）；
     自定义框 = 带透明中心的 PNG 贴在照片前。默认隐藏，由 applyFrame 统一驱动。 */
  const frameMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1, fog: true, toneMapped: false, side: THREE.DoubleSide });
  const frame = new THREE.Mesh(unitPlane, frameMat);
  frame.visible = false;
  frame.renderOrder = 0;
  g.add(frame);
  /* 记忆角标：挂在卡片右上角，有记忆时亮起（聚焦观看时被置顶照片覆盖，保持原画质零附加） */
  const badge = new THREE.Sprite(new THREE.SpriteMaterial({ map: memBadgeTex, transparent: true, depthWrite: false, fog: false }));
  badge.scale.set(0.62, 0.62, 1);
  badge.position.set(W / 2 + 0.16, H / 2 + 0.16, 0.05);
  badge.visible = false;
  g.add(badge);
  g.userData = {
    index, item, mesh, W, H,
    sizeMul: mulBase,                    // 原始随机尺寸系数（照片尺寸档位在它之上再乘）
    frame,                               // 相框层
    phase: Math.random() * Math.PI * 2,
    hk: 0, hkv: 0,                       // 触碰动效弹簧
    to: new THREE.Vector3(), toQ: new THREE.Quaternion(),
    badge,
  };
  return g;
}

/* 聚焦目标临时置顶渲染：穿透挡在面前的簇内邻居，退出时恢复 */
let pinnedCard = null;
function pinCard(c) {
  if (pinnedCard === c) return;
  unpinCard();
  if (c) {
    pinnedCard = c;
    const m = c.userData.mesh.material;
    m.depthTest = false;
    m.fog = false;          /* 聚焦照片完全不受雾影响，原画质呈现 */
    m.needsUpdate = true;
    c.userData.mesh.renderOrder = 50;
  }
}
function unpinCard() {
  if (!pinnedCard) return;
  const m = pinnedCard.userData.mesh.material;
  m.depthTest = true;
  m.fog = true;
  m.needsUpdate = true;
  pinnedCard.userData.mesh.renderOrder = 0;
  pinnedCard = null;
}

/* ═══════════════ 配置应用（相框 / 尺寸 / 底色 / 雾 / 星空） ═══════════════ */

function applyFrame() {
  const F = FRAMES[CFG.frame] || FRAMES.none;
  const fw = CFG.frameW || 1;
  state.cards.forEach(c => {
    const u = c.userData, fr = u.frame;
    if (!fr) return;
    if (CFG.frame === 'none' || !u.W) { fr.visible = false; return; }
    const m = fr.material;
    if (F.front && frameTex) { m.map = frameTex; m.color.set(0xffffff); }
    else { m.map = null; m.color.set(F.color); }
    m.depthWrite = !F.front;          /* 前置相框不写深度，避免透明中心挡照片 */
    m.needsUpdate = true;
    const ex = (F.front ? u.W * 0.13 : F.ext) * fw;
    const ey = (F.front ? u.H * 0.13 : F.ext) * fw;
    fr.scale.set(u.W + ex * 2, u.H + ey * 2, 1);
    fr.position.set(0, 0, F.front ? 0.03 : -0.03);
    fr.renderOrder = F.front ? 2 : 0;
    fr.visible = true;
  });
}

function applyCardSize() {
  state.cards.forEach(c => {
    const u = c.userData, it = u.item;
    let H = 3.0, W = H * it.aspect;
    if (W > 4.6) { W = 4.6; H = W / it.aspect; }
    if (H > 3.6) { H = 3.6; W = H * it.aspect; }
    const mul = (u.sizeMul || 1) * CFG.cardK;
    u.W = W * mul; u.H = H * mul;
    u.mesh.scale.set(u.W, u.H, 1);
    if (u.badge) u.badge.position.set(u.W / 2 + 0.16, u.H / 2 + 0.16, 0.05);
  });
  applyFrame();
}

/* 主题色改由 CFG 底色驱动（THEME_COLORS 由它填充） */
function rebuildThemeColors() {
  if (!THEME_COLORS.light) return;
  THEME_COLORS.light.bg.set(CFG.bgLight);
  THEME_COLORS.light.ground.set(shade(CFG.bgLight, 0.945));
  THEME_COLORS.dark.bg.set(CFG.bgDark);
  THEME_COLORS.dark.ground.set(shade(CFG.bgDark, 0.92));
}

/* 一次性应用全部配置（opts.stars=true 时重建星空点云） */
function applyCfg(opts = {}) {
  saveCfg();
  rebuildThemeColors();
  if (typeof setThemeColors === 'function') setThemeColors(state.theme);
  fogTarget = THEMES[state.theme].fogD * (curLayout().fogK || 1) * CFG.fogK;
  if (opts.stars) buildSky(CFG.starK);
  applyCardSize();
  if (state.cards.length) applyLayout(true);
  syncCfgUI();
}

/* 自定义相框持久化：转 dataURL 存 localStorage（>3MB 跳过，避免撑爆配额） */
function persistFrame(img) {
  try {
    const cv = document.createElement('canvas');
    const maxS = 1024;
    const w0 = img.naturalWidth || img.width, h0 = img.naturalHeight || img.height;
    const k = Math.min(1, maxS / Math.max(w0, h0));
    cv.width = Math.max(2, Math.round(w0 * k));
    cv.height = Math.max(2, Math.round(h0 * k));
    cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
    const url = cv.toDataURL('image/png');
    if (url.length < 3.2e6) localStorage.setItem('pw.frame', url);
  } catch (e) { /* ignore */ }
}
function loadStoredFrame() {
  try {
    const url = localStorage.getItem('pw.frame');
    if (!url) return;
    const img = new Image();
    img.onload = () => {
      const tex = new THREE.Texture(img);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      frameTex = tex;
      if (CFG.frame === 'custom') applyFrame();
      syncCfgUI();
    };
    img.src = url;
  } catch (e) { /* ignore */ }
}

/* ═══════════════ 自由飞行相机 ═══════════════ */

const cam = {
  pos: new THREE.Vector3(0, 2.4, 27),
  vel: new THREE.Vector3(),
  yaw: 0, pitch: -0.02, roll: 0,
  wantYaw: 0, wantPitch: -0.02, wantRoll: 0,
};
const clampPitch = v => Math.max(-1.45, Math.min(1.45, v));
const wrapPi = a => Math.atan2(Math.sin(a), Math.cos(a));
const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function flyTo(pos, yaw, pitch, dur = 1.0, roll = 0) {
  state.fly = {
    t: 0, dur,
    fromPos: cam.pos.clone(), toPos: pos.clone(),
    fromYaw: cam.wantYaw, toYaw: cam.wantYaw + wrapPi(yaw - cam.wantYaw),
    fromPitch: cam.wantPitch, toPitch: clampPitch(pitch),
    fromRoll: cam.wantRoll, toRoll: cam.wantRoll + wrapPi(roll - cam.wantRoll),
  };
  cam.vel.set(0, 0, 0);
}

let lastView = null;

function overviewCamera() {
  state.fly = null;
  cam.vel.set(0, 0, 0);
  cam.yaw = cam.wantYaw = 0;
  cam.pitch = cam.wantPitch = -0.02;
  cam.roll = cam.wantRoll = 0;
  if (lastView) {
    cam.pos.copy(lastView.pos);
    cam.yaw = cam.wantYaw = lastView.yaw || 0;
    cam.pitch = cam.wantPitch = lastView.pitch != null ? lastView.pitch : -0.02;
    cam.roll = cam.wantRoll = 0;
  } else {
    cam.pos.set(0, 2.4, 27);
  }
}

/* ── 开场：相机从远处缓缓推进，配合品牌页揭幕 ── */
let introDone = false;
function dismissIntro() {
  if (introDone) return;
  introDone = true;
  const el = document.getElementById('intro');
  if (el) { el.classList.add('done'); setTimeout(() => el.remove(), 950); }
  const v = lastView || { pos: new THREE.Vector3(0, 2.4, 27), yaw: 0, pitch: -0.02 };
  cam.pos.set(v.pos.x * 2.2, Math.max(v.pos.y, 2.4) + 12, v.pos.z * 2.2 + 34);
  cam.yaw = cam.wantYaw = v.yaw || 0;
  cam.pitch = cam.wantPitch = -0.05;
  cam.roll = cam.wantRoll = 0;
  flyTo(v.pos, v.yaw || 0, v.pitch != null ? v.pitch : -0.02, 2.8);
}

/* ═══════════════ 照片墙相机模式（无限画布风） ═══════════════
   照片墙布局下相机锁定正视墙面：拖拽平移 + 松手惯性滑行 +
   滚轮/双指推拉远近；拖得越快视角微微倾斜，像快速扫过一整面墙。
   照片的一切交互（点击观看 / 立体视图 / 翻页）原样保留。 */
const wall = {
  on: false,                    // 当前布局是否为照片墙
  pan: new THREE.Vector2(0, 0), // 相机在墙面上的平移位置（世界单位）
  vx: 0, vy: 0,                 // 平移速度（惯性）
  z: 27, zT: 27,                // 当前 / 目标观看距离
  zSaved: 27,                   // 进入观看前的距离，退出时滑回
  zMin: 6.5, zMax: 60,
  bounds: { minX: -20, maxX: 20, minY: -12, maxY: 12 },
  dragging: false, lastT: 0,
  tiltY: 0, tiltP: 0,           // 速度带来的视角微倾
  adopt: false,                 // 飞行动画结束后把相机同步回 pan
};

function wallPanScale() {
  return (wall.z * 2 * Math.tan(camera.fov * Math.PI / 360)) / innerHeight;
}

function wallSyncBounds() {
  if (!state.cards.length) return;
  const bb = boundsOf(state.cards);
  wall.bounds = { minX: bb.minX - 7, maxX: bb.maxX + 7, minY: Math.max(GROUND_Y + 4.5, bb.minY - 5), maxY: bb.maxY + 5 };
  wall.z = wall.zT = lastView ? lastView.pos.z : 27;
  wall.zMax = Math.max(wall.zT * 1.3, 30);
  wall.pan.set(0, 0);
  wall.vx = wall.vy = 0;
  wall.tiltY = wall.tiltP = 0;
  wall.adopt = true;
}

function wallStep(dt, keyActive) {
  if (wall.adopt) {           // 从飞行动画接手：以当前相机为准，避免跳变
    wall.pan.set(cam.pos.x, cam.pos.y);
    wall.z = THREE.MathUtils.clamp(cam.pos.z, wall.zMin, wall.zMax);
    wall.adopt = false;
  }
  if (!wall.dragging && !keyActive) {   // 惯性滑行 + 阻尼
    wall.pan.x += wall.vx * dt;
    wall.pan.y += wall.vy * dt;
    const damp = Math.pow(0.14, dt);
    wall.vx *= damp; wall.vy *= damp;
    if (Math.abs(wall.vx) < 0.02) wall.vx = 0;
    if (Math.abs(wall.vy) < 0.02) wall.vy = 0;
  }
  wall.pan.x = THREE.MathUtils.clamp(wall.pan.x, wall.bounds.minX, wall.bounds.maxX);
  wall.pan.y = THREE.MathUtils.clamp(wall.pan.y, wall.bounds.minY, wall.bounds.maxY);
  wall.z += (wall.zT - wall.z) * Math.min(1, dt * 6);
  const k = Math.min(1, dt * 5);        // 速度越快视角微倾，停下缓缓回正
  wall.tiltY += (THREE.MathUtils.clamp(-wall.vx * 0.0042, -0.095, 0.095) - wall.tiltY) * k;
  wall.tiltP += (THREE.MathUtils.clamp(wall.vy * 0.0030, -0.075, 0.075) - wall.tiltP) * k;
  cam.pos.set(wall.pan.x, wall.pan.y, wall.z);
  cam.yaw = cam.wantYaw = wall.tiltY;
  cam.pitch = cam.wantPitch = wall.tiltP;
  cam.roll = cam.wantRoll = 0;
  cam.vel.set(0, 0, 0);
}

/* ═══════════════ 布局应用与过渡 ═══════════════ */

let trans = { t: 9, dur: 1.0, stagger: 0.5, total: 1.5 };

/* V10.3 距离淡入淡出：近处照片完全不透明，超过 fadeNear 开始渐隐，fadeFar 处完全消失。
   阈值随布局总览机位自适应（布局越大，淡出越远），飞近时照片自然淡入。 */
let fadeNear = 130, fadeFar = 240;

function applyLayout(animate) {
  exitStereo();
  /* V10.11 间距自动调节：每次排布前按当前档位/照片数量算出 GAP·CELL·Z 间距 */
  applySpread();
  /* V10.9 修 bug：切布局前必须先退出「观看照片」和「待机屏保」，
     否则观看状态残留 —— 相机被钉在观看位（新布局完全不生效）、
     照片墙拖拽/滚轮缩放与待机屏保全部失灵、观看信息条常驻不消失。 */
  if (state.focusIndex >= 0) exitFocus();
  if (idle.on) idleWake();
  const n = state.cards.length;
  disposeLabels();
  lastView = null;
  if (!n) return;
  const view = curLayout().place(state.cards);
  fogTarget = THEMES[state.theme].fogD * (curLayout().fogK || 1) * CFG.fogK;

  /* V10 照片墙：flatwall 布局启用墙相机模式（拖拽平移 / 滚轮推拉） */
  if (state.layoutId === 'flatwall') {
    if (!wall.on) { wall.on = true; wallSyncBounds(); }
  } else if (wall.on) {
    wall.on = false; wall.vx = wall.vy = 0;
  }

  lastView = view;

  /* 依据本布局的总览机位与场景半径，推算淡入淡出距离阈值
     （V10.5：靠近场景中心的布局（环形/穹顶）所有照片都在半径上，阈值必须大于半径，
      否则"环上照片整体半透明"；散布类则让最前排完全清晰、只淡出远端） */
  {
    const cd = view.pos.length();
    let maxCardD = 10;
    state.cards.forEach(c => { maxCardD = Math.max(maxCardD, c.userData.to.length()); });
    fadeNear = Math.max(48, cd * 0.62 + maxCardD * 1.05) * CFG.fadeK;
    fadeFar = Math.max(140, fadeNear * 1.9) * (1 + (CFG.fadeK - 1) * 0.7);
  }

  state.cards.forEach((c, i) => {
    c.userData.from = c.position.clone();
    c.userData.fromQ = c.quaternion.clone();
    c.userData.dly = rand(i * 0.77 + 3.1) * trans.stagger;
  });
  if (!animate) {
    trans.t = trans.total + 1;
    state.cards.forEach(c => {
      c.position.copy(c.userData.to);
      c.quaternion.copy(c.userData.toQ);
    });
  } else {
    trans.t = 0;
  }
  syncSpreadUI();   /* 间距档位标签跟随照片数量刷新 */
}

/* ═══════════════ 指针交互 ═══════════════ */

const pointers = new Map();
let dragged = false, downAt = 0, downPos = [0, 0], pinchDist = 0;
const ndc = new THREE.Vector2(-2, -2);
const ray = new THREE.Raycaster();
const pinch = () => { const a = [...pointers.values()]; return Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y); };

function interruptUser() {
  if (state.fly) state.fly = null;
  if (state.tour) { state.tour = false; syncTourBtn(); }
}

canvas.addEventListener('pointerdown', e => {
  try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* 合成/已失效的指针：忽略 */ }
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  dragged = false; downAt = performance.now(); downPos = [e.clientX, e.clientY];
  canvas.classList.add('dragging');
  interruptUser();
  /* 聚焦中按下不再退出：拖拽 = 调整视角，点空白才退出（见 endPointer） */
  if (pointers.size === 2) pinchDist = pinch();
});

canvas.addEventListener('pointermove', e => {
  const p = pointers.get(e.pointerId);
  if (p) {
    if (Math.abs(e.clientX - downPos[0]) + Math.abs(e.clientY - downPos[1]) > 5) dragged = true;
    if (pointers.size === 1) {
      if (wall.on && state.focusIndex < 0) {
        /* 照片墙：拖拽 = 平移墙面（内容跟手），并记录速度供惯性/倾斜 */
        const now = performance.now();
        const dtE = Math.max(8, now - (wall.lastT || now - 16)) / 1000;
        wall.lastT = now;
        const k = wallPanScale();
        const dx = e.clientX - p.x, dy = e.clientY - p.y;
        wall.pan.x -= dx * k;
        wall.pan.y += dy * k;
        wall.vx = wall.vx * 0.7 + (-dx * k / dtE) * 0.3;
        wall.vy = wall.vy * 0.7 + (dy * k / dtE) * 0.3;
      } else {
        cam.wantYaw -= (e.clientX - p.x) * 0.0032;
        cam.wantPitch = clampPitch(cam.wantPitch - (e.clientY - p.y) * 0.0029);
      }
    }
    p.x = e.clientX; p.y = e.clientY;
    if (pointers.size === 2) {
      const d = pinch();
      if (pinchDist > 0) {
        if (wall.on && state.focusIndex < 0) {
          wall.zT = THREE.MathUtils.clamp(wall.zT - (d - pinchDist) * wallPanScale() * 1.9, wall.zMin, wall.zMax);
        } else {
          camera.getWorldDirection(fwdV);
          cam.vel.addScaledVector(fwdV, (d - pinchDist) * 0.055);
        }
      }
      pinchDist = d;
    }
  }
  ndc.x = (e.clientX / innerWidth) * 2 - 1;
  ndc.y = -(e.clientY / innerHeight) * 2 + 1;
  if (state.focusIndex >= 0) fbWake();
});

function endPointer(e) {
  const p = pointers.get(e.pointerId);
  pointers.delete(e.pointerId);
  if (!pointers.size) canvas.classList.remove('dragging');
  if (p && !dragged && performance.now() - downAt < 450
      && Math.abs(e.clientX - downPos[0]) + Math.abs(e.clientY - downPos[1]) < 6) {
    ray.setFromCamera(new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1), camera);
    const hit = ray.intersectObjects(photoMeshes, false).find(h => h.object.material.opacity > 0.3);   /* 淡出中的照片不可点 */
    if (hit && !(state.stereo.on && hit.object.userData.cardIndex === state.focusIndex)) {
      focusCard(hit.object.userData.cardIndex);
    } else if (state.focusIndex >= 0) {
      /* 点空白处（或立体模式下点当前照片之外）退出：先退立体，再退观看 */
      if (state.stereo.on) exitStereo(); else exitFocus();
    }
  }
}
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);

canvas.addEventListener('wheel', e => {
  e.preventDefault();
  interruptUser();
  /* 聚焦观看中：滚轮 = 调整观看距离（推近 / 拉远），不退出（立体模式下同样可用） */
  if (state.focusIndex >= 0) {
    const card = state.cards[state.focusIndex];
    if (!card) return;
    const p = card.getWorldPosition(new THREE.Vector3());
    const toCard = p.sub(cam.pos);
    const dist = toCard.length();
    const nd = THREE.MathUtils.clamp(dist + (e.deltaY < 0 ? -0.85 : 0.85), 1.5, 26);
    cam.pos.addScaledVector(toCard.normalize(), dist - nd);   /* 上滚推近 / 下滚拉远 */
    return;
  }
  /* 照片墙：滚轮 = 推拉观看距离（拉远看全墙 / 推近看单张） */
  if (wall.on) {
    wall.zT = THREE.MathUtils.clamp(wall.zT + e.deltaY * 0.022, wall.zMin, wall.zMax);
    return;
  }
  camera.getWorldDirection(fwdV);
  cam.vel.addScaledVector(fwdV, e.deltaY < 0 ? 3.4 : -3.4);
}, { passive: false });

/* ═══════════════ 聚焦 ═══════════════ */

const focusbar = document.getElementById('focusbar');

function focusCard(i) {
  const c = state.cards[i];
  if (!c) return;
  exitStereo();
  state.focusIndex = i;
  if (state.tour) { state.tour = false; syncTourBtn(); }
  if (wall.on) { wall.zSaved = wall.zT; wall.dragging = false; wall.vx = 0; wall.vy = 0; }

  /* 观看姿态：相机精确落在照片法线正前方，并与照片滚转对齐 —— 照片永远方正朝屏，
     拖拽/缩放都在正对基础上进行，不会产生斜视角透视变形。
     V10.6 用布局目标位姿 to / toQ 计算（不能用当前世界位姿：点击瞬间照片还带悬停倾斜
     spring，聚焦后照片会弹回 toQ，相机若对齐"倾斜中的姿态"就会残留几度倾角）。 */
  const p = c.userData.to.clone();
  const q = c.userData.toQ;
  const nrm = new THREE.Vector3(0, 0, 1).applyQuaternion(q).normalize();
  const upW = new THREE.Vector3(0, 1, 0).applyQuaternion(q);
  const dist = Math.max(3.4, c.userData.W * 1.5, c.userData.H * 1.1);
  const toPos = p.clone().addScaledVector(nrm, dist);

  /* 若在布局过渡途中点开，让这张照片先就位，避免相机对齐到"半途位置" */
  c.position.copy(p);
  c.quaternion.copy(q);

  const zA = nrm.clone();
  const upP = upW.clone().addScaledVector(zA, -upW.dot(zA)).normalize();
  const xA = new THREE.Vector3().crossVectors(upP, zA).normalize();
  const eul = new THREE.Euler().setFromQuaternion(
    new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(xA, upP, zA)), 'YXZ');
  flyTo(toPos, eul.y, eul.x, 1.0, eul.z);

  const it = c.userData.item;
  document.getElementById('fName').textContent = it.name;
  const showDate = it.dateTs || (!it.sample && it.date);
  document.getElementById('fDate').textContent =
    (showDate ? new Date(showDate).toLocaleDateString('zh-CN') + ' · ' : '') + `${i + 1} / ${state.cards.length}`;
  focusbar.classList.add('show');
  document.body.classList.add('focusing');
  fbWake();
  pinCard(c);
  memLoadFor(c);   // 预载这张照片的记忆（心情/文字/录音/音视频）
}

function exitFocus() {
  exitStereo();
  if (state.focusIndex < 0) return;
  state.focusIndex = -1;
  focusbar.classList.remove('show');
  focusbar.classList.remove('idle');
  clearTimeout(fbIdle);
  document.body.classList.remove('focusing');
  unpinCard();
  memOpenPanel(false);
  cam.wantRoll = 0;   /* 平滑回正滚转（若上次观看是斜排照片） */
  if (wall.on) {   // 照片墙：观看结束滑回原来的观看距离，平移位置就地接管
    wall.pan.set(cam.pos.x, cam.pos.y);
    wall.z = cam.pos.z;
    wall.zT = THREE.MathUtils.clamp(wall.zSaved, wall.zMin, wall.zMax);
    wall.vx = wall.vy = 0;
  }
}

function stepFocus(dir) {
  if (state.focusIndex < 0) return;
  focusCard((state.focusIndex + dir + state.cards.length) % state.cards.length);
}

document.getElementById('fPrev').onclick = () => stepFocus(-1);
document.getElementById('fNext').onclick = () => stepFocus(1);
document.getElementById('fClose').onclick = () => exitFocus();
document.getElementById('fStereo').onclick = () => toggleStereo();
document.getElementById('fTheme').onclick = () => applyTheme(state.theme === 'dark' ? 'light' : 'dark');
document.getElementById('stX').onclick = () => exitStereo();

/* 观看信息条空闲淡出：鼠标/键盘一动就回来，静止 2.8s 后隐去，照片零遮挡 */
let fbIdle = null;
function fbWake() {
  if (state.focusIndex < 0) return;
  focusbar.classList.remove('idle');
  clearTimeout(fbIdle);
  fbIdle = setTimeout(() => {
    if (state.focusIndex >= 0 && !state.stereo.on) focusbar.classList.add('idle');
  }, 2800);
}

/* ═══════════════ 立体视图：AI 景深 + 人像分层 2.5D ═══════════════
   单张照片 → 深度模型逐像素推测远近 → 照片弯成曲面；
   人像分割把人物独立成层浮出；鼠标带动约 ±4° 视差。
   模型经 CDN 动态加载（首次联网，浏览器自动缓存），
   分析结果量化后存入 IndexedDB（depth store），第二次秒开。
   TODO(服务器)：日后加香港服务器时，在此函数最前面加远程分支——
   先 POST 照片到服务器跑深度，失败再回落本地推理。 */

const ST_TF = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1';
const ST_SEG = 'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite';
const stLib = { pipe: null, seg: null, segTried: false, dev: '', T: null, mpSet: {} };
const dynImport = u => import(u);

/* 模型下载进度 → stBox 文案（有百分比，就不再是"卡死"的错觉） */
function stProgressCb(p) {
  try {
    if (p.status === 'progress' && p.total) {
      const pct = Math.min(100, Math.round((p.loaded / p.total) * 100));
      stTxt.textContent = `AI 模型下载中 ${pct}% — 首次需下载，之后离线秒开`;
    } else if (p.status === 'initiate') {
      stTxt.textContent = 'AI 模型准备中…（首次约 27MB，完成后离线可用）';
    } else if (p.status === 'ready') {
      stTxt.textContent = 'AI 景深分析中…';
    }
  } catch (e) { /* ignore */ }
}

/* transformers.js 运行时：本地 models/tf/ 优先（http 下零网络），file:// 等回落 CDN */
async function stLoadLib() {
  if (stLib.T) return stLib.T;
  try {
    stLib.T = await dynImport('models/tf/transformers.min.js');
    stLib.T.env.backends.onnx.wasm.wasmPaths = 'models/tf/';
  } catch (e) {
    stLib.T = await dynImport(ST_TF);
  }
  return stLib.T;
}

async function ensureDepthPipe() {
  if (stLib.pipe) return stLib.pipe;
  const T = await stLoadLib();
  /* 模型三级来源：项目内 models/（离线秒开）→ hf-mirror.com（国内镜像）→ huggingface.co（官方）
     local 加载失败时 transformers.js 自动回落 remoteHost */
  T.env.allowLocalModels = true;
  T.env.localModelPath = 'models/';
  T.env.remoteHost = 'https://hf-mirror.com/';
  const hasGPU = typeof navigator !== 'undefined' && !!navigator.gpu;
  const devices = hasGPU ? ['webgpu', 'wasm'] : ['wasm'];
  let lastErr;
  for (const device of devices) {
    try {
      stLib.pipe = await T.pipeline('depth-estimation', 'onnx-community/depth-anything-v2-small',
        { device, dtype: 'q8', progress_callback: stProgressCb });
      stLib.dev = device;
      return stLib.pipe;
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error('depth pipeline init failed');
}

async function ensureSegmenter() {
  if (stLib.seg) return stLib.seg;
  if (stLib.segTried) return null;
  stLib.segTried = true;
  /* 四级组合回落：本地 wasm + 本地模型 → 本地 wasm + CDN 模型 → CDN wasm + 本地模型 → 全 CDN */
  for (const wasmDir of ['models/mp/', MP_WASM]) {
    let files;
    try {
      if (!stLib.mpSet[wasmDir]) stLib.mpSet[wasmDir] = await FilesetResolver.forVisionTasks(wasmDir);
      files = stLib.mpSet[wasmDir];
    } catch (e) { continue; }
    for (const modelPath of ['models/selfie_segmenter.tflite', ST_SEG]) {
      for (const delegate of ['GPU', 'CPU']) {
        try {
          stLib.seg = await ImageSegmenter.createFromOptions(files, {
            baseOptions: { modelAssetPath: modelPath, delegate },
            runningMode: 'IMAGE', outputConfidenceMasks: true, outputCategoryMask: false,
          });
          return stLib.seg;
        } catch (e) { /* 试下一种组合 */ }
      }
    }
  }
  return null;
}

function stereoKey(card) {
  const it = card.userData.item;
  return (it.rec && it.rec.id) || ('smp:' + it.name + '|' + it.w + 'x' + it.h + '|' + (it.dateTs || 0));
}

/* 分析一张照片：优先读缓存，否则本地推理（深度 + 人像），量化后写缓存 */
async function analyzeStereo(card) {
  const cached = await DB.depthGet(stereoKey(card)).catch(() => null);
  if (cached && cached.d) return cached;
  const src = card.userData.item.tex.image;
  /* 先让「分析中」提示渲染出来再开算（主线程推理会短暂占帧） */
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  const pipe = await ensureDepthPipe();
  const out = await pipe(src);
  const dims = out.predicted_depth.dims;
  const dh = dims[dims.length - 2], dw = dims[dims.length - 1];
  const raw = out.predicted_depth.data;          /* Float32Array，值大 = 离镜头近 */
  let mn = Infinity, mx = -Infinity;
  for (let i = 0; i < raw.length; i++) { if (raw[i] < mn) mn = raw[i]; if (raw[i] > mx) mx = raw[i]; }
  const span = (mx - mn) || 1;
  const NW = 256, NH = 256;
  const d8 = new Uint8Array(NW * NH);
  for (let y = 0; y < NH; y++) {
    const fy = Math.min(dh - 1, (y / (NH - 1)) * (dh - 1)) | 0;
    for (let x = 0; x < NW; x++) {
      const fx = Math.min(dw - 1, (x / (NW - 1)) * (dw - 1)) | 0;
      d8[y * NW + x] = Math.round(((raw[fy * dw + fx] - mn) / span) * 255);
    }
  }

  /* 人像分割（可选增强；失败自动退纯景深） */
  let m8 = null, MN = 0;
  const seg = await ensureSegmenter();
  if (seg) {
    try {
      const r = seg.segment(src);
      const masks = r.confidenceMasks || [];
      const cm = masks.length > 1 ? masks[1] : masks[0];   /* selfie 分类的 1 号 = 人物 */
      if (cm) {
        const mf = cm.getAsFloat32Array();
        const mw = cm.width, mh = cm.height;
        MN = 128;
        m8 = new Uint8Array(MN * MN);
        for (let y = 0; y < MN; y++) {
          const sy = Math.min(mh - 1, (y / (MN - 1)) * (mh - 1)) | 0;
          for (let x = 0; x < MN; x++) {
            const sx = Math.min(mw - 1, (x / (MN - 1)) * (mw - 1)) | 0;
            m8[y * MN + x] = Math.round(mf[sy * mw + sx] * 255);
          }
        }
      }
      masks.forEach(mk => { try { mk.close(); } catch (e) {} });
      try { r.close(); } catch (e) {}
    } catch (e) { m8 = null; MN = 0; }
  }

  const rec = { id: stereoKey(card), w: NW, h: NH, d: d8, mw: MN, mh: m8 ? MN : 0, m: m8 };
  DB.depthPut(rec).catch(() => {});
  return rec;
}

const ST_SEGW = 72, ST_SEGH = 48;

/* ── 背景填补（Facebook 3D 照片同款）：人物区域的深度与纹理都用周围背景扩散填充，
   人物层浮出后身后露出的是"补出来的背景"，不再有前景贴片遮挡/重影 ── */
function fillDepthHole(d8, W, H, m8, MN) {
  const hole = new Uint8Array(W * H);
  let remaining = 0;
  for (let y = 0; y < H; y++) {
    const sy = Math.min(MN - 1, (y / (H - 1)) * (MN - 1)) | 0;
    for (let x = 0; x < W; x++) {
      const sx = Math.min(MN - 1, (x / (W - 1)) * (MN - 1)) | 0;
      if (m8[sy * MN + sx] > 115) { hole[y * W + x] = 1; remaining++; }
    }
  }
  /* 膨胀 2 圈：人物边缘一圈的深度也属于人物，不能渗进背景曲面 */
  for (let ring = 0; ring < 2; ring++) {
    const snap = hole.slice();
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const i = y * W + x;
      if (snap[i]) continue;
      if ((x > 0 && snap[i - 1]) || (x < W - 1 && snap[i + 1]) ||
          (y > 0 && snap[i - W]) || (y < H - 1 && snap[i + W])) { hole[i] = 1; remaining++; }
    }
  }
  const holeAll = hole.slice();
  /* 迭代扩散：洞内像素取已填邻居均值，由外向内生长 */
  let guard = 0;
  while (remaining > 0 && guard++ < 220) {
    const snap = hole.slice();
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const i = y * W + x;
      if (!snap[i]) continue;
      let sum = 0, n = 0;
      if (x > 0 && !snap[i - 1]) { sum += d8[i - 1]; n++; }
      if (x < W - 1 && !snap[i + 1]) { sum += d8[i + 1]; n++; }
      if (y > 0 && !snap[i - W]) { sum += d8[i - W]; n++; }
      if (y < H - 1 && !snap[i + W]) { sum += d8[i + W]; n++; }
      if (n) { d8[i] = Math.round(sum / n); hole[i] = 0; remaining--; }
    }
  }
  /* 接缝平滑：填补区域 3×3 均值 ×2 轮 */
  for (let r = 0; r < 2; r++) {
    const src = d8.slice();
    for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
      const i = y * W + x;
      if (!holeAll[i]) continue;
      d8[i] = Math.round((src[i - 1] + src[i + 1] + src[i - W] + src[i + W] + src[i]) / 5);
    }
  }
  return d8;
}

function makeStereoBgTex(src, m8, MN) {
  const w = src.width, h = src.height;
  const mk = (cw, ch) => { const c = document.createElement('canvas'); c.width = cw; c.height = ch; return c; };
  /* ① 下采样 RGB 扩散：人物区域被"从边界生长进来的背景色"取代（无人物残影） */
  const SW = 72, SH = Math.max(8, Math.round(72 * h / w));
  const scv = mk(SW, SH); const sctx = scv.getContext('2d');
  sctx.drawImage(src, 0, 0, SW, SH);
  const sd = sctx.getImageData(0, 0, SW, SH);
  const px = sd.data;
  const hole = new Uint8Array(SW * SH);
  let remaining = 0;
  for (let y = 0; y < SH; y++) {
    const sy = Math.min(MN - 1, (y / (SH - 1)) * (MN - 1)) | 0;
    for (let x = 0; x < SW; x++) {
      const sx = Math.min(MN - 1, (x / (SW - 1)) * (MN - 1)) | 0;
      if (m8[sy * MN + sx] > 100) { hole[y * SW + x] = 1; remaining++; }
    }
  }
  let guard = 0;
  while (remaining > 0 && guard++ < 300) {
    const snap = hole.slice();
    for (let y = 0; y < SH; y++) for (let x = 0; x < SW; x++) {
      const i = y * SW + x;
      if (!snap[i]) continue;
      let r = 0, g = 0, b = 0, n = 0;
      if (x > 0 && !snap[i - 1]) { r += px[i*4-4]; g += px[i*4-3]; b += px[i*4-2]; n++; }
      if (x < SW - 1 && !snap[i + 1]) { r += px[i*4+4]; g += px[i*4+5]; b += px[i*4+6]; n++; }
      if (y > 0 && !snap[i - SW*1]) { r += px[i*4-SW*4]; g += px[i*4-SW*4+1]; b += px[i*4-SW*4+2]; n++; }
      if (y < SH - 1 && !snap[i + SW*1]) { r += px[i*4+SW*4]; g += px[i*4+SW*4+1]; b += px[i*4+SW*4+2]; n++; }
      if (n) {
        px[i*4] = r / n; px[i*4+1] = g / n; px[i*4+2] = b / n; px[i*4+3] = 255;
        hole[i] = 0; remaining--;
      }
    }
  }
  sctx.putImageData(sd, 0, 0);
  /* ② 放大 + 轻模糊 = 平滑背景补丁 */
  const bcv = mk(w, h); const bctx = bcv.getContext('2d');
  bctx.filter = 'blur(' + Math.max(4, Math.round(w * 0.015)) + 'px)';
  bctx.drawImage(scv, 0, 0, w, h);
  bctx.filter = 'none';
  /* ③ mask 羽化裁剪：边缘半透明正好与人物层羽化边缘融合 */
  const small = mk(MN, MN); const smctx = small.getContext('2d');
  const im = smctx.createImageData(MN, MN);
  for (let i = 0; i < m8.length; i++) {
    im.data[i * 4] = 255; im.data[i * 4 + 1] = 255; im.data[i * 4 + 2] = 255; im.data[i * 4 + 3] = m8[i];
  }
  smctx.putImageData(im, 0, 0);
  const mcv = mk(w, h); const mctx = mcv.getContext('2d');
  mctx.filter = 'blur(' + Math.max(2, Math.round(w * 0.012)) + 'px)';
  mctx.drawImage(small, 0, 0, w, h);
  mctx.filter = 'none';
  mctx.globalAlpha = 0.85;
  mctx.drawImage(small, 0, 0, w, h);   /* 再补一版略实，人物浮出后边缘外侧全是背景色 */
  mctx.globalAlpha = 1;
  bctx.globalCompositeOperation = 'destination-in';
  bctx.drawImage(mcv, 0, 0);
  bctx.globalCompositeOperation = 'source-over';
  /* ④ 贴回原图的人物区域 = 伪 inpainting */
  const ocv = mk(w, h); const octx = ocv.getContext('2d');
  octx.drawImage(src, 0, 0);
  octx.drawImage(bcv, 0, 0);
  const tex = new THREE.CanvasTexture(ocv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  return tex;
}

/* 用深度 + 人像 mask 把卡片替换成 2.5D 曲面（背景层 + 人物层） */
function buildStereoGroup(card, rec) {
  const { W, H } = card.userData;
  const AMP = W * 0.115, POP = W * 0.115;
  /* 有人物时先做背景填补（深度扩散 + 纹理伪 inpainting），结果缓存在 rec 上复用 */
  if (rec.m && rec.mw && !rec._filled) {
    rec.d = fillDepthHole(rec.d, rec.w, rec.h, rec.m, rec.mw);
    rec.bgTex = makeStereoBgTex(card.userData.item.tex.image, rec.m, rec.mw);
    rec._filled = true;
  }
  const geo = new THREE.PlaneGeometry(W, H, ST_SEGW, ST_SEGH);
  const posA = geo.attributes.position;
  const vCount = posA.count;
  const zBg = new Float32Array(vCount);
  for (let i = 0; i < vCount; i++) {
    const u = posA.getX(i) / W + 0.5;
    const v = posA.getY(i) / H + 0.5;
    const dx = Math.min(rec.w - 1, Math.round(u * (rec.w - 1)));
    const dy = Math.min(rec.h - 1, Math.round((1 - v) * (rec.h - 1)));
    const dv = rec.d[dy * rec.w + dx] / 255;
    const z = (Math.pow(dv, 1.12) - 0.42) * AMP * 2;
    zBg[i] = z;
    posA.setZ(i, z);
  }
  const grp = new THREE.Group();
  const tex = card.userData.item.tex;
  /* 人物照片用填补后的背景（人物区域=周围模糊背景），无人物用原图 */
  const bgMap = rec.bgTex || tex;
  const bgMat = new THREE.MeshBasicMaterial({ map: bgMap, side: THREE.DoubleSide, fog: true, toneMapped: false, depthTest: false });
  const bgMesh = new THREE.Mesh(geo, bgMat);
  bgMesh.renderOrder = 50;
  grp.add(bgMesh);

  let personMesh = null;
  if (rec.m) {
    const mcv = document.createElement('canvas');
    mcv.width = mcv.height = rec.mw;
    const mg = mcv.getContext('2d');
    const im = mg.createImageData(rec.mw, rec.mh);
    for (let i = 0; i < rec.m.length; i++) {
      const v = rec.m[i];
      im.data[i * 4] = v; im.data[i * 4 + 1] = v; im.data[i * 4 + 2] = v; im.data[i * 4 + 3] = 255;
    }
    mg.putImageData(im, 0, 0);
    const fcv = document.createElement('canvas');
    fcv.width = fcv.height = rec.mw;
    const fg = fcv.getContext('2d');
    fg.filter = 'blur(2.5px)';
    fg.drawImage(mcv, 0, 0);
    const maskTex = new THREE.CanvasTexture(fcv);
    const pGeo = geo.clone();
    const pPos = pGeo.attributes.position;
    for (let i = 0; i < vCount; i++) {
      const u = pPos.getX(i) / W + 0.5;
      const v = pPos.getY(i) / H + 0.5;
      const dx = Math.min(rec.mw - 1, Math.round(u * (rec.mw - 1)));
      const dy = Math.min(rec.mh - 1, Math.round((1 - v) * (rec.mh - 1)));
      const mv = rec.m[dy * rec.mw + dx] / 255;
      pPos.setZ(i, zBg[i] + Math.pow(mv, 1.3) * POP);
    }
    const pMat = new THREE.MeshBasicMaterial({
      map: tex, alphaMap: maskTex, transparent: true, side: THREE.DoubleSide,
      fog: true, toneMapped: false, depthWrite: false, depthTest: false,
    });
    personMesh = new THREE.Mesh(pGeo, pMat);
    personMesh.renderOrder = 51;
    grp.add(personMesh);
  }
  grp.userData = { bgMesh, personMesh };
  return grp;
}

const stBox = document.getElementById('stBox');
const stTxt = document.getElementById('stTxt');
const fStereoBtn = document.getElementById('fStereo');

async function toggleStereo() {
  const S = state.stereo;
  if (S.on) return exitStereo();
  if (S.loading) return;
  if (state.focusIndex < 0) { toast('先点击一张照片飞近，再按 V 开启立体视图'); return; }
  S.loading = true;
  if (fStereoBtn) fStereoBtn.classList.add('loading');
  stBox.classList.add('show');
  stTxt.textContent = 'AI 模型准备中…（首次约 27MB，完成后离线可用）';
  try {
    const card = state.cards[state.focusIndex];
    if (!card.userData._stereo) card.userData._stereo = await analyzeStereo(card);
    if (state.focusIndex < 0 || state.cards[state.focusIndex] !== card) return;
    const grp = buildStereoGroup(card, card.userData._stereo);
    card.add(grp);
    card.userData.mesh.visible = false;
    if (card.userData.frame) card.userData.frame.visible = false;   /* 立体视图里不叠相框 */
    S.on = true; S.card = card; S.group = grp;
    S.rx = 0; S.ry = 0;
    stTxt.textContent = '立体视图 · 移动鼠标环视 · 点空白处或按 Esc 退出';
    toast('<b>立体视图已开启</b><br>AI 推测了每个像素的远近，照片弯成了曲面' +
      (card.userData._stereo.m
        ? '<br>检测到人物，已独立分层浮出 — 移动鼠标感受前后'
        : '<br>这张照片没检测到人物，当前为纯景深模式'), 5200);
  } catch (e) {
    stBox.classList.remove('show');
    toast('<b>立体视图未能开启</b><br>' + (location.protocol === 'file:'
      ? '请用本地服务（localhost）打开以离线使用；或联网后重试'
      : 'AI 模型获取失败（已尝试本地 / 镜像 / 官方源），请检查网络后重试'));
  } finally {
    S.loading = false;
    if (fStereoBtn) fStereoBtn.classList.remove('loading');
  }
}

function exitStereo() {
  const S = state.stereo;
  if (S.group) {
    S.group.traverse(o => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) { if (o.material.alphaMap) o.material.alphaMap.dispose(); o.material.dispose(); }
    });
    if (S.card) S.card.remove(S.group);
  }
  if (S.card) {
    S.card.userData.mesh.visible = true;
    if (S.card.userData.frame) S.card.userData.frame.visible = !!CFG.frame && CFG.frame !== 'none';
  }
  S.on = false; S.card = null; S.group = null;
  if (stBox) stBox.classList.remove('show');
  if (fStereoBtn) fStereoBtn.classList.remove('loading');
  if (state.focusIndex >= 0) fbWake();
}

function stereoStep(dt) {
  const S = state.stereo;
  if (!S.on || !S.group) return;
  const nx = ndc.x < -1.5 ? 0 : THREE.MathUtils.clamp(ndc.x, -1, 1);
  const ny = ndc.y < -1.5 ? 0 : THREE.MathUtils.clamp(ndc.y, -1, 1);
  const tRy = -nx * 0.075, tRx = ny * 0.055;
  const k = Math.min(1, dt * 4.2);
  S.ry += (tRy - S.ry) * k;
  S.rx += (tRx - S.rx) * k;
  S.group.rotation.set(S.rx, S.ry, 0);
}

function stereoDebug() {
  const S = state.stereo;
  if (!S.on || !S.group) return { on: false };
  const g = S.group.userData;
  const p = g.bgMesh.geometry.attributes.position;
  let zmin = 1e9, zmax = -1e9;
  for (let i = 0; i < p.count; i++) { const z = p.getZ(i); if (z < zmin) zmin = z; if (z > zmax) zmax = z; }
  let pmax = 0;
  if (g.personMesh) {
    const pp = g.personMesh.geometry.attributes.position;
    for (let i = 0; i < pp.count; i++) pmax = Math.max(pmax, pp.getZ(i));
  }
  return { on: true, zmin: +zmin.toFixed(3), zmax: +zmax.toFixed(3),
           person: !!g.personMesh, pmax: +pmax.toFixed(3), dev: stLib.dev };
}

/* ═══════════════ 键盘 ═══════════════ */

const keys = new Set();
addEventListener('keydown', e => {
  if (e.target && e.target.tagName === 'INPUT') return;
  if (e.code === 'Space') e.preventDefault();
  if (/^Digit[1-9]$/.test(e.code)) {
    const L = LAYOUTS[Number(e.code.slice(5)) - 1];
    if (L) { setLayout(L.id); closeCfg(); }
    return;
  }
  if (e.code === 'KeyT') { toggleTour(); return; }
  if (e.code === 'KeyV') { toggleStereo(); return; }
  if (e.code === 'KeyG') { toggleGesture(); return; }
  if (e.code === 'KeyM') { applyTheme(state.theme === 'dark' ? 'light' : 'dark'); return; }
  if (e.code === 'KeyP') { setPure(!pureMode); return; }
  if (e.code === 'KeyH') { toggleCfg(); return; }
  if (e.code === 'Escape') {
    if (pureMode) { setPure(false); return; }
    if (cfgPanel.classList.contains('show')) { closeCfg(); return; }
    if (state.stereo.on) { exitStereo(); return; }
    if (gesture.on) { stopGesture(); return; }
    exitFocus(); return;
  }
  if (state.focusIndex >= 0 && e.code === 'ArrowRight') { fbWake(); stepFocus(1); return; }
  if (state.focusIndex >= 0 && e.code === 'ArrowLeft') { fbWake(); stepFocus(-1); return; }
  keys.add(e.code);
});
addEventListener('keyup', e => keys.delete(e.code));
addEventListener('blur', () => keys.clear());

/* ═══════════════ 自动漫游 ═══════════════ */

const btnTour = document.getElementById('btnTour');
function toggleTour() {
  state.tour = !state.tour;
  if (state.tour && state.focusIndex >= 0) exitFocus();
  syncTourBtn();
  btnTour.blur();
}
function syncTourBtn() { btnTour.classList.toggle('on', state.tour); }
btnTour.onclick = toggleTour;

/* ═══════════════ 照片导入 ═══════════════ */

const IMG_EXT = /\.(jpe?g|png|webp|avif|gif|bmp)$/i;
const HEIC = /\.(heic|heif|hif|heics|heifs)$/i;   /* V10.7 补 hif/heics：微信、QQ、部分导出工具会这么命名 */
/* V10.6 无损优先：不再为了显存把照片缩到 1600px。
   主流相机/手机原图（1200 万像素 = 4032px）及以上原分辨率进纹理，不做降采样；
   上限 4096 同时兜住 48MP 级别的超大图，避免显存爆掉（几百张时再分级）。 */
const GPU_MAX = () => Math.min(renderer.capabilities.maxTextureSize || 4096, 4096);
const capFor = n => (n <= 80 ? GPU_MAX() : n <= 250 ? 2560 : n <= 600 ? 1920 : 1600);

function loadImg(url) {
  return new Promise((res, rej) => {
    const im = new Image();
    im.onload = () => res(im);
    im.onerror = () => rej(new Error('decode'));
    im.src = url;
  });
}

function texFromSource(src, w, h) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  cv.getContext('2d').drawImage(src, 0, 0, w, h);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  /* 各向异性拉满：斜看照片时线条不糊（画质无损的一部分） */
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  tex.needsUpdate = true;
  return { tex, cv };
}

/* ── 魔数嗅探：只信文件头，不信扩展名和 MIME ──
   微信/QQ/网盘传过的照片常被改名、丢 MIME，或把 JPEG 命名成 .HEIC；
   HEIF 家族（heic/heix/hevc/heim/heis/mif1/msf1）只有这里能可靠认出来。 */
async function sniffKind(file) {
  try {
    const buf = new Uint8Array(await file.slice(0, 16).arrayBuffer());
    const hex = [...buf].map(b => b.toString(16).padStart(2, '0')).join('');
    const asc = String.fromCharCode(...buf);
    if (buf[0] === 0xFF && buf[1] === 0xD8) return 'jpeg';
    if (hex.startsWith('89504e47')) return 'png';
    if (asc.startsWith('RIFF') && asc.slice(8, 12) === 'WEBP') return 'webp';
    if (asc.startsWith('GIF8')) return 'gif';
    if (asc.startsWith('BM')) return 'bmp';
    if (asc.slice(4, 8) === 'ftyp') {
      const brand = asc.slice(8, 12);
      if (/^(avif|avis)$/.test(brand)) return 'avif';
      if (/^(heic|heix|hevc|hevx|heim|heis|hevm|hevs|mif1|msf1)$/.test(brand)) return 'heif';
      return 'ftyp-other';
    }
    return 'unknown';
  } catch (e) { return 'unknown'; }
}

/* ── 解码链：HEIF 走三级容错，任何一级成功即可，全失败才报错（并带上原因） ── */
async function decodeImage(file) {
  const kind = await sniffKind(file);
  const heicLike = kind === 'heif' || HEIC.test(file.name) || /hei[cf]/i.test(file.type);
  if (heicLike) {
    let why = '';
    /* ① 本地 libheif wasm（质量 1.0）：iPhone 原图主通道，无需联网 */
    try {
      const heic2any = await loadHeic2any();
      const out = await heic2any({ blob: file, toType: 'image/jpeg', quality: 1 });
      const blob = Array.isArray(out) ? out[0] : out;
      if (!blob || !blob.size) throw new Error('解码输出为空');
      return {
        img: await createImageBitmap(blob), storeBlob: blob, via: 'libheif',
        name: file.name.replace(/\.(heic|heif|hif|heics|heifs)$/i, '.jpg'),
      };
    } catch (e) { why = String(e && (e.message || e)); }
    /* ② 浏览器原生解码：文件其实不是 HEIC（被改名），或系统带 HEVC 解码器 */
    try {
      return { img: await createImageBitmap(file), storeBlob: file, name: file.name, via: 'native' };
    } catch (e) { /* 继续 ③ */ }
    /* ③ <img> 兜底 */
    const u3 = URL.createObjectURL(file);
    try {
      return { img: await loadImg(u3), storeBlob: file, name: file.name, via: 'img' };
    } catch (e) {
      throw new Error('HEIC 解码失败' + (why ? '（' + why + '）' : '（文件可能已损坏）'));
    } finally { URL.revokeObjectURL(u3); }
  }
  const u1 = URL.createObjectURL(file);
  try { return { img: await loadImg(u1), storeBlob: file, name: file.name, via: 'img' }; }
  catch (e) { throw new Error('图片无法解码（文件损坏或非图片格式）'); }
  finally { URL.revokeObjectURL(u1); }
}
/* ── 照片去重：8×8 平均哈希（64 位）+ 候选二次确认（32×32 灰度平均差） ── */
function aHash8x8(src) {
  const c = document.createElement('canvas'); c.width = c.height = 8;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.drawImage(src, 0, 0, 8, 8);
  const d = g.getImageData(0, 0, 8, 8).data;
  const v = [];
  for (let i = 0; i < 64; i++) v.push(0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2]);
  const avg = v.reduce((a, b) => a + b, 0) / 64;
  let h1 = 0, h2 = 0;
  for (let i = 0; i < 32; i++) if (v[i] > avg) h1 |= (1 << i);
  for (let i = 0; i < 32; i++) if (v[32 + i] > avg) h2 |= (1 << i);
  return [h1 >>> 0, h2 >>> 0];
}
function hashDist(a, b) {
  let x = a[0] ^ b[0], n = 0;
  while (x) { x &= x - 1; n++; }
  x = a[1] ^ b[1];
  while (x) { x &= x - 1; n++; }
  return n;
}
function lookSame(srcA, srcB) {   /* 二次确认：32×32 灰度平均差 < 10/255 视为同一张图 */
  const N = 32;
  const grab = src => {
    const c = document.createElement('canvas'); c.width = c.height = N;
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(src, 0, 0, N, N);
    const d = g.getImageData(0, 0, N, N).data, out = new Float32Array(N * N);
    for (let i = 0; i < N * N; i++) out[i] = 0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2];
    return out;
  };
  const A = grab(srcA), B = grab(srcB);
  let sum = 0;
  for (let i = 0; i < A.length; i++) sum += Math.abs(A[i] - B[i]);
  return sum / A.length < 10;
}

/* HEIC / HEIF（iPhone 默认格式）→ JPEG：本地 wasm 解码（models/heic2any.min.js），无需联网 */
let _heic2anyP = null;
function loadHeic2any() {
  if (window.heic2any) return Promise.resolve(window.heic2any);
  if (!_heic2anyP) {
    _heic2anyP = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = 'models/heic2any.min.js';
      s.onload = () => (window.heic2any ? res(window.heic2any) : rej(new Error('heic lib invalid')));
      s.onerror = () => { _heic2anyP = null; rej(new Error('heic lib load fail')); };
      document.head.appendChild(s);
    });
  }
  return _heic2anyP;
}

async function fileToItem(file, cap) {
  /* 解码（HEIF 三级容错，见 decodeImage）；无损：默认直接存原始文件字节 */
  const dec = await decodeImage(file);
  const img = dec.img;
  let name = dec.name, storeBlob = dec.storeBlob;

  let w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
  const s = Math.min(1, cap / Math.max(w, h));
  w = Math.max(2, Math.round(w * s));
  h = Math.max(2, Math.round(h * s));

  /* 无边框：整张照片直接铺满纹理 */
  const { tex, cv } = texFromSource(img, w, h);

  /* EXIF 拍摄时间（仅 JPEG 头部；HEIC 解码后无 EXIF，回落到文件修改时间） */
  let shotAt = null;
  try { shotAt = exifDateOf(await file.slice(0, 262144).arrayBuffer()); } catch (e) { /* ignore */ }
  const dateTs = shotTs(shotAt);

  /* 无损入库：存原始文件字节（不再转 JPEG 85% 重新编码） */
  const blob = storeBlob;

  const ah = aHash8x8(img);   /* 感知哈希：重复照片识别 */
  const id = `n:${file.name}|s:${file.size}|m:${file.lastModified}`;
  return {
    tex, w, h, aspect: w / h,
    name, date: file.lastModified,
    shotAt, dateTs, size: file.size, ah,
    rec: blob ? { id, name, shotAt, dateTs, blob, ah } : null,
  };
}

/* 从 IndexedDB 记录恢复卡片 */
async function recToItem(rec) {
  const bmp = await createImageBitmap(rec.blob);
  const w = bmp.width, h = bmp.height;
  const { tex } = texFromSource(bmp, w, h);
  const ah = rec.ah || aHash8x8(bmp);   /* 旧记录无哈希：启动时补算 */
  bmp.close?.();
  return {
    tex, w, h, aspect: w / h,
    name: rec.name, date: rec.dateTs || 0,
    shotAt: rec.shotAt, dateTs: rec.dateTs,
    size: rec.blob.size, ah,
  };
}

/* 占位卡片（V10.15 重做：可读性优先）
   旧版是 #ebebef 浅灰卡画在白底 #f5f5f7 上，再叠一层白雾 —— 首次打开几乎看不到照片，
   观感像"一片空白"。现在改为中调石墨卡 + 琥珀编号：
   ① 6 组低饱和色调（同明度、不同色相）让整面墙有节奏而不花；
   ② 白域（白底）与夜域（近黑底）都有足够对比度，切换主题不用重建；
   ③ 内侧细线让它读起来像装裱好的画框，而不是一块色斑；
   ④ 纯程序化生成 —— 零素材、零版权、零体积，开源友好。 */
const SAMPLE_TONES = [
  [69, 76, 92],   /* 石板蓝 */
  [84, 78, 72],   /* 暖岩灰 */
  [62, 82, 84],   /* 深松青 */
  [78, 70, 84],   /* 雾紫 */
  [92, 84, 66],   /* 沙褐 */
  [66, 70, 78],   /* 石墨 */
];
function sampleItem(i) {
  const shapes = [[3, 2], [4, 3], [2, 3], [1, 1], [3, 2], [16, 9]];
  const [aw, ah] = shapes[i % shapes.length];
  const W = 420, H = Math.round(W * ah / aw);
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  const s = Math.min(W, H);

  /* 底色：色相轮转 + 明度微扰（±8%），避免整面墙一块死板的颜色 */
  const tone = SAMPLE_TONES[i % SAMPLE_TONES.length];
  const lv = [1.0, 0.92, 1.08, 0.96, 1.04][i % 5];
  const rgb = tone.map(v => Math.max(0, Math.min(255, Math.round(v * lv))));
  g.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  g.fillRect(0, 0, W, H);

  /* 内侧细线：装裱感 */
  const pad = Math.round(s * 0.07);
  g.strokeStyle = 'rgba(255,255,255,0.13)';
  g.lineWidth = Math.max(1, Math.round(s * 0.007));
  g.strokeRect(pad, pad, W - pad * 2, H - pad * 2);

  /* 编号：全局唯一的琥珀强调色 */
  g.fillStyle = '#e0a94e';
  g.font = `600 ${Math.round(s * 0.21)}px Inter, system-ui, sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(String(i + 1).padStart(2, '0'), W / 2, H / 2 - s * 0.055);

  /* 小标签 */
  g.fillStyle = 'rgba(255,255,255,0.44)';
  g.font = `500 ${Math.round(s * 0.052)}px Inter, system-ui, sans-serif`;
  g.fillText('示例 SAMPLE', W / 2, H / 2 + s * 0.15);

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return { tex, w: W, h: H, aspect: aw / ah, name: `示例 ${i + 1}`, date: 0, sample: true };
}

/* ═══════════════ 演示照片（V10.16） ═══════════════
   空库时的首屏内容 = samples/ 下的免版权真实照片（Unsplash，见 samples/CREDITS.md）。
   比抽象占位卡好看得多 —— 它同时是在线 demo 的门面。
   任何一张加载失败都会被跳过；全部失败（例如分发时裁掉了 samples/）则回落到程序化占位卡。 */
const DEMO_FILES = Array.from({ length: 18 }, (_, i) => `demo-${String(i + 1).padStart(2, '0')}.jpg`);
let demoMode = false;   /* 首屏当前是演示照片(true) 还是程序化占位卡(false) */

async function loadDemoItems() {
  const items = [];
  for (let i = 0; i < DEMO_FILES.length; i++) {
    try {
      const im = await loadImg('samples/' + DEMO_FILES[i]);
      const w = im.naturalWidth, h = im.naturalHeight;
      if (!w || !h) continue;
      const cv = document.createElement('canvas');
      cv.width = w; cv.height = h;
      cv.getContext('2d').drawImage(im, 0, 0, w, h);
      const tex = new THREE.CanvasTexture(cv);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
      tex.needsUpdate = true;
      items.push({ tex, w, h, aspect: w / h, name: `演示 ${i + 1}`, date: 0, sample: true, demo: true });
    } catch (e) { /* 缺文件跳过 */ }
  }
  return items.length >= 6 ? items : null;   /* 太少就当作没有演示素材 */
}

function syncSampleTip() {
  const tip = document.getElementById('tip');
  if (!tip) return;
  const lab = tip.querySelector('.t span');
  if (lab) lab.textContent = demoMode ? '演示照片' : '占位卡片';
  tip.classList.add('show');
}

/* 异步把占位卡升级成真实演示照片（不阻塞首屏；已有真实照片时完全不打扰） */
async function upgradeToDemo() {
  const onlySamples = () => state.cards.length > 0 && state.cards.every(c => c.userData.item.sample);
  if (!onlySamples()) return;
  const demo = await loadDemoItems();
  if (!demo) return;                 /* 没有演示素材 → 保留占位卡 */
  if (!onlySamples()) return;        /* 等待期间用户已导入 / 恢复了真实照片 → 放弃升级 */
  clearWorld();
  addItems(demo);
  demoMode = true;
  syncSampleTip();
}

/* 首屏内容重置（启动 + 清空后共用）：先铺占位卡保证即时可见，再异步换成演示照片 */
function resetToSampleWorld() {
  clearWorld();
  addItems(Array.from({ length: SAMPLE_COUNT }, (_, i) => sampleItem(i)));
  demoMode = false;
  syncSampleTip();
  upgradeToDemo();
}

function clearWorld() {
  exitStereo();
  /* V10.9：清空/替换照片前先退出观看 —— 否则 focusIndex 会指向已删除的卡片，
     新的第 N 张照片会被当成"正在观看"：恒定不透明、不可悬停、照片墙与待机全部失效 */
  if (state.focusIndex >= 0) exitFocus();
  memOpenPanel(false);
  unpinCard();
  disposeLabels();
  state.cards.forEach(c => {
    scene.remove(c);
    c.userData.mesh.material.map?.dispose();
    c.userData.mesh.material.dispose();
  });
  state.cards = [];
  photoMeshes.length = 0;
}

function addItems(items) {
  const wasEmpty = state.cards.length === 0;
  const start = state.cards.length;
  items.forEach((it, k) => {
    const card = makeCard(it, start + k);
    scene.add(card);
    state.cards.push(card);
  });
  // 首批直接落位；之后新增照片时整个世界重新流式排布（动画过渡）
  applyLayout(!wasEmpty);
  
  state.cards.forEach((c, i) => { c.userData.index = i; c.userData.mesh.userData.cardIndex = i; });
  document.getElementById('count').textContent = state.cards.length;
  applyCardSize();   /* 新建照片后套用「照片尺寸 + 相框」配置 */
  refreshMemBadges();
}

function settle() {
  trans.t = trans.total + 1;
  if (state.fly) {
    cam.pos.copy(state.fly.toPos);
    cam.yaw = cam.wantYaw = state.fly.toYaw;
    cam.pitch = cam.wantPitch = state.fly.toPitch;
    cam.roll = cam.wantRoll = state.fly.toRoll;
    state.fly = null;
  }
  state.cards.forEach(c => {
    c.position.copy(c.userData.to);
    c.quaternion.copy(c.userData.toQ);
  });
}

const prog = document.getElementById('prog'), progBar = document.getElementById('progBar'), progTxt = document.getElementById('progTxt');
function showProg(on, txt, pct) {
  prog.classList.toggle('show', on);
  if (txt) progTxt.textContent = txt;
  if (pct != null) progBar.style.width = Math.round(pct * 100) + '%';
}

let importing = false;
async function importFiles(list) {
  if (importing) return;
  const files = [...list];
  const isHeic = f => HEIC.test(f.name) || /hei[cf]/i.test(f.type);
  /* 先按扩展名/MIME 粗筛，剩下的用文件头嗅探（改名文件、无 MIME 的 HEIC 都能救回来） */
  const imgs = files.filter(f => /^image\//.test(f.type) || IMG_EXT.test(f.name) || isHeic(f));
  for (const f of files) {
    if (imgs.includes(f)) continue;
    if (await sniffKind(f) !== 'unknown') imgs.push(f);
  }

  if (!imgs.length) {
    toast('没有找到可用的图片文件');
    return;
  }

  importing = true;
  showProg(true, `读取中 0 / ${imgs.length}`, 0);
  const cap = capFor(imgs.length);

  /* 去重基线：当前世界已有照片的记录 id + 感知哈希（示例卡不参与） */
  const existIds = new Set();
  const existHashes = [];
  for (const c of state.cards) {
    const it = c.userData.item;
    if (!it || it.sample) continue;
    if (it.rec) existIds.add(it.rec.id);
    if (it.ah && it.tex && it.tex.image) existHashes.push({ ah: it.ah, src: it.tex.image });
  }

  const out = [];
  const accHashes = [];
  let fail = 0, heicFail = 0, dups = 0, dated = 0;
  const failList = [];
  for (let i = 0; i < imgs.length; i++) {
    try {
      const it = await fileToItem(imgs[i], cap);
      if (it.dateTs) dated++;
      /* 重复判定：① 同一文件（名称+大小+修改时间）直接命中
                    ② 感知哈希距离 ≤ 6 时，再做 32×32 灰度二次确认，避免误杀 */
      let dup = false;
      if (it.rec && existIds.has(it.rec.id)) dup = true;
      if (!dup && it.ah) {
        for (const h of existHashes) {
          if (hashDist(it.ah, h.ah) <= 6 && lookSame(it.tex.image, h.src)) { dup = true; break; }
        }
        if (!dup) {
          for (const h of accHashes) {
            if (hashDist(it.ah, h.ah) <= 6 && lookSame(it.tex.image, h.src)) { dup = true; break; }
          }
        }
      }
      if (dup) dups++;
      else {
        out.push(it);
        if (it.ah && it.tex.image) accHashes.push({ ah: it.ah, src: it.tex.image });
      }
    } catch (e) {
      fail++;
      const msg = String(e && e.message || e);
      failList.push({ name: (imgs[i] && imgs[i].name) || '未命名', reason: msg });
      (window.__importErrs = window.__importErrs || []).push((imgs[i] && imgs[i].name) + ' :: ' + msg);
      if (isHeic(imgs[i])) heicFail++;
    }
    showProg(true, `读取中 ${i + 1} / ${imgs.length}`, (i + 1) / imgs.length);
  }
  showProg(true, '构建世界…', 1);

  const wasAllSamples = state.cards.every(c => c.userData.item.sample);
  if (wasAllSamples) clearWorld();
  addItems(out);
  if (state.focusIndex >= 0) exitFocus();
  /* 大量照片进来后，世界变大：相机自动后撤到能总览的位置 */
  if (wasAllSamples && out.length) overviewCamera();
  

  /* 持久化：压缩后逐张写入 IndexedDB */
  let saved = 0;
  if (DB.ok) {
    for (const it of out) {
      if (!it.rec) continue;
      try { await DB.put(it.rec); saved++; } catch (e) { /* 配额满等情况静默 */ }
    }
  }

  showProg(false);
  importing = false;
  const tip = document.getElementById('tip');
  tip.classList.remove('show');
  tip.style.visibility = 'hidden';

  const msgs = [`已放入 <b>${out.length}</b> 张照片`];
  if (dups) msgs.push(`已跳过 <b>${dups}</b> 张重复照片`);
  if (saved) msgs.push(`已保存到本地，下次打开自动恢复`);
  if (fail) {
    /* V10.7：把失败文件名与真实原因直接摊开，不再只说"解码失败" */
    const names = failList.slice(0, 3).map(f => f.name).join('、');
    msgs.push(`<b>${fail}</b> 张读取失败：${names}${fail > 3 ? ` 等 ${fail} 个文件` : ''}`);
    if (failList[0] && failList[0].reason) msgs.push(`<span style="opacity:.72">原因：${failList[0].reason}</span>`);
    if (heicFail) msgs.push(`<span style="opacity:.72">提示：iPhone 可先在「设置 → 相机 → 格式」选「兼容性最佳」，导出 JPEG 后再导入</span>`);
  }
  toast(msgs.join('<br>'), fail ? 9000 : 4600);
}

/* ═══════════════ 排布模板选择器 ═══════════════ */

const btnLayout = document.getElementById('btnLayout');
/* V10.14 排布模板已并入设置面板；此别名指向设置面板，保持旧引用安全 */
const layoutPanel = document.getElementById('cfgPanel');
const lpList = document.getElementById('lpList');
const layoutNameEl = document.getElementById('layoutName');
const layoutNow = document.getElementById('layoutNow');

function buildLayoutPanel() {
  lpList.innerHTML = '';
  LAYOUTS.forEach((L, idx) => {
    const b = document.createElement('button');
    b.className = 'lp-item';
    b.dataset.id = L.id;
    b.innerHTML = `<span class="no">${idx + 1}</span><span class="tx"><span class="n">${L.name} · ${L.tag}</span><span class="d">${L.desc}</span></span>`;
    b.onclick = () => { setLayout(L.id); if (typeof closeCfg === 'function') closeCfg(); };
    lpList.appendChild(b);
  });
}

function syncLayoutUI() {
  const L = curLayout();
  layoutNameEl.textContent = `${L.name} · ${L.tag}`;
  layoutNow.textContent = L.name;
  const lc = document.getElementById('cfLayoutNow');   /* 设置面板里的当前模板名 */
  if (lc) lc.textContent = L.name;
  lpList.querySelectorAll('.lp-item').forEach(el =>
    el.classList.toggle('on', el.dataset.id === L.id));
}

function setLayout(id, opts = {}) {
  const L = LAYOUTS.find(l => l.id === id);
  if (!L) return;
  const prev = state.layoutId;
  state.layoutId = L.id;
  try { localStorage.setItem('pw.layout', L.id); } catch (e) { /* ignore */ }
  syncLayoutUI();
  if (!state.cards.length) return;
  applyLayout(true);
  if (lastView) flyTo(lastView.pos, lastView.yaw || 0,
    lastView.pitch != null ? lastView.pitch : -0.02, 1.3);
  if (!opts.silent && L.id === 'time' && prev !== 'time') {
    const dated = state.cards.filter(c => c.userData.item.dateTs).length;
    if (!dated) toast('这批照片没有读到拍摄时间（PNG / 截图通常没有 EXIF）<br>已全部归入「未标注时间」一组');
    else toast(`已按拍摄时间聚成 <b>${buildTimeGroups().list.length}</b> 座时间星岛，从旧到新排开<br>岛上白色标签标注了年月与张数，飞近即可看到`);
  }
}

/* V10.14 设置面板统一入口：左上按钮/品牌卡 → 排布页；右下 ⚙ → 上次的页 */
btnLayout.onclick = () => toggleCfg('layout');
document.querySelector('.brand-card').onclick = () => toggleCfg('layout');
addEventListener('pointerdown', e => {
  if (!cfgPanel.classList.contains('show')) return;
  if (cfgPanel.contains(e.target) || btnLayout.contains(e.target)) return;
  if (e.target.closest && e.target.closest('.brand-card')) return;
  if (e.target.closest && e.target.closest('#btnCfg')) return;
  closeCfg();
}, true);

buildLayoutPanel();
syncLayoutUI();

/* ═══════════════ 设置面板：标签页 / 开合 / 数据页（V10.14） ═══════════════ */

let cfgTab = 'look';
function showCfgTab(tab) {
  cfgTab = tab || 'look';
  document.querySelectorAll('#cfTabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === cfgTab));
  document.querySelectorAll('#cfgPanel .cf-pane').forEach(pn => pn.classList.toggle('on', pn.dataset.pane === cfgTab));
  if (cfgTab === 'data') syncDataPane();
}
function openCfg(tab) {
  if (tab) showCfgTab(tab);
  cfgPanel.classList.add('show');
  syncCfgUI();
}
function closeCfg() { cfgPanel.classList.remove('show'); }
function toggleCfg(tab) {
  if (cfgPanel.classList.contains('show') && (!tab || cfgTab === tab)) closeCfg();
  else openCfg(tab);
}
document.querySelectorAll('#cfTabs button').forEach(b => { b.onclick = () => showCfgTab(b.dataset.tab); });

/* 数据页：照片数 + 配置文本 */
function syncDataPane() {
  const c = document.getElementById('cfCount');
  if (c) c.textContent = String(state.cards.length);
  const ta = document.getElementById('cfCfgText');
  if (ta) ta.value = JSON.stringify(CFG, null, 2);
}

/* ── 间距档位（自动 / 紧凑 / 标准 / 舒展），选择持久化 ── */
const lpSpreadSeg = document.getElementById('lpSpreadSeg');
const lpSpreadNow = document.getElementById('lpSpreadNow');
const SPREAD_LABEL = { '0.85': '紧凑', '1.15': '标准', '1.45': '舒展' };

function spreadValue() {
  return spreadMode === 'auto' ? autoSpread(state.cards.length) : spreadMode;
}
function syncSpreadUI() {
  if (!lpSpreadSeg) return;
  const v = spreadValue();
  lpSpreadNow.textContent = spreadMode === 'auto'
    ? `自动 ${v.toFixed(2)}× · ${state.cards.length} 张`
    : `${SPREAD_LABEL[String(spreadMode)] || ''} ${v.toFixed(2)}×`;
  lpSpreadSeg.querySelectorAll('button').forEach(b => {
    const on = b.dataset.v === 'auto'
      ? spreadMode === 'auto'
      : Math.abs(Number(b.dataset.v) - Number(spreadMode)) < 0.01;
    b.classList.toggle('on', on);
  });
  const rng = document.getElementById('lpSpreadRng');
  if (rng) rng.value = String(Number(v.toFixed(2)));
}
function setSpread(mode, opts = {}) {
  spreadMode = mode === 'auto' ? 'auto' : Number(mode);
  try { localStorage.setItem('pw.spread', String(mode)); } catch (e) { /* ignore */ }
  syncSpreadUI();
  if (state.cards.length) applyLayout(true);
  if (!opts.silent) {
    const v = spreadValue();
    toast(`照片间距：<b>${spreadMode === 'auto' ? '自动' : (SPREAD_LABEL[String(spreadMode)] || '')}</b> ${v.toFixed(2)}×` +
      (spreadMode === 'auto' ? '<br>自动档按照片数量自适应 —— 张数少时更舒展，张数多时自动收紧' : ''), 2800);
  }
}
if (lpSpreadSeg) lpSpreadSeg.querySelectorAll('button').forEach(b => { b.onclick = () => setSpread(b.dataset.v); });
/* V10.13 间距滑杆：拖动即转为手动档，重排防抖 */
let spreadTimer = null;
const lpSpreadRng = document.getElementById('lpSpreadRng');
if (lpSpreadRng) {
  lpSpreadRng.addEventListener('input', () => {
    const v = Number(lpSpreadRng.value);
    spreadMode = v;
    try { localStorage.setItem('pw.spread', String(v)); } catch (e) { /* ignore */ }
    const now = document.getElementById('lpSpreadNow');
    if (now) now.textContent = '手动 ' + v.toFixed(2) + '×';
    lpSpreadSeg.querySelectorAll('button').forEach(b => b.classList.remove('on'));
    clearTimeout(spreadTimer);
    spreadTimer = setTimeout(() => { if (state.cards.length) applyLayout(true); }, 150);
  });
}
try {
  const savedSpread = localStorage.getItem('pw.spread');
  if (savedSpread) spreadMode = savedSpread === 'auto' ? 'auto' : Number(savedSpread);
} catch (e) { /* ignore */ }
syncSpreadUI();

/* ═══════════════ 自定义面板（⚙ 全量 DIY） ═══════════════ */

const cfgPanel = document.getElementById('cfgPanel');
const btnCfg = document.getElementById('btnCfg');
const CFG_SWATCH = {
  light: ['#f5f5f7', '#faf7f0', '#eef1f5', '#e7ebf0', '#f1eee8', '#2a2d38'],
  dark:  ['#0a0b12', '#05060a', '#070d1a', '#0d0814', '#06110c', '#191410'],
};
/* V10.13 连续参数全部滑杆化：[滑杆 id, 配置键, 数值标签 id, 格式化] */
const CFG_SLIDERS = [
  ['cfFrameWRng', 'frameW', 'cfFrameWNow', v => v.toFixed(2) + '×'],
  ['cfSizeRng',   'cardK',  'cfSizeNow',   v => v.toFixed(2) + '×'],
  ['cfFadeRng',   'fadeK',  'cfFadeNow',   v => v.toFixed(2) + '×'],
  ['cfFogRng',    'fogK',   'cfFogNow',    v => v.toFixed(2) + '×'],
  ['cfStarRng',   'starK',  'cfStarNow',   v => v <= 0 ? '关闭' : (16450 * v / 10000).toFixed(1) + ' 万颗'],
  ['cfMilkyRng',  'milkyK', 'cfMilkyNow',  v => v <= 0 ? '关闭' : v.toFixed(2) + '×'],
];
const CFG_STEP_TEXT = { cardK: '照片尺寸', fadeK: '淡入淡出距离', fogK: '雾感', starK: '星空密度', milkyK: '银河亮度', frameW: '相框宽度' };

function paintSwatches(hostId, list, key) {
  const host = document.getElementById(hostId);
  if (!host) return;
  host.innerHTML = '';
  list.forEach(hex => {
    const b = document.createElement('button');
    b.className = 'cf-dot' + (String(CFG[key]).toLowerCase() === hex.toLowerCase() ? ' on' : '');
    b.style.background = hex;
    b.title = hex;
    b.onclick = () => { CFG[key] = hex; applyCfg(); toast('底色已更新：<b>' + hex + '</b>', 1800); };
    host.appendChild(b);
  });
}

function syncCfgUI() {
  if (!cfgPanel) return;
  CFG_SLIDERS.forEach(([rngId, key, lblId, fmt]) => {
    const rng = document.getElementById(rngId);
    if (rng) rng.value = String(CFG[key]);
    const lbl = document.getElementById(lblId);
    if (lbl) lbl.textContent = fmt(Number(CFG[key]));
  });
  const cPickL = document.getElementById('cfBgLightPick');
  if (cPickL && /^#[0-9a-f]{6}$/i.test(CFG.bgLight)) cPickL.value = CFG.bgLight;
  const cPickD = document.getElementById('cfBgDarkPick');
  if (cPickD && /^#[0-9a-f]{6}$/i.test(CFG.bgDark)) cPickD.value = CFG.bgDark;
  const fSeg = document.getElementById('cfFrame');
  if (fSeg) fSeg.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.v === CFG.frame));
  const fNow = document.getElementById('cfFrameNow');
  if (fNow) fNow.textContent = (FRAMES[CFG.frame] || FRAMES.none).label + (CFG.frame === 'custom' && frameTex ? ' ✓' : '');
  paintSwatches('cfBgLight', CFG_SWATCH.light, 'bgLight');
  paintSwatches('cfBgDark', CFG_SWATCH.dark, 'bgDark');
  const bl = document.getElementById('cfBgLightNow'); if (bl) bl.textContent = CFG.bgLight;
  const bd = document.getElementById('cfBgDarkNow'); if (bd) bd.textContent = CFG.bgDark;
  const sp = document.getElementById('cfSpaceNow');
  if (sp) sp.textContent = state.theme === 'dark' ? '夜域' : '白域';
  const lc = document.getElementById('cfLayoutNow');
  if (lc) lc.textContent = (LAYOUTS.find(l => l.id === state.layoutId) || LAYOUTS[0]).name;
  const cc = document.getElementById('cfCount');
  if (cc) cc.textContent = String(state.cards.length);
}

if (btnCfg && cfgPanel) {
  btnCfg.onclick = () => toggleCfg();   /* V10.14：⚙ 设置 快捷键 H */
}
if (document.getElementById('cfX')) document.getElementById('cfX').onclick = () => cfgPanel.classList.remove('show');

/* 滑杆：拖动即时改数值（重活防抖 140ms，避免拖动中反复重建点云/重排） */
let cfgTimer = null;
CFG_SLIDERS.forEach(([rngId, key, lblId, fmt]) => {
  const rng = document.getElementById(rngId);
  if (!rng) return;
  rng.addEventListener('input', () => {
    CFG[key] = Number(rng.value);
    const lbl = document.getElementById(lblId);
    if (lbl) lbl.textContent = fmt(CFG[key]);
    saveCfg();
    clearTimeout(cfgTimer);
    cfgTimer = setTimeout(() => applyCfg({ stars: key === 'starK' }), 140);
  });
  rng.addEventListener('change', () => {
    toast(CFG_STEP_TEXT[key] + '：<b>' + fmt(Number(CFG[key])) + '</b>', 1600);
  });
});

/* 自定义取色（拾色器）：连续任意色 */
[['cfBgLightPick', 'bgLight'], ['cfBgDarkPick', 'bgDark']].forEach(([id, key]) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('input', () => {
    CFG[key] = el.value;
    clearTimeout(cfgTimer);
    cfgTimer = setTimeout(() => applyCfg(), 120);
  });
  el.addEventListener('change', () => toast('底色已更新：<b>' + CFG[key] + '</b>', 1600));
});

/* 相框：预设 / 自定义上传 */
(function bindFrameUI() {
  const segEl = document.getElementById('cfFrame');
  const fileEl = document.getElementById('cfFrameFile');
  if (!segEl) return;
  segEl.querySelectorAll('button').forEach(b => {
    b.onclick = () => {
      const v = b.dataset.v;
      if (v === 'custom') {
        if (frameTex) { CFG.frame = 'custom'; applyCfg(); toast('已应用上次上传的相框', 1800); return; }
        if (fileEl) fileEl.click();   /* 首次：选图，选完自动切到 custom */
        return;
      }
      CFG.frame = v;
      applyCfg();
      toast('相框：<b>' + (FRAMES[v] || FRAMES.none).label + '</b>', 1800);
    };
  });
  if (fileEl) fileEl.onchange = async e => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    try {
      const url = URL.createObjectURL(f);
      const img = await loadImg(url);
      URL.revokeObjectURL(url);
      const tex = new THREE.Texture(img);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      if (frameTex) frameTex.dispose();
      frameTex = tex;
      persistFrame(img);          /* 刷新后仍在 */
      CFG.frame = 'custom';
      applyCfg();
      toast('<b>自定义相框已应用</b><br>用「相框宽度」微调贴合程度，带透明中心的 PNG 最自然', 4200);
    } catch (err) {
      toast('相框图读取失败：' + String(err && err.message || err), 3600);
    }
    e.target.value = '';
  };
})();

/* 待机屏保时间（分钟 → 秒） */
const cfIdleRng = document.getElementById('cfIdleRng');
function syncIdleUI() {
  const el = document.getElementById('cfIdleNow');
  if (el) el.textContent = CFG.idleMin >= 1 ? CFG.idleMin + ' 分钟' : Math.round(CFG.idleMin * 60) + ' 秒';
  if (cfIdleRng) cfIdleRng.value = String(CFG.idleMin);
}
if (cfIdleRng) {
  cfIdleRng.addEventListener('input', () => {
    CFG.idleMin = Number(cfIdleRng.value);
    idle.after = Math.max(20, CFG.idleMin * 60);
    saveCfg(); syncIdleUI();
  });
}
syncIdleUI();   /* 待机时间在 boot() 里应用到 idle，避免模块初始化期访问未声明的对象 */

/* 数据页：导出（填文本框 + 尝试复制）/ 应用（解析文本）/ 清空 */
if (document.getElementById('cfApply')) {
  document.getElementById('cfApply').onclick = () => {
    const ta = document.getElementById('cfCfgText');
    if (!ta || !ta.value.trim()) { toast('请先粘贴配置 JSON', 2400); return; }
    try {
      const obj = JSON.parse(ta.value);
      if (!obj || typeof obj !== 'object') throw new Error('不是对象');
      CFG = Object.assign({}, CFG_DEFAULT, obj);
      applyCfg({ stars: true });
      syncIdleUI();
      idle.after = Math.max(20, CFG.idleMin * 60);
      toast('配置已应用 ✓', 2400);
    } catch (e) {
      toast('配置解析失败：' + String(e && e.message || e), 3600);
    }
  };
}

/* 恢复默认 / 导出配置（开源分享用） */
if (document.getElementById('cfReset')) {
  document.getElementById('cfReset').onclick = () => {
    CFG = Object.assign({}, CFG_DEFAULT);
    applyCfg({ stars: true });
    syncIdleUI();
    idle.after = Math.max(20, CFG.idleMin * 60);
    toast('已恢复默认设置', 2200);
  };
}
if (document.getElementById('cfExport')) {
  document.getElementById('cfExport').onclick = async () => {
    const txt = JSON.stringify(CFG, null, 2);
    const ta = document.getElementById('cfCfgText');
    if (ta) ta.value = txt;                       /* 一定能在文本框里看到、可手动复制 */
    try {
      await navigator.clipboard.writeText(txt);
      toast('配置已导出到下方文本框并复制到剪贴板', 3200);
    } catch (e) {
      toast('配置已导出到下方文本框（浏览器不允许自动复制，手动选中复制即可）', 4200);
    }
  };
}
syncCfgUI();

/* ═══════════════ 清空 ═══════════════ */

document.getElementById('btnClear').onclick = async () => {
  const real = state.cards.filter(c => !c.userData.item.sample).length;
  if (!real) { toast('当前只有示例卡片，没有可清空的照片'); return; }
  if (!confirm(`确定清空 ${real} 张照片？\n本地保存的记录也会一并删除，此操作不可撤销。`)) return;
  try { await DB.clear(); } catch (e) { /* ignore */ }
  exitFocus();
  resetToSampleWorld();
  overviewCamera();
  toast('已清空所有照片');
};

/* ═══════════════ 主题：白域 / 夜域 ═══════════════ */

const THEME_COLORS = {};
Object.keys(THEMES).forEach(id => {
  const m = {};
  ['bg', 'ground'].forEach(k => {
    m[k] = new THREE.Color(THEMES[id][k]);
  });
  THEME_COLORS[id] = m;
});
rebuildThemeColors();   /* V10.12：用自定义底色初始化（在 CFG 载入之后） */

function setThemeColors(id) {
  const C = THEME_COLORS[id], t = THEMES[id];
  if (typeof rebuildThemeColors === 'function') rebuildThemeColors();   /* V10.12 底色由 CFG 驱动 */
  scene.background.copy(C.bg);
  scene.fog.color.copy(C.bg);
  scene.fog.density = fogTarget;
  groundMat.color.copy(C.ground);
  gShadowMat.opacity = t.gShadowOp;
  skyTarget = id === 'dark' ? 1 : 0;
  skyMix = skyTarget;
}

const _mixC = new THREE.Color();
function lerpTheme(aId, bId, e) {
  const A = THEME_COLORS[aId], B = THEME_COLORS[bId], ta = THEMES[aId], tb = THEMES[bId];
  const mix = key => { _mixC.copy(A[key]).lerp(B[key], e); return _mixC; };
  const fk = curLayout().fogK || 1;
  scene.background.copy(mix('bg'));
  scene.fog.color.copy(mix('bg'));
  scene.fog.density = (ta.fogD + (tb.fogD - ta.fogD) * e) * fk * CFG.fogK;
  groundMat.color.copy(mix('ground'));
  gShadowMat.opacity = ta.gShadowOp + (tb.gShadowOp - ta.gShadowOp) * e;
}

function applyTheme(id, opts = {}) {
  if (!THEMES[id]) return;
  if (id === state.theme && !opts.force) return;
  const prevId = state.theme || 'light';
  state.theme = id;
  try { localStorage.setItem('pw.theme', id); } catch (e) { /* ignore */ }
  document.documentElement.dataset.theme = id;
  const chip = document.getElementById('modeChip');
  if (chip) chip.textContent = id === 'dark' ? '夜域 · 星河' : '白域 · 云海';
  const spLbl = document.getElementById('cfSpaceNow');
  if (spLbl) spLbl.textContent = id === 'dark' ? '夜域' : '白域';
  const bt = document.getElementById('btnTheme');
  if (bt) bt.textContent = id === 'dark' ? '◐ 白域' : '◐ 夜域';
  const ft = document.getElementById('fTheme');
  if (ft) ft.textContent = id === 'dark' ? '◐ 白域' : '◐ 夜域';
  fogTarget = THEMES[id].fogD * (curLayout().fogK || 1);
  skyTarget = id === 'dark' ? 1 : 0;   /* 天空系统跟随主题交叉淡化 */
  if (opts.instant) { themeAnim = null; setThemeColors(id); }
  else themeAnim = { t: 0, from: prevId, to: id };

  /* 主题相关的烘焙内容跟着重建：时间星岛的标签配色。
     V10.16：**不再重建示例卡** —— 占位卡调色板已与主题无关（单一中调调色板），
     而演示照片是真实位图，重建只会把 samples/ 的演示内容冲回占位卡。 */
  if (!importing && state.cards.length && state.layoutId === 'time') {
    disposeLabels();
    curLayout().place(state.cards);   /* 重建时间标签配色 */
  }
}

const btnTheme = document.getElementById('btnTheme');
btnTheme.onclick = () => applyTheme(state.theme === 'dark' ? 'light' : 'dark');
const modeChipEl = document.getElementById('modeChip');
if (modeChipEl) {
  modeChipEl.style.pointerEvents = 'auto';
  modeChipEl.style.cursor = 'pointer';
  modeChipEl.title = '点击切换白域 / 夜域（快捷键 M）';
  modeChipEl.onclick = () => applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}
const btnCfgQuick = document.getElementById('btnCfgQuick');
if (btnCfgQuick) btnCfgQuick.onclick = () => showCfgTab('look');

/* ═══════════════ 纯净模式 ═══════════════
   所有界面元素（品牌模块 / 模板按钮 / 面板 / 提示 / 底部按钮 / 观看信息条）一起退场，
   只留下展示画面本身。P 或 Esc 退出；进入时给一条 2.6s 的提示，避免"不知道怎么回去"。 */
let pureMode = false;
const btnPure = document.getElementById('btnPure');

function setPure(v, silent) {
  pureMode = !!v;
  document.body.classList.toggle('pure', pureMode);
  if (btnPure) btnPure.classList.toggle('on', pureMode);
  if (pureMode) {
    /* 顺手收起会挡画面的浮层 */
    closeCfg();
    memOpenPanel(false);
    if (state.stereo.on) exitStereo();
  }
  if (!silent) {
    toast(pureMode
      ? '纯净模式 · 按 <b>P</b> 或 <b>Esc</b> 退出'
      : '已退出纯净模式', 2600);
  }
}
if (btnPure) btnPure.onclick = () => setPure(!pureMode);

/* ═══════════════ 手势控制 ═══════════════ */

const btnGesture = document.getElementById('btnGesture');
const gestBox = document.getElementById('gestBox');
const gestVideo = document.getElementById('gestVideo');
const gesture = {
  on: false, loading: false, lm: null,
  stream: null, lastVT: -1,
  prev: null, prevMode: 'idle',
};

const MP_WASM = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.0.1/wasm';
const MP_MODEL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

async function toggleGesture() {
  if (gesture.on) return stopGesture();
  if (gesture.loading) return;
  gesture.loading = true;
  btnGesture.classList.add('loading');
  btnGesture.textContent = '手势加载中…';
  try {
    /* wasm / 模型本地优先（models/mp/），file:// 或缺失时回落 CDN */
    let files = null;
    for (const dir of ['models/mp/', MP_WASM]) {
      try { files = await FilesetResolver.forVisionTasks(dir); break; } catch (e) { /* 下一种 */ }
    }
    if (!files) files = await FilesetResolver.forVisionTasks(MP_WASM);
    let lastErr;
    for (const modelPath of ['models/hand_landmarker.task', MP_MODEL]) {
      try {
        gesture.lm = await HandLandmarker.createFromOptions(files, {
          baseOptions: { modelAssetPath: modelPath, delegate: 'GPU' },
          runningMode: 'VIDEO',
          numHands: 1,
        });
        break;
      } catch (e) { lastErr = e; }
    }
    if (!gesture.lm) throw lastErr || new Error('hand model init failed');
    gesture.stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480, facingMode: 'user' }, audio: false,
    });
    gestVideo.srcObject = gesture.stream;
    await gestVideo.play();
    gesture.on = true;
    gesture.lastVT = -1; gesture.prev = null;
    btnGesture.classList.add('on');
    btnGesture.textContent = '手势 · 开启中';
    gestBox.classList.add('show');
    toast('<b>手势已开启</b>（按 G 或 Esc 可随时关闭）<br>🖐 张开手挥动 = 环视四周<br>✊ 握拳，手上抬 = 前进 / 下压 = 后退<br>手掌保持在摄像头画面内，动作幅度别太大', 7000);
  } catch (e) {
    const msg = (e && e.name === 'NotAllowedError') ? '摄像头权限被拒绝，请在浏览器地址栏允许摄像头后重试'
      : (e && e.name === 'NotFoundError') ? '没有检测到摄像头'
      : '手势模型加载失败（该功能需要联网）';
    toast('<b>手势控制未能开启</b><br>' + msg);
    stopGesture();
  }
  gesture.loading = false;
  btnGesture.classList.remove('loading');
  btnGesture.blur();
}

function stopGesture() {
  gesture.on = false;
  if (gesture.stream) { gesture.stream.getTracks().forEach(tr => tr.stop()); gesture.stream = null; }
  gestVideo.srcObject = null;
  if (gesture.lm) { try { gesture.lm.close(); } catch (e) {} gesture.lm = null; }
  gesture.prev = null; gesture.lastVT = -1;
  btnGesture.classList.remove('on');
  btnGesture.textContent = '手势控制';
  gestBox.classList.remove('show');
}

btnGesture.onclick = toggleGesture;
document.getElementById('gestX').onclick = stopGesture;

/* ═══════════════ 记忆卡片：心情 · 录音 · 音视频（全本地） ═══════════════
   每张照片可以绑一条「记忆」：当时的心情标签、一段文字、录音、
   上传的音频/视频。存 IndexedDB memories store，不上传任何服务器。
   有记忆的照片右上角亮小圆点；观看时点 ✦ 打开记忆抽屉。 */

const memMap = new Map();      // 照片 key → { id, mood, text, audio, video, updated }
let memCur = null;             // 当前编辑中的记忆（跟随聚焦照片）
const memURLs = { audio: null, video: null };

const memPanelEl = document.getElementById('memPanel');
const memTextEl = document.getElementById('memText');
const memMoodsEl = document.getElementById('memMoods');
const memSaveStateEl = document.getElementById('memSaveState');
const memAudioEl = document.getElementById('memAudio');
const memVideoEl = document.getElementById('memVideo');
const fMemBtn = document.getElementById('fMem');

const MOODS = [['开心', '😊'], ['想念', '🌙'], ['平静', '🍃'], ['热血', '🔥'], ['难过', '🌧'], ['感动', '✨']];

(function buildMoods() {
  MOODS.forEach(([label, icon]) => {
    const b = document.createElement('b');
    b.textContent = icon + ' ' + label;
    b.dataset.v = label;
    b.onclick = () => {
      if (!memCur) return;
      memCur.mood = memCur.mood === label ? '' : label;
      memSyncMoodUI();
      memScheduleSave();
    };
    memMoodsEl.appendChild(b);
  });
})();

function memSyncMoodUI() {
  memMoodsEl.querySelectorAll('b').forEach(b =>
    b.classList.toggle('on', !!memCur && b.dataset.v === memCur.mood));
}

function memRevoke(kind) { if (memURLs[kind]) { URL.revokeObjectURL(memURLs[kind]); memURLs[kind] = null; } }

function memFillUI() {
  memTextEl.value = memCur ? memCur.text : '';
  memSyncMoodUI();
  memRevoke('audio'); memRevoke('video');
  if (memCur && memCur.audio) { memURLs.audio = URL.createObjectURL(memCur.audio); memAudioEl.src = memURLs.audio; memAudioEl.hidden = false; }
  else { memAudioEl.removeAttribute('src'); memAudioEl.hidden = true; }
  if (memCur && memCur.video) { memURLs.video = URL.createObjectURL(memCur.video); memVideoEl.src = memURLs.video; memVideoEl.hidden = false; }
  else { memVideoEl.removeAttribute('src'); memVideoEl.hidden = true; }
  const has = !!(memCur && (memCur.mood || memCur.text || memCur.audio || memCur.video));
  document.getElementById('memDel').style.display = has ? '' : 'none';
  if (!DB.ok) memSaveStateEl.textContent = '当前环境不支持本地存储';
  memSyncBadgeUI();
}

function memSyncBadgeUI() {
  const has = !!(memCur && (memCur.mood || memCur.text || memCur.audio || memCur.video));
  fMemBtn.classList.toggle('has', has);
}

function memLoadFor(card) {
  const rec = memMap.get(stereoKey(card));
  memCur = rec ? { ...rec } : { id: stereoKey(card), mood: '', text: '', audio: null, video: null };
  memFillUI();
}

let memSaveT = null;
function memScheduleSave() {
  memSaveStateEl.textContent = '保存中…';
  clearTimeout(memSaveT);
  memSaveT = setTimeout(memSaveNow, 650);
}

async function memSaveNow() {
  if (!memCur || !DB.ok) return;
  const rec = {
    id: memCur.id, mood: memCur.mood || '', text: memCur.text || '',
    audio: memCur.audio || null, video: memCur.video || null, updated: Date.now(),
  };
  const empty = !rec.mood && !rec.text && !rec.audio && !rec.video;
  try {
    if (empty) { await DB.memDel(rec.id); memMap.delete(rec.id); }
    else { await DB.memPut(rec); memMap.set(rec.id, rec); }
    memSaveStateEl.textContent = empty ? '已清空' : '已保存 ✓';
    refreshMemBadges();
    memSyncBadgeUI();
  } catch (e) { memSaveStateEl.textContent = '保存失败（存储空间不足？）'; }
}

memTextEl.addEventListener('input', () => { if (memCur) { memCur.text = memTextEl.value; memScheduleSave(); } });
memTextEl.addEventListener('keydown', e => { if (e.key === 'Escape') { memTextEl.blur(); memOpenPanel(false); } });

/* ── 录音（MediaRecorder / 麦克风） ── */
const memRec = { on: false, mr: null, stream: null, chunks: [], t0: 0, timer: null };
const memRecBtn = document.getElementById('memRec');

async function memRecToggle() {
  if (memRec.on) return memRecStop();
  if (!navigator.mediaDevices || !window.MediaRecorder) { toast('当前浏览器不支持录音'); return; }
  try {
    memRec.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (e) { toast('麦克风权限被拒绝，请在浏览器地址栏允许后重试'); return; }
  memRec.chunks = [];
  const mime = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '';
  memRec.mr = new MediaRecorder(memRec.stream, mime ? { mimeType: mime } : undefined);
  memRec.mr.ondataavailable = ev => { if (ev.data.size) memRec.chunks.push(ev.data); };
  memRec.mr.onstop = () => {
    const blob = new Blob(memRec.chunks, { type: memRec.mr.mimeType || 'audio/webm' });
    if (memCur) { memCur.audio = blob; memFillUI(); memScheduleSave(); }
    memRec.stream.getTracks().forEach(tr => tr.stop());
  };
  memRec.mr.start();
  memRec.on = true; memRec.t0 = Date.now();
  memRecBtn.classList.add('rec');
  memRec.timer = setInterval(() => {
    const s = Math.round((Date.now() - memRec.t0) / 1000);
    memRecBtn.textContent = `■ 停止 ${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  }, 250);
  memRecBtn.textContent = '■ 停止 00:00';
}

function memRecStop() {
  if (!memRec.on) return;
  memRec.on = false;
  clearInterval(memRec.timer);
  memRecBtn.classList.remove('rec');
  memRecBtn.textContent = '● 录音';
  try { memRec.mr.stop(); } catch (e) {}
}

memRecBtn.onclick = memRecToggle;

document.getElementById('memAudUp').onclick = () => document.getElementById('memAudFile').click();
document.getElementById('memVidUp').onclick = () => document.getElementById('memVidFile').click();
document.getElementById('memAudFile').onchange = e => {
  const f = e.target.files[0]; e.target.value = '';
  if (f && memCur) { memCur.audio = f; memFillUI(); memScheduleSave(); }
};
document.getElementById('memVidFile').onchange = e => {
  const f = e.target.files[0]; e.target.value = '';
  if (f && memCur) { memCur.video = f; memFillUI(); memScheduleSave(); }
};
document.getElementById('memDel').onclick = () => {
  if (!memCur) return;
  if (!confirm('删除这条记忆？（心情、文字、录音、音视频一并清除）')) return;
  memCur.mood = ''; memCur.text = ''; memCur.audio = null; memCur.video = null;
  memFillUI(); memScheduleSave();
};
document.getElementById('memX').onclick = () => memOpenPanel(false);

function memOpenPanel(open) {
  if (open && state.focusIndex < 0) return;
  if (!open && memRec.on) memRecStop();
  state.memOpen = open;
  memPanelEl.classList.toggle('show', open);
  if (open && state.focusIndex >= 0) memLoadFor(state.cards[state.focusIndex]);
  if (open) fbWake();
}

fMemBtn.onclick = () => memOpenPanel(!state.memOpen);

/* ── 记忆角标：全量刷新每张照片的小圆点 ── */
function refreshMemBadges() {
  state.cards.forEach(c => {
    if (c.userData.badge) c.userData.badge.visible = memMap.has(stereoKey(c));
  });
}

/* ═══════════════ 待机画面：慢速漫游 + 那年今日 ═══════════════
   无操作 3 分钟后进入待机：相机在照片之间缓慢漂移（偏向有记忆的
   照片），左下角时间日期；飘到有记忆的照片就浮现「那天的你写下：…」。
   任何键鼠输入唤醒，回到待机前的位置。 */

const idle = { on: false, t: 0, after: 180, dwell: 0, memCards: [], quoteCard: null, wakePos: null, wakeYaw: 0, wakePitch: 0 };
const idleClockEl = document.getElementById('idleClock');
const idleDateEl = document.getElementById('idleDate');
const idleQuoteEl = document.getElementById('idleQuote');
const idleQuoteTxt = document.getElementById('idleQuoteText');
const idleQuoteAud = document.getElementById('idleQuoteAudio');
const IDLE_WEEK = ['日', '一', '二', '三', '四', '五', '六'];
const MOOD_LINE = { '开心': '那天，是开心的一天', '想念': '那天，在想一个人', '平静': '那天，风平浪静', '热血': '那天，热血沸腾', '难过': '那天，有点难过', '感动': '那天，被什么感动了' };

function canIdle() {
  return introDone && !importing && !idle.on && state.focusIndex < 0 && !state.stereo.on &&
    !state.tour && !gesture.on && !state.memOpen && trans.t >= trans.total &&
    !cfgPanel.classList.contains('show') && !document.hidden;
}

function idleStart() {
  idle.on = true;
  idle.wakePos = cam.pos.clone();
  idle.wakeYaw = cam.wantYaw; idle.wakePitch = cam.wantPitch;
  document.body.classList.add('idling');
  idleQuoteEl.classList.remove('show');
  idle.memCards = state.cards.filter(c => memMap.has(stereoKey(c)));
  idlePick();
}

function idlePick() {
  const cards = state.cards;
  if (!cards.length) return;
  let c;
  if (idle.memCards.length && Math.random() < 0.45) c = idle.memCards[(Math.random() * idle.memCards.length) | 0];
  else c = cards[(Math.random() * cards.length) | 0];
  idle.quoteCard = c;
  const p = c.getWorldPosition(new THREE.Vector3());
  const nrm = new THREE.Vector3(0, 0, 1).applyQuaternion(c.getWorldQuaternion(new THREE.Quaternion())).normalize();
  const toPos = p.clone().addScaledVector(nrm, Math.max(5, c.userData.W * 1.75));
  const look = p.clone().sub(toPos).normalize();
  flyTo(toPos, Math.atan2(-look.x, -look.z), Math.asin(THREE.MathUtils.clamp(look.y, -1, 1)), 6.5 + Math.random() * 3.5);
  idle.dwell = 3 + Math.random() * 2.5;
  idleQuoteEl.classList.remove('show');
}

const _idleDate = new Date();
function idleStep(dt) {
  if (!idle.on) return;
  _idleDate.setTime(Date.now());
  idleClockEl.textContent =
    `${String(_idleDate.getHours()).padStart(2, '0')}:${String(_idleDate.getMinutes()).padStart(2, '0')}`;
  idleDateEl.textContent = `${_idleDate.getMonth() + 1}月${_idleDate.getDate()}日 · 星期${IDLE_WEEK[_idleDate.getDay()]}`;
  if (state.fly) return;
  idle.dwell -= dt;
  const rec = idle.quoteCard ? memMap.get(stereoKey(idle.quoteCard)) : null;
  const line = rec && (rec.text || MOOD_LINE[rec.mood]);
  if (line && idle.dwell > 0.6) {
    idleQuoteTxt.textContent = line.length > 72 ? line.slice(0, 72) + '…' : line;
    idleQuoteAud.style.display = rec.audio ? '' : 'none';
    idleQuoteEl.classList.add('show');
  } else {
    idleQuoteEl.classList.remove('show');
    if (idle.dwell <= 0) idlePick();
  }
}

function idleWake() {
  if (!idle.on) return;
  idle.on = false; idle.t = 0;
  document.body.classList.remove('idling');
  idleQuoteEl.classList.remove('show');
  flyTo(idle.wakePos, idle.wakeYaw, idle.wakePitch, 1.8);
}

function idleActivity() {
  idle.t = 0;
  if (idle.on) idleWake();
}
['pointerdown', 'wheel', 'keydown', 'pointermove', 'touchstart'].forEach(ev =>
  addEventListener(ev, idleActivity, { passive: true }));

/* 每帧调用：有新手势结果时驱动相机 */
function gestureStep(now) {
  if (!gesture.on || !gesture.lm) return;
  const v = gestVideo;
  if (v.readyState < 2 || v.currentTime === gesture.lastVT) return;
  gesture.lastVT = v.currentTime;
  let res;
  try { res = gesture.lm.detectForVideo(v, now); } catch (e) { return; }
  const hands = res && res.landmarks;
  if (!hands || !hands.length) { gesture.prev = null; gesture.prevMode = 'idle'; return; }
  const P = hands[0];
  const dist = (a, b) => Math.hypot(P[a].x - P[b].x, P[a].y - P[b].y, (P[a].z - P[b].z) * 0.6);
  const base = dist(0, 9) || 1e-4;
  const openness = dist(0, 12) / base;      /* 中指指尖离手腕多远 */
  const cx = P[9].x, cy = P[9].y;           /* 掌心位置（0..1，y 向下） */

  if (openness > 1.32) {
    /* 张开手 → 环视（镜像体感：手向右挥，视线向右转） */
    if (gesture.prev && gesture.prevMode === 'open') {
      const dx = cx - gesture.prev.x, dy = cy - gesture.prev.y;
      if (Math.abs(dx) > 0.0045) { cam.wantYaw += dx * 6.2; interruptUser(); }
      if (Math.abs(dy) > 0.0045) { cam.wantPitch = clampPitch(cam.wantPitch - dy * 4.6); interruptUser(); }
    }
    gesture.prev = { x: cx, y: cy };
    gesture.prevMode = 'open';
  } else if (openness < 0.95) {
    /* 握拳 → 推进：手抬得越高飞得越快，压到画面下方则后退 */
    const thrust = THREE.MathUtils.clamp((0.52 - cy) * 15, -9.5, 9.5);
    if (Math.abs(thrust) > 1.3) {
      interruptUser();
      if (state.focusIndex >= 0) exitFocus();
      camera.getWorldDirection(fwdV);
      cam.vel.addScaledVector(fwdV, thrust * 0.055);
    }
    gesture.prev = null;
    gesture.prevMode = 'fist';
  } else {
    gesture.prev = null;
    gesture.prevMode = 'idle';
  }
}

/* ═══════════════ 载入入口 ═══════════════ */

const picker = document.getElementById('picker'), pickerDir = document.getElementById('pickerDir');
pickerDir.setAttribute('webkitdirectory', '');
picker.onchange = e => { importFiles(e.target.files); e.target.value = ''; };
pickerDir.onchange = e => { importFiles(e.target.files); e.target.value = ''; };
const openPicker = () => picker.click();
document.getElementById('btnAdd').onclick = openPicker;
document.getElementById('tipPick').onclick = openPicker;
document.getElementById('tipDir').onclick = () => pickerDir.click();
document.getElementById('tipX').onclick = () => document.getElementById('tip').classList.remove('show');

let dragDepth = 0;
const dropEl = document.getElementById('drop');
addEventListener('dragenter', e => { e.preventDefault(); dragDepth++; dropEl.classList.add('on'); });
addEventListener('dragover', e => e.preventDefault());
addEventListener('dragleave', e => { e.preventDefault(); if (--dragDepth <= 0) { dragDepth = 0; dropEl.classList.remove('on'); } });
addEventListener('drop', async e => {
  e.preventDefault();
  dragDepth = 0; dropEl.classList.remove('on');
  const entries = e.dataTransfer?.items ? [...e.dataTransfer.items].map(i => i.webkitGetAsEntry?.()).filter(Boolean) : [];
  if (entries.length) {
    const files = [];
    await Promise.all(entries.map(en => walkEntry(en, files)));
    if (files.length) return importFiles(files);
  }
  importFiles(e.dataTransfer.files);
});

function walkEntry(entry, out, depth = 0) {
  return new Promise(res => {
    if (depth > 6) return res();
    if (entry.isFile) return entry.file(f => { out.push(f); res(); }, () => res());
    if (entry.isDirectory) {
      const rd = entry.createReader(), all = [];
      const read = () => rd.readEntries(async es => {
        if (!es.length) { await Promise.all(all.map(x => walkEntry(x, out, depth + 1))); return res(); }
        all.push(...es); read();
      }, () => res());
      read();
      return;
    }
    res();
  });
}

/* ═══════════════ 提示条 ═══════════════ */

const toastEl = document.getElementById('toast');
let toastT;
function toast(html, ms = 4600) {
  toastEl.innerHTML = html;
  toastEl.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove('show'), ms);
}

/* ═══════════════ 主循环 ═══════════════ */

const clock = new THREE.Clock();
const fwdV = new THREE.Vector3(), rightV = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
const wishV = new THREE.Vector3();
const tiltE = new THREE.Euler(), tiltQ = new THREE.Quaternion();
let hovered = -1;

function loop() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  /* 防呆：照片数量变化后若观看索引越界，立即退出观看（正常路径已在源头处理） */
  if (state.focusIndex >= state.cards.length) exitFocus();

  /* 主题色过渡；雾密度缓动到目标（随主题/布局变化） */
  if (themeAnim) {
    themeAnim.t = Math.min(1, themeAnim.t + dt / 0.9);
    lerpTheme(themeAnim.from, themeAnim.to, easeIO(themeAnim.t));
    if (themeAnim.t >= 1) themeAnim = null;
  } else {
    scene.fog.density += (fogTarget - scene.fog.density) * Math.min(1, dt * 2.5);
  }

  gestureStep(performance.now());
  stereoStep(dt);
  skyStep(dt, t);   /* 云海漂移 / 星野闪烁 / 银河转动 / 流星 */

  /* 待机：无操作计时 → 慢速漫游屏保 + 那年今日 */
  idle.t += dt;
  if (!idle.on && idle.t >= idle.after && canIdle()) idleStart();
  idleStep(dt);

  const sprint = keys.has('ShiftLeft') || keys.has('ShiftRight');

  if (state.fly) {
    const f = state.fly;
    f.t = Math.min(1, f.t + dt / f.dur);
    const e = easeIO(f.t);
    cam.pos.lerpVectors(f.fromPos, f.toPos, e);
    cam.yaw = cam.wantYaw = f.fromYaw + (f.toYaw - f.fromYaw) * e;
    cam.pitch = cam.wantPitch = f.fromPitch + (f.toPitch - f.fromPitch) * e;
    cam.roll = cam.wantRoll = f.fromRoll + (f.toRoll - f.fromRoll) * e;
    if (f.t >= 1) { state.fly = null; if (wall.on) wall.adopt = true; }
  } else if (wall.on && state.focusIndex < 0 && !state.tour && !idle.on) {
    /* 照片墙相机：键盘平移 + 惯性 + 速度微倾（拖拽/滚轮在各自事件里处理） */
    let kx = 0, ky = 0;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) kx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) kx += 1;
    if (keys.has('KeyW') || keys.has('ArrowUp')) ky += 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) ky -= 1;
    const keyActive = !!(kx || ky);
    if (keyActive) {
      const spd = 24 * (sprint ? 2.3 : 1) * (wall.z / 30);
      wall.vx = THREE.MathUtils.lerp(wall.vx, kx * spd, 1 - Math.pow(0.0015, dt));
      wall.vy = THREE.MathUtils.lerp(wall.vy, ky * spd, 1 - Math.pow(0.0015, dt));
    }
    wallStep(dt, keyActive);
  } else {
    const kLook = 1 - Math.pow(0.00003, dt);
    cam.yaw += (cam.wantYaw - cam.yaw) * kLook;
    cam.pitch += (cam.wantPitch - cam.pitch) * kLook;
    cam.roll += (cam.wantRoll - cam.roll) * kLook;

    let mx = 0, mz = 0, my = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) mz += 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) mz -= 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mx -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) mx += 1;
    if (keys.has('Space') || keys.has('KeyE')) my += 1;
    if (keys.has('KeyC') || keys.has('KeyQ')) my -= 1;

    const sprint = keys.has('ShiftLeft') || keys.has('ShiftRight');
    const speed = 10.5 * (sprint ? 3.1 : 1);

    if (mx || mz || my) {
      interruptUser();
      if (state.focusIndex >= 0) exitFocus();
      camera.getWorldDirection(fwdV);
      rightV.crossVectors(fwdV, UP).normalize();
      wishV.set(0, 0, 0)
        .addScaledVector(fwdV, mz * speed)
        .addScaledVector(rightV, mx * speed)
        .addScaledVector(UP, my * speed * 0.8);
      cam.vel.lerp(wishV, 1 - Math.pow(0.001, dt));
    } else if (state.tour) {
      if (state.focusIndex >= 0) exitFocus();
      cam.wantYaw += Math.sin(t * 0.21) * dt * 0.16;
      cam.wantPitch += (0 - cam.wantPitch) * dt * 0.5;
      camera.getWorldDirection(fwdV);
      cam.vel.lerp(fwdV.multiplyScalar(4.6), 1 - Math.pow(0.2, dt));
    } else {
      cam.vel.multiplyScalar(Math.pow(0.0008, dt));
    }

    cam.pos.addScaledVector(cam.vel, dt);
    cam.pos.y = THREE.MathUtils.clamp(cam.pos.y, -13, 80);
  }

  camera.position.copy(cam.pos);
  camera.rotation.set(cam.pitch, cam.yaw, cam.roll);

  /* 布局过渡：交错级联，每张照片错峰出发 */
  if (trans.t < trans.total) {
    trans.t += dt;
    state.cards.forEach(c => {
      const p = THREE.MathUtils.clamp((trans.t - c.userData.dly) / trans.dur, 0, 1);
      const e = easeIO(p);
      c.position.lerpVectors(c.userData.from, c.userData.to, e);
      c.quaternion.copy(c.userData.fromQ).slerp(c.userData.toQ, e);
    });
  }

  /* 悬停检测（布局过渡期间跳过：省开销也避免误触） */
  let hi = -1;
  if (trans.t >= trans.total) {
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(photoMeshes, false).find(h => h.object.material.opacity > 0.3);   /* 淡出中的照片不响应悬停 */
    hi = state.forceHover != null ? state.forceHover
       : (hit ? hit.object.userData.cardIndex : -1);
  }
  if (hi !== hovered) hovered = hi;
  canvas.classList.toggle('pointing', hovered >= 0 && !dragged);

  /* 触碰动效：弹簧驱动放大 + 上浮 + 轻微倾向相机 + 阴影加深
     （聚焦观看中的照片完全静止方正：无倾斜 / 无放大 / 无浮动 —— 观感零干扰） */
  if (trans.t >= trans.total) {
    state.cards.forEach((c, i) => {
      const u = c.userData;
      const isFocus = i === state.focusIndex;
      const target = isFocus ? 0 : (i === hovered ? 1 : 0);
      u.hkv += (target - u.hk) * 120 * dt;
      u.hkv *= Math.pow(0.002, dt);
      u.hk += u.hkv * dt;
      if (Math.abs(u.hkv) < 1e-4 && Math.abs(target - u.hk) < 1e-4) { u.hk = target; u.hkv = 0; }
      u.hk = THREE.MathUtils.clamp(u.hk, -0.35, 1.6);

      if (isFocus) {
        c.scale.setScalar(1);
        c.position.y = u.to.y;
        c.quaternion.copy(u.toQ);
      } else {
        c.scale.setScalar(1 + u.hk * 0.14);
        c.position.y = u.to.y + Math.sin(t * 0.55 + u.phase) * 0.085 + u.hk * 0.24;
        tiltE.set(u.hk * 0.10, u.hk * 0.055, 0);
        tiltQ.setFromEuler(tiltE);
        c.quaternion.copy(u.toQ).multiply(tiltQ);
      }
    });
  }

  labelGroup.visible = state.focusIndex < 0;   /* 观看照片时标签退场（透明 sprite 会穿透照片） */

  /* V10.3 距离淡入淡出：按相机距离平滑透明度（聚焦中的照片恒定不透明）。
     近处 op=1，fadeNear 后线性渐隐，fadeFar 处归零；平滑系数防止阈值切换时跳变。 */
  state.cards.forEach((c, i) => {
    const m = c.userData.mesh.material;
    let op;
    if (i === state.focusIndex) {
      op = 1;
    } else {
      const d = c.position.distanceTo(camera.position);
      let k = d <= fadeNear ? 1 : d >= fadeFar ? 0 : 1 - (d - fadeNear) / (fadeFar - fadeNear);
      op = k * k * (3 - 2 * k);   /* smoothstep 曲线，边缘不生硬 */
    }
    const nv = m.opacity + (op - m.opacity) * Math.min(1, dt * 6);
    m.opacity = nv;
    m.depthWrite = nv > 0.55;    /* 高度透明的照片不再写深度，避免挡住后面的照片 */
    c.visible = nv > 0.012;      /* 完全淡出的照片跳过渲染 */
    const b = c.userData.badge;
    if (b.visible) b.material.opacity = nv;   /* 记忆角标跟随照片一起淡出 */
    const frEl = c.userData.frame;
    if (frEl && frEl.visible) frEl.material.opacity = nv;   /* 相框同样跟随淡出 */
  });

  syncGroundShadows();
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

/* ═══════════════ 对外接口 ═══════════════ */

window.PhotoWorld = {
  state, scene, camera, cam, renderer,
  importFiles, focusCard, exitFocus, toggleTour, settle, applyLayout,
  layouts: LAYOUTS, setLayout, overviewCamera, applyTheme, dismissIntro, themes: THEMES,
  setTimeMode: v => setLayout(v ? 'time' : 'scatter'),
  clearAll: () => document.getElementById('btnClear').click(),
  toggleStereo: () => toggleStereo(), exitStereo, stereoDebug,
  sky: { skyLight, skyDark, galaxy },   /* 天空系统调试/嵌入接口（夜域为纯点云星空，白域无贴图） */
  DB,
  /* V10：照片墙 / 记忆 / 待机 —— 调试与嵌入接口 */
  wall,
  wallDebug: () => ({ on: wall.on, panX: +wall.pan.x.toFixed(2), panY: +wall.pan.y.toFixed(2),
    vx: +wall.vx.toFixed(2), vy: +wall.vy.toFixed(2), z: +wall.z.toFixed(2), zT: +wall.zT.toFixed(2), bounds: wall.bounds }),
  memDebug: {
    all: () => [...memMap.values()].map(r => ({ id: r.id, mood: r.mood, text: r.text, hasAudio: !!r.audio, hasVideo: !!r.video })),
    get: k => { const r = memMap.get(k); return r ? { id: r.id, mood: r.mood, text: r.text, hasAudio: !!r.audio, hasVideo: !!r.video } : null; },
    keyOf: i => (state.cards[i] ? stereoKey(state.cards[i]) : null),
    setMedia: async (i, kind, blob) => {
      if (!state.cards[i]) return null;
      memLoadFor(state.cards[i]);
      memCur[kind] = blob;
      await memSaveNow();
      return memMap.get(memCur.id) || null;
    },
  },
  memOpenFor: i => { if (state.focusIndex !== i) focusCard(i); setTimeout(() => memOpenPanel(true), 400); },
  idleDebug: () => ({ on: idle.on, t: +idle.t.toFixed(1), after: idle.after, memCards: idle.memCards.length }),
  setIdleAfter: v => { idle.after = v; },
  /* V10.11 间距自定义 */
  setSpread, spreadDebug: () => ({ mode: spreadMode, v: +spreadValue().toFixed(3), gap: +GAP.toFixed(2), cell: +CELL.toFixed(2) }),
  /* V10.12 全量自定义 */
  CFG, applyCfg, setCfg: (patch, opts) => { Object.assign(CFG, patch); applyCfg(opts || {}); },
  demoDebug: () => ({ demoMode, demoFiles: DEMO_FILES.length,
    loaded: state.cards.filter(c => c.userData.item.demo).length }),
  cfgDebug: () => ({ ...CFG, fadeNear: +fadeNear.toFixed(1), fadeFar: +fadeFar.toFixed(1),
    frameVisible: state.cards.filter(c => c.userData.frame && c.userData.frame.visible).length,
    hasCustomFrame: !!frameTex, bg: '#' + scene.background.getHexString(), fogD: +scene.fog.density.toFixed(5) }),
};

/* ═══════════════ 启动 ═══════════════ */

function applyHash() {
  const h = decodeURIComponent(location.hash.replace(/^#/, ''));
  if (h && /^\d+$/.test(h)) setTimeout(() => focusCard(Number(h) - 1), 900);
}

function hideTip() {
  const tip = document.getElementById('tip');
  tip.classList.remove('show');
  tip.style.visibility = 'hidden';
}

(async function boot() {
  try {
    const saved = localStorage.getItem('pw.layout');
    if (saved && LAYOUTS.some(l => l.id === saved)) state.layoutId = saved;
  } catch (e) { /* ignore */ }
  try {
    const savedTheme = localStorage.getItem('pw.theme');
    if (savedTheme && THEMES[savedTheme]) applyTheme(savedTheme, { instant: true });
  } catch (e) { /* ignore */ }
  syncLayoutUI();
  idle.after = Math.max(20, CFG.idleMin * 60);   /* V10.14 待机时间按配置生效（此时 idle 已声明） */
  if (CFG.starK !== 1) buildSky(CFG.starK);   /* V10.12 星空密度按配置重建 */
  loadStoredFrame();                          /* V10.12 自定义相框（若曾上传） */
  resetToSampleWorld();   /* V10.16 首屏：占位卡立即出现 → 随后升级为 samples/ 演示照片 */
  loop();
  setTimeout(dismissIntro, 1750);
  setTimeout(applyHash, 2600);

  /* 从本地存储恢复上次导入的照片 */
  try {
    await DB.open();
    const recs = await DB.all();
    if (recs.length) {
      showProg(true, '恢复照片…', 0);
      const items = [];
      for (let i = 0; i < recs.length; i++) {
        try { items.push(await recToItem(recs[i])); } catch (e) { /* 单张损坏跳过 */ }
        showProg(true, `恢复照片 ${i + 1} / ${recs.length}`, (i + 1) / recs.length);
      }
      showProg(false);
      if (items.length) {
        clearWorld();
        addItems(items);
        overviewCamera();
        hideTip();
        const dated = items.filter(it => it.dateTs).length;
        toast(`已恢复上次的 <b>${items.length}</b> 张照片${dated ? `（其中 ${dated} 张带拍摄时间，可切换 8 种排布模板）` : ''}<br>照片已保存在本机，随时可点「清空」重来`, 6000);
      }
    }
  } catch (e) {
    /* IndexedDB 不可用（个别环境的 file:// 或隐私模式）：静默降级，不影响使用 */
  }

  /* 加载已保存的记忆 → 角标 + 待机「那年今日」（IndexedDB 不可用时静默跳过） */
  try {
    const mrecs = await DB.memAll();
    mrecs.forEach(r => memMap.set(r.id, r));
    if (mrecs.length) refreshMemBadges();
  } catch (e) { /* ignore */
  }
})();
