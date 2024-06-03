/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./demo/**/*.{js,jsx,ts,tsx}"],
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
};
