const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      red: colors.red,
      slate: colors.slate,
      gray: {
        100: "#B3BECF",
        200: "#6D7A98",
        300: "#0B2253",
      },
      bdr: "#DEE3EB",
      primary: {
        100: "#3D84FF",
        200: "#1F6AEC",
      },
      "prim-disabled": "#BBC8DE",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
