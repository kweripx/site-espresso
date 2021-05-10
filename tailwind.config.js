module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#10141b",
      secondary: "#181e29",
      buttonPrimary: "#3d8eb1",
      buttonSecondary: "#181e29",
    }),
    // spacing: {
    //   pl: "18rem",
    // },
    extend: {},
  },
  corePlugins: {
    fontFamily: false,
  },
  variants: {},
  plugins: [require("tailwind-filter-utilities")],
};
