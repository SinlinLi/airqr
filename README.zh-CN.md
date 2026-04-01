<div align="center">

# AirQR

**离线 QR 码生成与扫描工具**

所有处理在浏览器内完成——数据不会离开你的设备。

**在线使用：** https://sinlinli.github.io/airqr/

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SinlinLi/airqr?style=social)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Dependencies-Zero-brightgreen)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Network-Offline-blue)](https://github.com/SinlinLi/airqr)

[English](README.md) | **简体中文** | [日本語](README.ja.md) | [한국어](README.ko.md)

</div>

---

## 功能

- **生成** — 文本/URL → QR 码，自动选择最小版本 (1–40)，可调纠错等级和模块大小
- **扫描** — 摄像头实时扫描 + 图片上传解码（拖拽或点击选择）
- **Split 3-Copy** — 扫描结果随机拆成 3 段分次复制，降低剪贴板被整体截获的风险
- **下载** — QR 码导出为 PNG
- **快捷键** — `Ctrl/Cmd + Enter` 快速生成

## 为什么选 AirQR？

大多数 QR 工具会把数据发送到服务端。AirQR 不会——所有处理在浏览器内完成，**CSP 在协议层阻断一切外部连接**。

适合处理私钥、助记词、密码、TOTP secret、API token 等敏感数据。

### 安全模型

| 层 | 措施 |
|----|------|
| **CSP** | `default-src 'self'` — 禁止所有外部请求 |
| **无存储** | 不使用 cookie、localStorage、analytics |
| **零远程依赖** | 所有库本地打包，不加载 CDN |
| **开源** | 单文件 HTML，可自行审计 |

> **提示**：用无痕/隐私窗口打开可进一步隔离浏览器扩展。

### Split 3-Copy

剪贴板监控是一种常见的窃密手段——恶意软件静默监听每次复制操作，等待出现私钥或助记词格式的内容。

**Split 3-Copy** 将扫描结果随机拆分为 3 段（每段至少 15%），分次复制粘贴到目标输入框。即使剪贴板被监听，单次复制也不包含完整信息。每次拆分的切割位置随机，不可预测。

## 快速开始

**方式一：直接打开**

下载后在浏览器中打开 `index.html` 即可。

**方式二：自建服务**

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

## 致谢

- QR 生成：[qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) by Kazuhiko Arase (MIT)
- QR 扫描：[jsQR](https://github.com/cozmo/jsQR) by cozmo (Apache-2.0)

## 相关项目

- [Airbox](https://github.com/SinlinLi/airbox) — 浏览器端 RSA 加密工具

## 许可证

[MIT](LICENSE)
