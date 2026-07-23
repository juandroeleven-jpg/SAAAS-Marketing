import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        edge: {
          bg: "#0B0D10",
          surface: "#15181D",
          border: "#262B33",
          accent: "#FF3D2E",
          text: "#F5F6F7",
          muted: "#9AA1AC",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
