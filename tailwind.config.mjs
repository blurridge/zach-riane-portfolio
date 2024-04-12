import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
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
