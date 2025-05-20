/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FEAF00",
        navbarColor: "#F2EAE1",
        labelColor: "#6c6c6ca3",
        white: "#fff",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        label: [
          "14px",
          {
            lineHeight: "normal",
            fontWeight: "500",
          },
        ],
      },
      boxShadow: {
        login: "2px 5px 10px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
