<div align="center">

# AirQR

**Air-gapped QR code generator & scanner.**

All processing happens in-browser — no data ever leaves your device.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SinlinLi/airqr?style=social)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Dependencies-Zero-brightgreen)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Network-Offline-blue)](https://github.com/SinlinLi/airqr)

**English** | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md)

</div>

---

## What It Does

- **Generate** — Text/URL → QR code, auto-select minimal version (1–40), configurable error correction & module size
- **Scan** — Real-time camera scanning + image upload decoding (drag & drop or click)
- **Split 3-Copy** — Split scan results into 3 random segments for separate copying, reducing clipboard interception risk
- **Download** — Export QR code as PNG
- **Keyboard** — `Ctrl/Cmd + Enter` to generate

## Why AirQR?

Most QR tools send your data to a server. AirQR doesn't — all processing stays in-browser, with **CSP blocking all external connections at the protocol level**.

Built for sensitive data: **private keys, seed phrases, passwords, TOTP secrets, API tokens.**

### Security Model

| Layer | Protection |
|-------|-----------|
| **CSP** | `default-src 'self'` — blocks all external requests |
| **No Storage** | No cookies, no localStorage, no analytics |
| **Zero Remote Dependencies** | All libraries bundled locally, no CDN |
| **Open Source** | Single HTML file, audit it yourself |

> **Tip**: Open in an **incognito/private window** to further isolate from browser extensions.

### Split 3-Copy

Clipboard monitoring is a common attack — malware silently watches every copy operation, waiting for private keys or seed phrases.

**Split 3-Copy** randomly splits scan results into 3 segments (each at least 15%), so you paste them separately. Even if the clipboard is monitored, no single copy contains the full secret. Split boundaries are randomized each time.

## Quick Start

**Option 1: Just open it**

Download and open `index.html` in any browser. Done.

**Option 2: Self-host**

```bash
# Python
python3 -m http.server 1234

# Docker
docker run -d -p 1234:80 -v $(pwd):/usr/share/nginx/html:ro nginx:alpine

# Node.js
npx serve -p 1234
```

## Star History

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=SinlinLi/airqr&type=Date)](https://star-history.com/#SinlinLi/airqr&Date)

</div>

## Credits

- QR generation: [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) by Kazuhiko Arase (MIT)
- QR scanning: [jsQR](https://github.com/cozmo/jsQR) by cozmo (Apache-2.0)

## License

[MIT](LICENSE)
