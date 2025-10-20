# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## TH02_B24DCCC052

## Mô tả dự án
Đây là project React sử dụng Vite và TypeScript, thực hành các bài tập về quản lý sinh viên và tin tức. Giao diện hiện đại, dễ sử dụng, có phân trang và điều hướng bằng React Router.

## Cấu trúc thư mục
```
├── public/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── components/
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── Bai2_Students/
│   │   │   ├── StudentList.tsx
│   │   │   └── StudentDetail.tsx
│   │   └── Bai3_News/
│   │       └── NewsApp.tsx
│   └── Weather.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Cài đặt
1. Cài Node.js (khuyên dùng bản LTS)
2. Cài các package:
  ```bash
  npm install
  ```
3. Chạy ứng dụng:
  ```bash
  npm run dev
  ```

## Các chức năng chính
- Quản lý sinh viên: Xem danh sách, chi tiết sinh viên
- Xem tin tức: Giao diện NewsApp
- Dự báo thời tiết: Weather
- Navbar điều hướng giữa các trang

## Công nghệ sử dụng
- React + TypeScript
- Vite
- React Router DOM
- CSS hiện đại

## Đóng góp
Mọi đóng góp, ý kiến hoặc báo lỗi vui lòng tạo issue hoặc pull request.

---

> Sinh viên: Lê Minh Đạo - B24DCCC052
> 
> Môn: Thực hành phát triển ứng dụng Web

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
