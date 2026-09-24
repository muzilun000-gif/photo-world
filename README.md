# Photo World · 照片世界

[中文](README.zh-CN.md) | **English**

Turn a folder of photos into a flyable 3D photo world. **Double-click `index.html` to run** — no installation, no server, and your photos never leave your computer.

> For full offline use (including stereoscopic view and gesture control), serve locally: `python -m http.server 8000` then open `http://localhost:8000`. When opened via `file://` double-click, those two features fetch models once online and then cache them. See **How to Open** below.

## Changelog

**V10.16**: **Demo photos on first screen + theme-switch bugfix** — ① Empty-library first screen upgraded from abstract placeholder cards to **18 royalty-free real photos** (Unsplash, mixed aspect ratios, color & B&W, see `samples/` and `samples/CREDITS.md`); loading is async: placeholders appear instantly, demo photos swap in seamlessly when ready, **existing user photos are unaffected**; auto-fallback to placeholders if `samples/` is missing or fails. ② **Bugfix**: removed leftover "rebuild demo cards on theme switch" logic in `applyTheme` that was resetting demo photos back to placeholders; placeholder palette is now a single mid-tone, theme-independent. ③ Removed the `预览/` screenshot set from the repo (57 images, mostly headless-rendered placeholder versions), reducing repo size from 105MB to ~92MB.

**V10.15**: **First-screen readability fix + open-source readiness** — ① **Placeholder card redesign**: old version drew `#ebebef` light-gray cards on `#f5f5f7` white with a white overlay, making photos nearly invisible on first open ("blank page" feel); now uses **mid-tone graphite cards + amber numerals + inner hairline + 6 low-saturation color rotations**, white-domain contrast ~1.1 → **6.79**, night-domain 2.54 — clearly visible in both themes while preserving fog depth fade; purely procedural (Canvas), zero assets, zero copyright. ② **Open-source readiness**: added MIT `LICENSE` and `.gitignore`; removed 8.6MB of deprecated sky assets (zero references after V10.4/V10.8, repo size 130MB → 105MB); local validation scripts archived to `_dev/` (gitignored); README fully corrected + new "How to Open" comparison table.

**V5**: Dual white/night themes, ground-contact shadows, layout-aware fog, brand intro animation.

**V6**: Stereoscopic view — AI depth estimation turns photos into 2.5D relief, subjects float out from the background; move the mouse to look around and return to the moment the photo was taken.

**V10.14–V10.10**: Settings center (4 tabs), slider-based customization, full DIY panel, auto/manual spacing, full QA pass with 3 bugfixes.

**V10.8–V10.3**: Pure white domain (no sky texture), modular info panels, clean mode, HEIC decoding 3-level fallback, lossless image quality, precise focus alignment, increased spacing, infinite starfield.

**V10**: Dual-space backgrounds (white gallery / night starfield) + three major features — **Photo Wall** (infinite canvas · drag to pan), **Memory Cards** (mood · text · recording · audio/video, all local), **Idle Screensaver** (slow drift + on-this-day).

## Usage

Drag photos or an entire folder **directly into the window**, or click the **+ Add Photos** button at bottom-right, or "Select entire folder" at top. First open shows 18 demo photos; importing your own photos automatically replaces them.

- **Photos auto-save**: imported photos are stored in browser local storage (IndexedDB) and restored on next open. Click "Clear" to delete everything and start over.
- **9 layout templates + Photo Wall** (⚙ Settings → Layout tab, or press keys 1–9): every template guarantees gaps between photos with zero overlap; switching triggers a staggered cascade animation; your choice is remembered.
- **Dual themes** (Settings → Appearance → "◐ Switch white/night domain", or click the theme label top-right, or press `M`): **White domain** is a pure gallery (no textures — just photos, a subtle ground plane, and fog); **Night domain** is a procedural universe (three star layers by real magnitude & color temperature + 9,000-star Milky Way band with galactic core glow and dust rifts, all 3D point clouds with real parallax) + single amber accent; background, fog, ground, labels, and UI all transition smoothly; your choice is remembered.
- **iPhone HEIC direct import**: HEIC/HEIF photos are decoded locally to JPG (built-in heic2any, no internet needed) — just drag them in. HEIC photo "taken time" uses file modification time; for precise "on-this-day" matching, export to JPG.
- **Duplicate auto-blocking**: each imported photo gets a perceptual hash and is compared against existing photos; the same photo (even with a different filename) won't be re-added, and you'll see "Skipped N duplicate photos".
- **Gesture control** (press `G`, or Settings → Interaction): open hand and wave = look around, make fist and raise = move forward / lower = move back. Requires camera permission; **first use needs internet** to load the hand-tracking model (~8MB, then browser-cached).

## V10 Major Features

- **Photo Wall (press 2)**: a single giant wall · zero-overlap "infinite canvas". Drag to pan the wall (with inertial glide), scroll wheel to push/pull viewing distance, subtle view tilt at high speed; fly close to a photo and click to enter focus view.
- **Memory Cards (click ✦ while focusing a photo)**: write down how you felt — 6 mood tags, a text note, microphone recording, or upload audio/video. All saved locally in IndexedDB, nothing uploaded. Photos with memories get a glowing amber dot in the top-right corner.
- **Idle Screensaver**: after 3 minutes of no input, the photo world enters screensaver mode — the camera drifts slowly among photos (favoring photos with memories), time and date fade in at bottom-left, and when drifting past a photo with a memory, "That day you wrote: …" appears. Any keyboard/mouse input wakes it up and returns to your previous position.

## Layout Templates

| # | Template | Effect |
| --- | --- | --- |
| 1 | Free Float | Photos float evenly in an ellipsoid space (blue-noise lattice distribution), no contact |
| 2 | Photo Wall | Single giant wall, infinite canvas · drag to pan · scroll to push/pull · zero overlap |
| 3 | Matrix Gallery | Gallery-style multi-panel walls, photos packed into rows by actual width, neat with gaps |
| 4 | Wave Curtain | Undulating wave surface, rows breathe with staggered offset |
| 5 | Ring Theater | Photos form one or more concentric rings; stand at the center and be surrounded |
| 6 | Spiral Tower | Double helix spiraling upward; fly around the tower to view |
| 7 | Dome Starfield | Photos贴 on the inner surface of a sphere; stand at the center and be enveloped |
| 8 | Time Tunnel | Two walls staggered into a depth corridor; denser fog for a deep, secluded feel |
| 9 | Time Islands | Photos clustered by EXIF year-month into islands, arranged along an arc from old to new, labeled with year-month and count |

## Atmosphere System

- **Pure floating**: photos have no borders, glows, backplates, and cast no ground shadows (fully removed since V10.3) — clean original-image presentation from any angle
- **Ground plane**: white domain keeps a very subtle ground plane as spatial reference; night domain has no floor — look up, down, or turn around and it's all stars
- **Distance fade-in/fade-out**: nearby photos are fully opaque, smoothly fading into the background with distance (combined with fog for depth disappearance); faded-out photos don't respond to hover or click
- **Layout-aware fog**: densest in Time Tunnel (seclusion feel), lightest in Dome Starfield (transparency); fog density transitions smoothly when switching layouts
- **Opening ceremony**: after the brand page (title + amber line) fades out, the camera slowly pushes in from afar to the overview position
- **Vignette**: night domain only; white domain stays pure

## Controls

| Input | Effect |
| --- | --- |
| Drag | Look around (in Photo Wall mode = pan the wall, with inertia) |
| W A S D | Fly in look direction |
| Space / C (E / Q) | Ascend / descend |
| Scroll wheel | Push forward / pull back (Photo Wall = adjust viewing distance; while focusing = adjust focus distance) |
| Shift | Sprint |
| 1–9 | Switch layout template |
| T | Auto-roam toggle |
| G | Gesture control toggle |
| M | Switch white / night domain |
| Hover photo | Bounce animation |
| Click photo | Fly to it; ← → to flip through photos; Esc or click empty space to return |
| Drag while focusing | Adjust look angle without exiting focus |
| ✦ while focusing | Open this photo's memory card (mood / text / recording / media) |
| V (after flying close) | Toggle stereoscopic view (2.5D depth + subject layering) |
| In stereoscopic view | Drag / scroll / click photos as usual; click empty space or Esc = exit stereoscopic (click empty space again to exit focus) |
| 3 min no input | Enter idle screensaver; any keyboard/mouse wakes it |

## Compatibility & Boundaries

- Recommended: Chrome / Edge; iPhone HEIC/HEIF supported via direct drag-in (local decoding, no conversion, no internet)
- **Lossless quality**: mainstream camera/phone originals enter textures at full resolution (GPU texture limit 8192), **no downsampling**; library stores original file bytes directly, no re-encoding. Only very large libraries (>80 photos → 4096, >250 → 2560, >600 → 1920) get tiered by VRAM
- IndexedDB works under both `file://` and local server (tested); if unavailable in some environments, the app still works — just without persistence
- **AI models are bundled locally** (`models/` directory, ~91MB): depth model for stereoscopic view (Depth-Anything-V2-Small, 26MB), person segmentation model, hand gesture model, plus onnxruntime / MediaPipe runtimes — **all fully offline when served locally**
- ⚠️ **Two limitations when opened via `file://` double-click** (browser security policy, not a project issue): ① stereoscopic view and gesture control can't read local models, auto-fallback to online mirror (hf-mirror.com → huggingface.co, downloaded once then cached); ② microphone recording unavailable (text / mood / uploaded media unaffected). **For full offline experience, use local server** (see How to Open)
- Microphone recording requires `http://localhost` or `https://` (unavailable under `file://` double-click; text / mood / uploaded media unaffected)
- Page exposes `window.PhotoWorld` (`setLayout` / `applyTheme` / `layouts` / `importFiles` / `DB` / `dismissIntro` / `focusCard` / `memOpenFor` / `memDebug` / `wallDebug` / `idleDebug` / `setIdleAfter` etc.) for embedding in portfolios and automated verification

## How to Open

| Method | Offline | Recording | Notes |
| --- | --- | --- | --- |
| **Local server (recommended)** | ✅ Fully offline | ✅ | Run `python -m http.server 8000` in the project directory, open `http://localhost:8000` — all AI models read locally, all features enabled |
| Double-click `index.html` | ⚠️ Stereoscopic/gesture need internet once | ❌ | Easiest, zero install; models download once from online mirror then cache |
| Packaged as desktop app | ✅ | ✅ | Wrap the local server in Electron / Tauri / PyInstaller for a double-click standalone program |

## Open Source & License

- Project code: **MIT** (see `LICENSE`), free to use, modify, commercialize, and redistribute
- Third-party components and their licenses:

| Component | Purpose | License |
| --- | --- | --- |
| [three.js](https://threejs.org) | 3D rendering | MIT |
| [MediaPipe Tasks Vision](https://ai.google.dev/edge/mediapipe) | Hand tracking / person segmentation | Apache-2.0 |
| [Depth-Anything-V2-Small](https://depth-anything-v2.github.io) | Stereoscopic depth estimation | Apache-2.0 (Base/Large/Giant are CC-BY-NC-4.0, **not used** by this project) |
| [transformers.js](https://github.com/huggingface/transformers.js) | Depth model runtime | Apache-2.0 |
| [onnxruntime-web](https://onnxruntime.ai) | ONNX inference | MIT |
| [heic2any](https://github.com/alexcorvi/heic2any) | HEIC decoding (includes libheif) | MIT (libheif: LGPL-3.0) |

- **First-screen content**: when the library is empty, the app优先 loads 18 **royalty-free demo photos** from `samples/` (Unsplash / Lorem Picsum, see `samples/CREDITS.md`); if that directory is missing or fails to load, auto-fallback to purely procedural placeholder cards (Canvas-drawn).
  ⚠️ Photos in `samples/` **are not part of this project's code** and **not covered by MIT** — they're for demo only. To use your own photos, just overwrite the files with the same names.
- The repo contains ~91MB of binary models, so cloning is somewhat slow; for a slimmer repo you could use Git LFS or distribute models via Release attachments

## Directory Structure

```
photo-world/
├─ index.html   UI and styles (CSS-variable-driven dual themes)
├─ app.js       Bundled output (three.js + MediaPipe included)
├─ src/main.js  Source code (THEMES / layout templates / camera / stereoscopic view / depth pipeline / person segmentation / memory / idle / config system)
├─ models/      AI models (depth / person segmentation / gesture + onnxruntime & MediaPipe runtimes) + HEIC decoder (heic2any.min.js)
├─ samples/     Demo photos (18 images, Unsplash royalty-free, see samples/CREDITS.md) + load manifest
└─ _dev/        Local validation bench (headless Chrome driver scripts, excluded via .gitignore, not distributed)
```

## Rebuild (after modifying src/main.js)

```bash
cd ~/.workbuddy/binaries/node/workspace
./node_modules/@esbuild/win32-x64/esbuild.exe <project>/src/main.js \
  --bundle --format=iife --minify --target=es2019 --platform=browser \
  --alias:three=./node_modules/three/build/three.module.js \
  --alias:@mediapipe/tasks-vision=./node_modules/@mediapipe/tasks-vision/vision_bundle.mjs \
  --outfile=<project>/app.js
```
