# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Skeleton

```
 Store App with Tailwindcss

SOLUTION
📦src
 ┣ 📂assets
 ┃ ┗ 📜logo.png
 ┣ 📂components
 ┃ ┣ 📜Loading.jsx
 ┃ ┣ 📜Navbar.jsx
 ┃ ┣ 📜ProductCard.jsx
 ┃ ┣ 📜SearchInput.jsx
 ┃ ┣ 📜Stats.jsx
 ┃ ┗ 📜Testimonial.jsx
 ┣ 📂context
 ┃ ┣ 📜AuthProvider.jsx
 ┃ ┗ 📜ProductProvider.jsx
 ┣ 📂helper
 ┃  ┗ 📜data.js
 ┣ 📂pages
 ┃ ┣ 📜About.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┣ 📜ProductDetail.jsx
 ┃ ┗ 📜Products.jsx
 ┣ 📂router
 ┃ ┣ 📜AppRouter.jsx
 ┃ ┗ 📜PrivateRouter.jsx
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```