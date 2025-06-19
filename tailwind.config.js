// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./public/**/*.html",  
//   ],
//   theme: {
//     extend: {
//       // Пример кастомизации под метал-группу
//       colors: {
//         "metal-dark": "#0a0a0a",
//         "metal-accent": "#c5a10e", // золотой акцент
//       },
//       fontFamily: {
//         // Пример: агрессивный шрифт для заголовков
//         "sans": ["Helvetica", "Arial", "sans-serif"],
//         "metal-head": ["'Roboto Condensed'", "sans-serif"], // можно подключить через Google Fonts
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}