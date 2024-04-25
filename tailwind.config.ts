import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        product:
          "0px 140px 200px -80px rgba(246, 1, 9, 0.30), 0px 40px 80px -50px rgba(246, 1, 9, 0.70)",
        difference:
          "0 2px 1px rgb(203 33 33 / 40%), 0 4px 2px rgba(203 33 33 / 14%), 0 8px 4px rgba(203 33 33 / 14%), 0 16px 8px rgba(203 33 33 / 14%), 0 0px 2px rgba(203 33 33 / 14%)",
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
        "dark-gray-650": "#4F4F4F",
        "dark-gray-600": "#6E6E6E",
        "fade-start-color": "#000",
        "fade-end-color": "rgba(0, 0, 0, 0.00)",
        "navigation-black": "rgba(0, 0, 0, 0.70)",
        "sub-navigation-black": "rgba(0, 0, 0, 0.10)",
        "sub-navigation-border": "rgba(208, 216, 233, 0.10)",
        "sub-navigation-selected": "rgba(69, 69, 69, 0.40)",
        "sub-navigation-selected-border": "rgba(146, 146, 146, 0.40)",
        "get-in-touch-border": "rgba(255, 255, 255, 0.05)",
        "get-in-touch-client-border": "rgba(146, 146, 146, 0.40)",
        "option-border": "#131313",
        "option-text": "#828282",
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
      keyframes: {
        customPing: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.75",
          },
          "80%": {
            transform: "scale(0.75)",
            opacity: "0.75",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        ourHistoryFadeIn: {
          from: { opacity: "0.5" },
          to: { opacity: "1" },
        },
        partnerTransition: {
          from: {
            top: "-100px",
            opacity: "0",
          },
          to: {
            top: "0px",
            opacity: "1",
          },
        },
        partnerTransitionRemove: {
          from: {
            top: "0px",
            opacity: "1",
          },
          to: {
            top: "100px",
            opacity: "0",
          },
        },
      },
      animation: {
        customPing: "customPing 5s cubic-bezier(0, 0, 0.2, 1) infinite",
        partnerTransition: "partnerTransition 0.75s ease-in-out 1 forwards",
        fadeIn: "fadeIn 0.2s ease-in-out",
        ourHistoryFadeIn: "ourHistoryFadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".optionLine": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='69' viewBox='0 0 2 69' fill='none'%3E%3Cpath d='M1 0V69' stroke='url(%23paint0_linear_1309_1935)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1309_1935' x1='1.5' y1='0' x2='1.5' y2='69' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F60109'/%3E%3Cstop offset='1' stop-color='%23F60109' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        },
        ".sequenceAnimationDivider": {
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="2" height="546" viewBox="0 0 2 546" fill="none"><path d="M1.00006 545.5L1.00006 0.499976" stroke="url(%23paint0_linear_3251_930)"/><defs><linearGradient id="paint0_linear_3251_930" x1="1.00006" y1="545.5" x2="1.00006" y2="0.5" gradientUnits="userSpaceOnUse"><stop stop-color="%23FF0000" stop-opacity="0"/><stop offset="0.5" stop-color="%23FF0000"/><stop offset="1" stop-color="%23FF0000" stop-opacity="0"/></linearGradient></defs></svg>')`,
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        },
        ".cartItemsDivider": {
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="1" viewBox="0 0 360 1" fill="none"><path d="M0 0.508301H360" stroke="url(%23paint0_linear_4212_5475)"/><defs><linearGradient id="paint0_linear_4212_5475" x1="0" y1="0.508301" x2="360" y2="0.508301" gradientUnits="userSpaceOnUse"><stop stop-color="%232D2D2D" stop-opacity="0"/><stop offset="0.5" stop-color="%232D2D2D"/><stop offset="1" stop-color="%232D2D2D" stop-opacity="0"/></linearGradient></defs></svg>')`,
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        },
        ".ourHistoryDivider": {
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="2" height="515" viewBox="0 0 2 515" fill="none"><path d="M1 514.966L0.999996 0.965798" stroke="url(%23paint0_linear_2674_3862)"/><defs><linearGradient id="paint0_linear_2674_3862" x1="1" y1="514.966" x2="1" y2="0.96582" gradientUnits="userSpaceOnUse"><stop stop-color="%23FF0000" stop-opacity="0"/><stop offset="0.5" stop-color="%23FF0000"/></linearGradient></defs></svg>')`,
          backgroundRepeat: "no-repeat no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        },
      });
    }),
  ],
};
export default config;
