/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1200px",
        xl: "1440px",
        "2xl": "1600px",
      },
    },
    screens: {
      m: "320px",
      xs: "444px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', 'sans-serif'",
      },
    },
  },
  plugins: [],
};
