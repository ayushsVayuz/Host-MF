/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "../navigation/src/**/*.{js,jsx,ts,tsx}",
    "../aboutPage/src/**/*.{js,jsx,ts,tsx}",
    "../homePage/src/**/*.{js,jsx,ts,tsx}",
    "../userForm/src/**/*.{js,jsx,ts,tsx}",
    "../userDetails/src/**/*.{js,jsx,ts,tsx}",
    "../login/src/**/*.{js,jsx,ts,tsx}",
    "../signup/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true,
};
