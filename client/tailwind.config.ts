import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({

      // custom themes

      themes: {
        dark: {
          colors: {
            background: "#e8f1f9", // or DEFAULT ✅ FFFAED F5E9D3 DED0BA FFFDF9
            foreground: "#11181C", // or 50 to 900 DEFAULT
            
            // gradient
            projectCardTop: "white",
            projectCardBotttom: "white",

            // hover dark layer
            hoverdarkbg: "#0F182A",

            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            // ... rest of the colors
          },
        },
        light: {
          colors: {
            background: "#0F182A", // or DEFAULT ✅ 0F172A 0F182A 141414 121422 #000000
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            
            // gradient
            projectCardTop: "#141D2E",
            projectCardBotttom: "#1E2A3B",
            
            // hover dark layer
            hoverdarkbg: "#0F182A",

            primary: {
              //... 50 to 900
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
export default config;