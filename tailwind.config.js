/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: 0, transform: "translateX(-24px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: 0, transform: "translateX(24px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.9s ease-out both",
        "fade-in-left": "fade-in-left 0.9s ease-out both",
        "fade-in-right": "fade-in-right 0.9s ease-out both",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
