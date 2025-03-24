/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "Okra-Bold": ["Okra-Bold", "sans-serif"],
        "Okra-Medium": ["Okra-Medium", "sans-serif"],
        "Okra-Regular": ["Okra-Regular", "sans-serif"],
        "Okra-Mediumlight": ["Okra-MediumLight", "sans-serif"],
        "Okra-ExtraBold": ["Okra-ExtraBold", "sans-serif"],
      },
      colors: {
        primary: "#1063FD",
        muted: "#3A5A92",
        background: "#EFEEF6",
        gray: "#6E6E73",
        lightGray: "#DCDCE2",
        green: "#4FEE57",
        lightGreen: "#DBFFCB",
        danger: "#EF0827",
        yellow: "#FCC70B",
      },
    },
  },
  plugins: [],
};
