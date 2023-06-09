module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#848484",
        green_200: "#97d79e",
        gray_700: "#666666",
        gray_400: "#b0b0b0",
        gray_500: "#999999",
        blue_700: "#346ad4",
        amber_500: "#fbbc05",
        red_A100: "#ee8383",
        red_200: "#e89f9f",
        blue_A200: "#4285f4",
        red_500: "#eb4335",
        light_green_300: "#9bdd7c",
        amber_200: "#f6db7d",
        gray_200: "#eaeaea",
        green_600: "#34a853",
        gray_100: "#f5f5f5",
        indigo_400: "#6972c3",
        black_900: "#000000",
        amber_200_01: "#f6dc7d",
        white_A700: "#ffffff",
      },
      fontFamily: {
        montserrat: "Montserrat",
        lato: "Lato",
        opensans: "Open Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
