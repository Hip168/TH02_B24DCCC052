# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Bài thực hành số 2 - Lê Minh Đạo (B24DCCC052)

## Giới thiệu
Dự án này là một ứng dụng web được xây dựng bằng React, Vite và TypeScript. Ứng dụng giúp thực hành các chức năng quản lý sinh viên, xem tin tức và dự báo thời tiết. Giao diện hiện đại, dễ sử dụng, có thanh điều hướng giữa các trang.

## Cấu trúc thư mục chính
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

## Hướng dẫn cài đặt và chạy ứng dụng
1. Cài đặt Node.js (nên dùng bản LTS mới nhất)
2. Mở terminal tại thư mục dự án, chạy lệnh:
  ```bash
  npm install
  ```
3. Sau khi cài xong, chạy tiếp lệnh:
  ```bash
  npm run dev
  ```
4. Mở trình duyệt và truy cập địa chỉ hiển thị trên terminal (thường là http://localhost:5173)

## Hướng dẫn sử dụng
- Sử dụng thanh Navbar phía trên để chuyển giữa các trang: Quản lý sinh viên, Tin tức, Thời tiết.
- Trang "Quản lý sinh viên": Xem danh sách sinh viên, nhấn vào từng sinh viên để xem chi tiết.
- Trang "Tin tức": Xem danh sách tin tức mới nhất.
- Trang "Weather": Xem dự báo thời tiết.

## Các chức năng chính
- Xem danh sách và chi tiết sinh viên
- Xem tin tức tổng hợp
- Xem dự báo thời tiết
- Giao diện responsive, dễ sử dụng

## Công nghệ sử dụng
- React + TypeScript
- Vite
- React Router DOM
- CSS thuần, thiết kế hiện đại

## Đóng góp & liên hệ
Nếu có ý kiến đóng góp hoặc phát hiện lỗi, vui lòng tạo issue hoặc gửi pull request trên GitHub.

---
**Sinh viên thực hiện:** Lê Minh Đạo  
**Mã số:** B24DCCC052  
**Môn học:** Thực hành phát triển ứng dụng Web

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

