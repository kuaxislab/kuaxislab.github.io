import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  "#f0fafa",
          100: "#d0f0f0",
          200: "#a3e3e3",
          300: "#6ed0d0",
          400: "#3fbdbd",
          500: "#2aadad",
          600: "#228e8e",
          700: "#1a6f6f",
          800: "#135050",
          900: "#0d3535",
          950: "#071c1c",
        },
        coral: {
          50:  "#fff3f1",
          100: "#ffe3df",
          200: "#ffc5bd",
          300: "#ffa096",
          400: "#f46e5c",
          500: "#e8503a",
          600: "#cc3a26",
          700: "#a82d1e",
          800: "#802318",
          900: "#5a1a12",
        },
        gold: {
          50:  "#fffbf0",
          100: "#fff3d0",
          200: "#ffe4a0",
          300: "#ffd170",
          400: "#f7c048",
          500: "#f5b042",
          600: "#e09020",
          700: "#b87018",
          800: "#8a5010",
          900: "#5f3508",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
