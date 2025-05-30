
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        neon: "#0070F3", // Changed to blue
        dark: "#030712", // Deeper dark
        darkblue: "#050E1D", // Dark blue background
        blue: {
          light: "#93C5FD",
          DEFAULT: "#0070F3", // Primary blue
          dark: "#0050B3",
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "float": "float 3s ease-in-out infinite",
        "grid-fade": "grid-fade 2s ease-in-out infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
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
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #0070F3, #00A3FF)',
        'dark-radial': 'radial-gradient(circle at center, #050E1D, #030712)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
