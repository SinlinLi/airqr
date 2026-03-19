<div align="center">

# AirQR

**Air-gapped QR code generator & scanner.**

All processing happens in-browser — no data ever leaves your device.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SinlinLi/airqr?style=social)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Dependencies-Zero-brightgreen)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Network-Offline-blue)](https://github.com/SinlinLi/airqr)

</div>

---

## Why AirQR?

Most QR tools send your data to a server. AirQR doesn't. It runs entirely in your browser with **zero network requests** — enforced by Content Security Policy at the protocol level.

Perfect for sensitive data: **private keys, seed phrases, passwords, TOTP secrets, API tokens.**

## Security Model

| Layer | Protection |
|-------|-----------|
| **CSP Header** | `default-src 'self'` — blocks all external connections |
| **No Storage** | No cookies, no localStorage, no analytics |
| **No Dependencies** | All libraries bundled locally, no CDN |
| **Open Source** | Audit every line yourself |

> **Tip**: For maximum security, open in an **incognito/private window** to disable browser extensions that could read page content.

## Features

- **Generate** — text/URL → QR code, auto-detect optimal version (1–40), configurable error correction (L/M/Q/H) & module size
- **Scan (Camera)** — real-time camera decoding, mobile rear camera preferred
- **Scan (File)** — drag & drop or click to select image
- **Copy & Download** — one-click copy decoded text or download QR as PNG
- **Keyboard** — `Ctrl/Cmd + Enter` to generate
- **Responsive** — works on desktop & mobile, dark theme

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
