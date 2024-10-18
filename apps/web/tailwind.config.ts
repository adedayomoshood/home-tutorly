import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      wix: ["var(--font-wix-display)", "sans-serif"],
      ibm: ["var(--font-ibm-plex)", "serif"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          "2xl": "2rem",
        },
        screens: {
          "2xl": "1300px",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          500: "#E900D2",
        },
        yellow: {
          500: "#FFA800",
        },
      },
    },
  },
  plugins: [],
};
export default config;
