# AirQR

Air-gapped QR code generator & scanner. All processing happens in-browser — no data ever leaves your device.

## Security

- **Content Security Policy** blocks all external network requests
- **No cookies, no storage, no analytics** — nothing is persisted
- **Zero external dependencies** — all libraries bundled locally
- Open source — audit the code yourself

Ideal for encoding sensitive data: private keys, seed phrases, passwords, TOTP secrets.

## Features

- **Generate** — text/URL to QR code, auto-detect optimal version (1–40), configurable error correction & size
- **Scan (Camera)** — real-time camera scanning, mobile rear camera preferred
- **Scan (File)** — drag & drop or select image file to decode
- **Copy & Download** — one-click copy result or download QR as PNG
- **Ctrl/Cmd+Enter** to generate
- Mobile responsive, dark theme

## Usage

Open `index.html` in any browser. That's it.

Or self-host:

```bash
# Python
python3 -m http.server 1234

# Docker
docker run -d -p 1234:80 -v $(pwd):/usr/share/nginx/html:ro nginx:alpine

# Node.js
npx serve -p 1234
```

> **Tip**: For maximum security when handling sensitive data (private keys, seed phrases), open in an **incognito/private window** to disable all browser extensions.

## Credits

- QR generation: [qrcode-generator](https://github.com/nickelc/qrloop) by Kazuhiko Arase (MIT)
- QR scanning: [jsQR](https://github.com/nickelc/qrloop) by cozmo (Apache-2.0)

## License

MIT
