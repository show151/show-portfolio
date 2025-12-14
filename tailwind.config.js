/** @type {import('tailwindcss').Config} */
module.exports = {
  // 💡 修正ポイント: ここで darkMode を 'class' に設定します。
  // これにより、useDarkModeフックによる<html>タグの'dark'クラス操作が有効になります。
  darkMode: 'class', 
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 必要に応じてカスタムカラーなどをここに追加できます
    },
  },
  plugins: [],
}