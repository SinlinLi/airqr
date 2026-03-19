# Offline QR Generator

A secure, zero-dependency static QR code generator. All processing happens in-browser — no data ever leaves your device.

## Security

- **Content Security Policy** blocks all external network requests
- **No cookies, no storage, no analytics** — nothing is persisted
- **Zero external dependencies** — QR library is bundled locally
- Open source — audit the code yourself

Ideal for encoding sensitive data: private keys, seed phrases, passwords, TOTP secrets.

## Usage

Open `index.html` in any browser. That's it.

Or self-host:

```bash
# Python
python3 -m http.server 1234

# Docker
docker run -d --name qr -p 1234:80 -v $(pwd):/usr/share/nginx/html:ro nginx:alpine

# Node.js
npx serve -p 1234
```

## Features

- Auto-detects minimum QR version (1–40)
- Configurable error correction (L/M/Q/H)
- Adjustable module size
- Download as PNG
- Ctrl/Cmd+Enter to generate
- Mobile responsive
- Dark theme

## Credits

QR code generation: [qrcode-generator](https://github.com/nickelc/qrloop) by Kazuhiko Arase (MIT License)

## License

MIT
