/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        green: "#14f195",
        "dark-grey": "#222",
        white: "#fff",
        black1: "#000",
        "light-gray": "#f2f2f2",
        gray: {
          "100": "rgba(255, 255, 255, 0.2)",
          "200": "rgba(0, 0, 0, 0.5)",
          "400": "rgba(255, 255, 255, 0.6)",
        },
        purple: "#9945ff",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
        archivo: "Archivo",
        "rubik-mono-one": "'Rubik Mono One'",
      },
      borderRadius: {
        "25xl": "44px",
        "17xl": "36px",
        "21xl": "40px",
        xl: "20px",
      },
    },
    fontSize: {
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      base: "16px",
      "221xl": "240px",
      "41xl": "60px",
      "77xl": "96px",
      "61xl": "80px",
      "5xl": "24px",
      "21xl": "40px",
      xl: "20px",
      "101xl": "120px",
      "11xl": "30px",
      "29xl": "48px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "401xl": "420px",
      "86xl": "105px",
      "149xl": "168px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
