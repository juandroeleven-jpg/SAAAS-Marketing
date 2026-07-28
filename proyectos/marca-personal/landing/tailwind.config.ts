import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cf: {
          bg: "#F5F8FF",
          surface: "#FFFFFF",
          surface2: "#EEF3FF",
          border: "#DCE4F5",
          accent: "#2563EB",
          accent2: "#60A5FA",
          text: "#0F1B2D",
          muted: "#5B6B85",
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
