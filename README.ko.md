<div align="center">

# AirQR

**에어갭 QR 코드 생성 및 스캔 도구**

모든 처리는 브라우저 내에서 완료됩니다 — 데이터가 기기 밖으로 나가지 않습니다.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/SinlinLi/airqr?style=social)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Dependencies-Zero-brightgreen)](https://github.com/SinlinLi/airqr)
[![Static Badge](https://img.shields.io/badge/Network-Offline-blue)](https://github.com/SinlinLi/airqr)

[English](README.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | **한국어**

</div>

---

## 기능

- **생성** — 텍스트/URL → QR 코드, 최소 버전 자동 선택 (1–40), 오류 정정 레벨 및 모듈 크기 설정 가능
- **스캔** — 카메라 실시간 스캔 + 이미지 업로드 디코딩 (드래그 앤 드롭 지원)
- **Split 3-Copy** — 스캔 결과를 3개의 무작위 조각으로 나누어 개별 복사, 클립보드 탈취 위험 감소
- **다운로드** — QR 코드를 PNG로 내보내기
- **단축키** — `Ctrl/Cmd + Enter`로 생성

## 왜 AirQR인가?

대부분의 QR 도구는 데이터를 서버로 전송합니다. AirQR은 그렇지 않습니다 — 모든 처리가 브라우저 내에서 이루어지며, **CSP가 프로토콜 수준에서 모든 외부 연결을 차단**합니다.

개인 키, 시드 문구, 비밀번호, TOTP 시크릿, API 토큰 등 민감한 데이터에 적합합니다.

### 보안 모델

| 계층 | 보호 |
|------|------|
| **CSP** | `default-src 'self'` — 모든 외부 요청 차단 |
| **저장소 없음** | 쿠키, localStorage, 분석 도구 일체 미사용 |
| **원격 의존성 제로** | 모든 라이브러리를 로컬 번들, CDN 미사용 |
| **오픈 소스** | 단일 HTML 파일, 직접 감사 가능 |

> **팁**: 시크릿/프라이빗 창에서 열면 브라우저 확장 프로그램으로부터 추가 격리됩니다.

### Split 3-Copy

클립보드 모니터링은 일반적인 공격 수법입니다 — 악성 소프트웨어가 모든 복사 작업을 감시하며 개인 키나 시드 문구를 기다립니다.

**Split 3-Copy**는 스캔 결과를 3개의 무작위 조각(각각 최소 15%)으로 분할하여 개별적으로 붙여넣습니다. 클립보드가 감시되더라도 한 번의 복사에 전체 정보가 포함되지 않습니다. 분할 위치는 매번 무작위입니다.

## 빠른 시작

**방법 1: 바로 열기**

`index.html`을 다운로드하여 브라우저에서 열면 됩니다.

**방법 2: 셀프 호스팅**

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

## 크레딧

- QR 생성: [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) by Kazuhiko Arase (MIT)
- QR 스캔: [jsQR](https://github.com/cozmo/jsQR) by cozmo (Apache-2.0)

## 라이선스

[MIT](LICENSE)
