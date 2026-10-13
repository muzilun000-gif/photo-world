# Release history

## 10.16.1

Parallel, bounded demo loading; loading status; portable Windows/macOS server launchers; reproducible npm build.



**V10.16**: **Demo photos on first screen + theme-switch bugfix** — ① Empty-library first screen upgraded from abstract placeholder cards to **18 royalty-free real photos** (Unsplash, mixed aspect ratios, color & B&W, see `samples/` and `samples/CREDITS.md`); loading is async: placeholders appear instantly, demo photos swap in seamlessly when ready, **existing user photos are unaffected**; auto-fallback to placeholders if `samples/` is missing or fails. ② **Bugfix**: removed leftover "rebuild demo cards on theme switch" logic in `applyTheme` that was resetting demo photos back to placeholders; placeholder palette is now a single mid-tone, theme-independent. ③ Removed the `预览/` screenshot set from the repo (57 images, mostly headless-rendered placeholder versions), reducing repo size from 105MB to ~92MB.

**V10.15**: **First-screen readability fix + open-source readiness** — ① **Placeholder card redesign**: old version drew `#ebebef` light-gray cards on `#f5f5f7` white with a white overlay, making photos nearly invisible on first open ("blank page" feel); now uses **mid-tone graphite cards + amber numerals + inner hairline + 6 low-saturation color rotations**, white-domain contrast ~1.1 → **6.79**, night-domain 2.54 — clearly visible in both themes while preserving fog depth fade; purely procedural (Canvas), zero assets, zero copyright. ② **Open-source readiness**: added MIT `LICENSE` and `.gitignore`; removed 8.6MB of deprecated sky assets (zero references after V10.4/V10.8, repo size 130MB → 105MB); local validation scripts archived to `_dev/` (gitignored); README fully corrected + new "How to Open" comparison table.

**V5**: Dual white/night themes, ground-contact shadows, layout-aware fog, brand intro animation.

**V6**: Stereoscopic view — AI depth estimation turns photos into 2.5D relief, subjects float out from the background; move the mouse to look around and return to the moment the photo was taken.

**V10.14–V10.10**: Settings center (4 tabs), slider-based customization, full DIY panel, auto/manual spacing, full QA pass with 3 bugfixes.

**V10.8–V10.3**: Pure white domain (no sky texture), modular info panels, clean mode, HEIC decoding 3-level fallback, lossless image quality, precise focus alignment, increased spacing, infinite starfield.

**V10**: Dual-space backgrounds (white gallery / night starfield) + three major features — **Photo Wall** (infinite canvas · drag to pan), **Memory Cards** (mood · text · recording · audio/video, all local), **Idle Screensaver** (slow drift + on-this-day).

