import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cf: {
          bg: "#08090C",
          surface: "#111318",
          surface2: "#171A21",
          border: "#262B33",
          accent: "#6C5CE7",
          accent2: "#00D9C0",
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
