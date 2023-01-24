module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        menti: "Menti Text, sans-serif",
        heading: ["Menti Display", "sans-serif"],
      },
      textColor: {
        primary: "#101834",
      },
      fontSize: {
        sm: ["16px"],
        lg: ["20px"],
      },
      lineHeight: {
        title: ["24px"],
        input: ["20px"]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
