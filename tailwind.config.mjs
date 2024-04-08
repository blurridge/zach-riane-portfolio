import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "right-gradient":
          "linear-gradient(90deg, rgba(79, 16, 145, 1) 0%, rgba(255, 255, 255, 1) 50%)",
        "left-gradient":
          "linear-gradient(270deg, rgba(79, 16, 145, 1) 0%, rgba(255, 255, 255, 1) 50%)",
      },
      colors: {
        "light-purple": "#C7BEF5",
        "light-blue": "#EDF3FE",
        "dark-purple": "#340b61",
        "hiyo-purple": "#4F1091",
      },
      fontFamily: {
        sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
