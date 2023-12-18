import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-297":
          "linear-gradient(297deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
        "gradient-awards":
          "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 23.44%, rgba(0, 0, 0, 0.00) 81.1%, #000 100%)",
      },
      boxShadow: {
        bens: "0px 140px 200px -80px rgba(246, 1, 9, 0.30), 0px 40px 80px -50px rgba(246, 1, 9, 0.70)",
      },
      backgroundColor: {
        "get-in-touch": "rgba(49, 49, 49, 0.10)",
        "get-in-touch-client": "rgba(69, 69, 69, 0.20)",
      },
      colors: {
        "base-red": "#F60109",
        "black-900": "#161616",
        "dark-gray-950": "#141414",
        "dark-gray-900": "#9A9A9A",
        "dark-gray-800": "#747474",
        "dark-gray-700": "#313131",
        "dark-gray-600": "#6E6E6E",
        "fade-start-color": "#000",
        "fade-end-color": "rgba(0, 0, 0, 0.00)",
        "navigation-black": "rgba(0, 0, 0, 0.70)",
        "sub-navigation-black": "rgba(0, 0, 0, 0.10)",
        "sub-navigation-border": "rgba(208, 216, 233, 0.10)",
        "get-in-touch-border": "rgba(255, 255, 255, 0.05)",
        "get-in-touch-client-border": "rgba(146, 146, 146, 0.40)",
      },
      fontSize: {
        base: ["16px", "16px"],
        lg: ["18px", "18px"],
        xl: ["20px", "20px"],
        "2xl": ["24px", "24px"],
      },
      fontFamily: {
        sans: ["var(--font-criteria)"],
        walsheim: ["var(--font-walsheim)"],
      },
    },
  },
  plugins: [],
};
export default config;
