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
        brand: {
          50: "#eef7ff",
          500: "#4ec3ff",
          600: "#16a7ff",
        },
        success: "#27d17c",
        danger: "#ff5a6e",
        warning: "#f8c270",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(78,195,255,0.2), 0 15px 40px rgba(15,23,42,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
