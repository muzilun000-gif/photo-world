# 照片世界 · Photo Orbit

**[立即体验在线演示](https://muzilun000-gif.github.io/photo-world/)** · [English](README.md) · [下载完整 ZIP](https://github.com/muzilun000-gif/photo-world/archive/refs/heads/main.zip)

把一组照片放进可浏览的 3D 画廊。首次打开提供18张示例照片；切换布局，再拖入自己的照片。照片保留在当前浏览器本机，不上传云端。

![照片墙实际画面](docs/screenshot.png)

[30秒演示 GIF](demo.gif)

## 一分钟试用

1. Windows 或 Mac 使用 Chrome / Edge 打开在线演示。
2. 等示例照片加载完成；拖动画面环顾，点击照片靠近观看。
3. 点击「排布模板」或按 1–9 切换排列，按 M 切换白色画廊与夜间星空。
4. 拖入 JPG / PNG / WebP 照片，或点击「添加照片」。自己的照片会替换示例画廊。

深度视图、手势控制会另外加载 AI 模型；不使用这些功能也能浏览照片。深度效果因照片而异，不保证每张照片都准确。

## Windows 和 Mac 本地使用

先下载并解压 ZIP，保留 `index.html`、`app.js`、`models/`、`samples/` 的相对位置。

| 方式 | Windows | Mac | 能力与要求 |
| --- | --- | --- | --- |
| 基础浏览 | 用 Chrome/Edge 打开 index.html | 用 Chrome/Edge 打开 index.html | 无需安装；AI 功能首次可能需要联网 |
| 完整本地模式 | 安装 Python 3 后双击 start-windows.bat | 安装 Python 3 后运行 start-mac.command | 在本机提供模型文件，录音需另授麦克风权限 |

Mac 若提示脚本不可执行，在文件夹终端运行 `chmod +x start-mac.command`，或直接运行：

```sh
python3 scripts/serve.py
```

Windows 也可直接运行：

```bat
py -3 scripts\serve.py
```

浏览器打开 `http://127.0.0.1:8000`。服务仅监听本机，在终端按 Ctrl+C 停止。端口占用时追加 `--port 8001`。在线演示和直接打开 HTML 不需要 Python。

## 常用操作

拖动环顾；W/A/S/D 飞行；空格/C 上下移动；点击照片聚焦；左右箭头切照片；Esc 返回；1–9 切布局；M 切主题；T 自动漫游；V 深度视图；G 手势控制（需要摄像头许可）。

## 数据与限制

照片与备注存在当前浏览器、当前地址的 IndexedDB。**它不是备份**：清除浏览器数据、更换浏览器或改变网址后，本地图库可能无法找回，请保留原始文件。

本地服务模式可读取随包模型；直接双击 HTML 受浏览器限制，部分 AI 功能要联网，麦克风录音不可用。大量照片和 AI 推理会占用内存/显存。仓库包含约91MB模型。跨平台检查验证本地服务与资源，实际 GPU、浏览器和系统差异仍需设备测试。

## 修改源码

安装 Node.js 20+，在项目文件夹执行：

```sh
npm ci
npm run check
npm run build
```

编辑 `src/main.js` 后重新生成 `app.js`，发布时更新 `index.html` 的缓存版本号。不要修改 IndexedDB 数据库名 `photo-world`。

## 许可

代码采用 [MIT](LICENSE)。示例照片不属于 MIT 代码许可，来源见 [照片授权说明](samples/CREDITS.md)。第三方模型、运行时与解码器各自保留许可，详见英文说明。[版本记录](docs/CHANGELOG.md) · [报告问题](https://github.com/muzilun000-gif/photo-world/issues)
