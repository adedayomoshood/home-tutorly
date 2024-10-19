/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.ts",
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./icons/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ibm': 'IBMPlexSans-Light',
      'wix-regular': 'WixMadeforDisplay-Regular',
      'wix-medium': 'WixMadeforDisplay-Medium',
      'wix-bold': 'WixMadeforDisplay-Bold',
      'wix-extrabold': 'WixMadeforDisplay-ExtraBold',
    },
    extend: {
      colors: {
        gray: {
          50: "#F6F6F6",
        },
        primary: {
          500: "#E900D2",
        },
        yellow: {
          300: "#FFE500",
          500: "#FFA800",
        },
      },
    },
  },
  plugins: [],
}