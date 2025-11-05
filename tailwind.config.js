// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma 컬러 토큰에 맞춰 정의 (예: Primary/Accent 등)
        primary: "#1E88E5",
        accent: "#FF5252",
        surface: "#0B0B0C",
      },
      fontFamily: {
        // Figma 폰트(Inter, Pretendard 등) 매핑
        sans: ["Inter", "System"],
      },
    },
  },
  plugins: [],
};
