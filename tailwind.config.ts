import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMSans: "DM Sans",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#edf2f9",
        secondary: "#313bac",
        secondary_light: "#1e2a82",
        secondary_transparent: "rgba(49, 59, 172, 0.152)",

        black: "#030303",
        brown: "#46364a",
        white: "#ffffff",
        transparent_gray: "rgba(255, 255, 255, 0.25)",
        transparent_black: "rgba(0, 0, 0, 0.4)",
        lightGray: "#e4e4e4",
      },
      textColor: {
        primary: "#edf2f8",
        secondary: "#313bac",
      },
      borderColor: {
        nav_border: "1px solid rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
