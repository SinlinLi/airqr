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

## What It Does

- **Generate** — 文本/URL → QR 码，自动选择最小版本 (1–40)，可调纠错等级和模块大小
- **Scan** — 摄像头实时扫描 + 图片上传解码（拖拽或点击选择）
- **Split 3-Copy** — 扫描结果随机拆成 3 段分次复制，降低剪贴板被整体截获的风险
- **Download** — QR 码导出为 PNG
- **Keyboard** — `Ctrl/Cmd + Enter` 快速生成

## Why AirQR?

大多数 QR 工具会把数据发送到服务端。AirQR 不会——所有处理在浏览器内完成，**CSP 在协议层阻断一切外部连接**。

适合处理私钥、助记词、密码、TOTP secret、API token 等敏感数据。

### 安全模型

| 层 | 措施 |
|----|------|
| **CSP** | `default-src 'self'` — 禁止所有外部请求 |
| **无存储** | 不使用 cookie、localStorage、analytics |
| **零远程依赖** | 所有库本地打包，不加载 CDN |
| **开源** | 单文件 HTML，可自行审计 |

> **Tip**: 用无痕/隐私窗口打开可进一步隔离浏览器扩展。

### Split 3-Copy

剪贴板监控是一种常见的窃密手段——恶意软件静默监听每次复制操作，等待出现私钥或助记词格式的内容。

**Split 3-Copy** 将扫描结果随机拆分为 3 段（每段至少 15%），分次复制粘贴到目标输入框。即使剪贴板被监听，单次复制也不包含完整信息。每次拆分的切割位置随机，不可预测。

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
