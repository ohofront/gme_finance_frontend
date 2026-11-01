# GME Finance 프론트엔드

금융감독원에 등록된 대부업체 **주식회사 지엠이대부(GME Finance)** 의 기업 홈페이지입니다. 회사 소개, 대출 상품, 서비스 국가, 채용, 문의 정보를 제공합니다.

## 기술 스택

- React 18 (Create React App / `react-scripts` 5)
- React Router 6
- styled-components 6
- Swiper, react-slick, react-awesome-slider, react-scroll

## 시작하기

```bash
npm install
npm start       # 개발 서버 실행 (http://localhost:3003)
npm run build   # 프로덕션 빌드 (./build 폴더 생성)
```

> `npm start`는 `set PORT=3003 & ...` 형식이라 Windows에서 동작합니다. macOS/Linux에서는 `PORT=3003 npx react-scripts start`를 사용하세요.

## 프로젝트 구조

```
public/            정적 파일, index.html, _redirects
src/
  app/             App, Router, 라우트 정의
  components/      공통 UI (Header, Footer, Navigation, 버튼, 캐러셀 등)
  contents/        페이지별 섹션 (main, products, countries, careers 등)
  layout/          페이지 레이아웃
  styles/          테마 및 전역 스타일
  utils/           페이지에서 사용하는 정적 데이터
  assets/          이미지, 동영상
netlify.toml       Netlify 빌드/리다이렉트/헤더 설정
```

## 디자인

신뢰감을 주는 금융회사 느낌을 위해 딥 네이비(`#0A1F44`), 로열 블루(`#0B3D91`), 골드 포인트(`#C9A24B`)를 사용합니다. 색상은 [`src/styles/theme.js`](src/styles/theme.js), 전역 타이포그래피(Noto Sans KR / Poppins)는 [`src/styles/GlobalStyle.js`](src/styles/GlobalStyle.js)에서 관리합니다.

## Netlify 배포

이 저장소는 Netlify 배포를 위해 미리 설정되어 있습니다.

- `netlify.toml`: 빌드 명령(`npm run build`), 배포 폴더(`build`), Node 버전, 보안 헤더, `/static/*` 장기 캐시를 설정합니다.
- SPA 리다이렉트(`/* -> /index.html 200`)가 `netlify.toml`과 `public/_redirects`에 정의되어 있어, `BrowserRouter` 사용 시 `/products` 같은 하위 경로를 새로고침해도 정상 동작합니다.
- `CI=false`를 설정하여 ESLint 경고로 인해 빌드가 실패하지 않도록 했습니다.

배포 순서:

1. 저장소를 GitHub에 push 합니다.
2. Netlify에서 **Add new site → Import an existing project** 를 선택하고 저장소를 연결합니다.
3. 자동 감지된 설정(빌드: `npm run build`, 배포 폴더: `build`)을 유지한 채 배포합니다.

## 스크립트

| 스크립트        | 설명                    |
| --------------- | ----------------------- |
| `npm start`     | 개발 서버 실행          |
| `npm run build` | 최적화된 프로덕션 빌드  |
| `npm test`      | 테스트 실행             |

## 라이선스

비공개 프로젝트이며 모든 권리는 GME Finance에 있습니다.
