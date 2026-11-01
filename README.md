# GME Finance Frontend

Corporate website for **GME Finance (주식회사 지엠이대부)**, a loan company licensed by the Financial Supervisory Service of Korea. It introduces the company, its loan products, the countries it serves, careers and contact information.

## Tech Stack

- React 18 (Create React App / `react-scripts` 5)
- React Router 6
- styled-components 6
- Swiper, react-slick, react-awesome-slider, react-scroll

## Getting Started

```bash
npm install
npm start       # dev server on http://localhost:3003
npm run build   # production build into ./build
```

> `npm start` uses `set PORT=3003 & ...`, which works on Windows. On macOS/Linux run `PORT=3003 npx react-scripts start`.

## Project Structure

```
public/            static assets, index.html, _redirects
src/
  app/             App, Router and route definitions
  components/      shared UI (Header, Footer, Navigation, buttons, carousels)
  contents/        page-level sections (main, products, countries, careers, ...)
  layout/          page layouts
  styles/          theme and global styles
  utils/           static data used by the pages
  assets/          images and videos
netlify.toml       Netlify build / redirect / header configuration
```

## Design

The visual identity follows a trustworthy financial look: deep navy (`#0A1F44`), royal blue (`#0B3D91`) and a gold accent (`#C9A24B`). Colors are centralized in [`src/styles/theme.js`](src/styles/theme.js) and global typography (Noto Sans KR / Poppins) in [`src/styles/GlobalStyle.js`](src/styles/GlobalStyle.js).

## Deploying to Netlify

The repository is preconfigured for Netlify:

- `netlify.toml` sets the build command (`npm run build`), publish directory (`build`), Node version, security headers and long-term caching for `/static/*`.
- A SPA fallback (`/* -> /index.html 200`) is defined in both `netlify.toml` and `public/_redirects`, so deep links such as `/products` work on refresh with `BrowserRouter`.
- `CI=false` is set so that ESLint warnings do not fail the build.

Steps:

1. Push the repository to GitHub.
2. In Netlify choose **Add new site → Import an existing project** and select the repository.
3. Keep the detected settings (build: `npm run build`, publish: `build`) and deploy.

## Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| `npm start`     | Start the development server     |
| `npm run build` | Create an optimized build        |
| `npm test`      | Run the test runner              |

## License

Private project. All rights reserved by GME Finance.
