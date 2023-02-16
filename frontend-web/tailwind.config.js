/** @type {import('tailwindcss').Config} */

const generateColorClass =
  (variable) =>
  ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;

const textColor = {
  primary: "#fff",
  secondary: "#ffe72c",
  tertiary: "#000",
};

const backgroundColor = {
  primary: "#202020",
  secondary: generateColorClass("bg-primary"),
  secondary_light: generateColorClass("bg-secondary-light"),
  secondary_dark: "#192151",
};

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "border-out": {
          "100%": {
            outline: "3px solid #49ae92",
            outlineOffset: "4px",
          },
        },
      },
      animation: {
        "border-out": "border-out .3s forwards",
      },
      textColor,
      backgroundColor,
      colors: {
        border_primary: backgroundColor.primary,
        border_secondary: backgroundColor.secondary,
        call_to_acion: "#FF8000",
      },
      backgroundImage: {},
    },
  },
  plugins: [require("flowbite/plugin")],
};
