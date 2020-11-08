module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: [`'Hind'`, "sans-serif"],
    },
    extend: {
      colors: {
        green: {
          100: "hsl(130, 40%, 92%)",
          300: "hsl(135, 48%, 55%)",
          500: "hsl(142, 88%, 32%)",
          700: "hsl(147, 92%, 20%)",
          900: "hsl(150, 100%, 12%)",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
