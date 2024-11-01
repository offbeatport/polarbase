import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },

   daisyui: {
    darkTheme: "dark",
    themes: [
      {
        dark: {
          primary: "#328AF1",
          "primary-content": "#FDFEFF",

          secondary: "#5d738d",
          "secondary-content": "#ddeeff",

          accent: "#bc0f34",
          "accent-content": "#fae9e9",

          neutral: "#2b3652",

          "base-100": "#040A17",
          "base-200": "#0C1425",
          "base-300": "#131e34",
          "base-content": "#e8e8ff",

          info: "#1e79ba",
          "info-content": "#ddeaf4",
          success: "#06982B",
          "success-content": "#e8e8ff",
          warning: "#c16f0b",
          "warning-content": "#f4e6cf",
          error: "#af0606",
          "error-content": "#fdeeee",

          ".border-soft": {
            "border-color": "#2b3652",
          },

          ".border-softer": {
            "border-color": "#182137",
          },
        },
  plugins: [require("daisyui")],
  
};
export default config;
