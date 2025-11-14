import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
  extend: {
    keyframes: {
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeInUp: 'fadeInUp 0.7s ease forwards',
    },
  },
},
    plugins: [],
};

export default config;
