/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
 theme: {
  extend: {
   fontFamily: {
    inter: ["Inter"],
    roboto: ["Roboto"],
    poppins: ["Poppins"]
   },
   textShadow: {
    "2xl": "0px 4px 1px #FF5E19",
    "3xl": "-1px -1px 1px rgba(255, 0, 0, 1), 0px 8px 1px rgba(255, 0, 0, 1)",
   },
   colors: {
    customGreen: "#2A9D8F",
    customYellow: "#E9C46A",
    customOrange: "#f78000",
    customNeutral: "#F2F1FA",
   },
   // borderColor: {
   //   customGreen: "#2A9D8F",
   //   customYellow: "#E9C46A",
   //   customOrange: "#f78000"
   // }
  },
 },
 plugins: [require("tailwind-scrollbar")],

 preprocess: {
  // Add the paths to your CSS files here
  less: {},
  scss: {},
 },
};
