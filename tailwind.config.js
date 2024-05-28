/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./demo/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "caret-blink": "blink 1.2s step-end infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
