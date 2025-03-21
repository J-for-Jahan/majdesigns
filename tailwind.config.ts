
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#8B5CF6", // Changed from green to purple
        dark: "#0F0F1A", // Slightly blueish dark
        purple: {
          light: "#D6BCFA",
          DEFAULT: "#8B5CF6",
          dark: "#6E59A5",
        },
        blue: {
          light: "#93C5FD",
          DEFAULT: "#3B82F6",
          dark: "#1E40AF",
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "float": "float 3s ease-in-out infinite",
        "grid-fade": "grid-fade 2s ease-in-out infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
