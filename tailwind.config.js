module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
    darkTheme: "dark",
    themes: [
      {
        light: {
          // common
          primary: "#F43F5E",
          "primary-focus": "#D73A54",
          "primary-content": "#FFF",
          secondary: "#FB923C",
          "secondary-focus": "#D57C33",
          "secondary-content": "#FFF",
          accent: "#FBBF24",
          "accent-focus": "#DAA520",
          "accent-content": "#FFF",
          neutral: "#F1F5F9",
          "neutral-focus": "#D1D5D8",
          "neutral-content": "#070417",
          info: "#3B82F6",
          error: "#EF4444",
          // bg
          "base-100": "#FFFFFF",
          "base-200": "#F1F5F9",
          // text
          "base-300": "#C2C6D2",
          "base-content": "#070417",
        },
        dark: {
          // common
          primary: "#F43F5E",
          "primary-focus": "#D73A54",
          "primary-content": "#FFF",
          secondary: "#FB923C",
          "secondary-focus": "#D57C33",
          "secondary-content": "#FFF",
          accent: "#FBBF24",
          "accent-focus": "#DAA520",
          "accent-content": "#FFF",
          neutral: "#F1F5F9",
          "neutral-focus": "#D1D5D8",
          "neutral-content": "#070417",
          info: "#3B82F6",
          error: "#EF4444",
          // bg
          "base-100": "#27272A",
          "base-200": "#3F3F45",
          // text
          "base-300": "#A1A1AA",
          "base-content": "#FFFFFF",
        },
      },
    ],
  },
};
