<div align="center">

# AirQR

**エアギャップ QR コード生成・スキャンツール**

すべての処理はブラウザ内で完結——データがデバイスから外部に出ることはありません。

**今すぐ使う：** https://sinlinli.github.io/airqr/

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SinlinLi/airqr?style=social)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Dependencies-Zero-brightgreen)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Network-Offline-blue)](https://github.com/SinlinLi/airqr)

[English](README.md) | [简体中文](README.zh-CN.md) | **日本語** | [한국어](README.ko.md)

</div>

---

## 機能

- **生成** — テキスト/URL → QR コード、最小バージョン自動選択 (1–40)、誤り訂正レベル・モジュールサイズ設定可
- **スキャン** — カメラによるリアルタイムスキャン + 画像アップロードデコード（ドラッグ＆ドロップ対応）
- **Split 3-Copy** — スキャン結果を3つのランダムな断片に分割して個別コピー、クリップボード傍受リスクを低減
- **ダウンロード** — QR コードを PNG で書き出し
- **ショートカット** — `Ctrl/Cmd + Enter` で生成

## なぜ AirQR？

多くの QR ツールはデータをサーバーに送信します。AirQR はしません——すべての処理はブラウザ内で完結し、**CSP がプロトコルレベルで外部接続をブロック**します。

秘密鍵、シードフレーズ、パスワード、TOTP シークレット、API トークンなどの機密データに最適です。

### セキュリティモデル

| レイヤー | 対策 |
|---------|------|
| **CSP** | `default-src 'self'` — 外部リクエストをすべてブロック |
| **ストレージなし** | Cookie、localStorage、アナリティクス一切不使用 |
| **リモート依存ゼロ** | すべてのライブラリをローカルバンドル、CDN 不使用 |
| **オープンソース** | 単一 HTML ファイル、自分で監査可能 |

> **ヒント**：シークレットウィンドウで開くとブラウザ拡張機能からもさらに隔離できます。

### Split 3-Copy

クリップボード監視は一般的な攻撃手法です——マルウェアがすべてのコピー操作を監視し、秘密鍵やシードフレーズを待ち構えています。

**Split 3-Copy** はスキャン結果を3つのランダムな断片（各15%以上）に分割し、個別にペーストします。クリップボードが監視されていても、1回のコピーには完全な情報が含まれません。分割位置は毎回ランダムです。

## クイックスタート

**方法1：そのまま開く**

`index.html` をダウンロードしてブラウザで開くだけです。

**方法2：セルフホスト**

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

## クレジット

- QR 生成：[qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) by Kazuhiko Arase (MIT)
- QR スキャン：[jsQR](https://github.com/cozmo/jsQR) by cozmo (Apache-2.0)

## ライセンス

[MIT](LICENSE)
