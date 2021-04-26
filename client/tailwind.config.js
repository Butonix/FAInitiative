module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"],
        secondary: ["Yeseva One"],
      },
      fontSize: {
        xs2: ".45rem",
        xs: ".75rem",
      },
      padding: {
        vh: "8vh",
        "1/18": "5.555555555%",
        "2/18": "11.111111111%",
      },
      width: {
        "1/18": "5.555555555%",
        "2/18": "11.111111111%",
        "4/18": "22.222222222%",
        "4/20": "20%",
        "14/18": "77.777777777%",
        "17/18": "94.444444444%",
        "2/7": "28.571428571%",
        "4/7": "57.142857142%",
      },
      height: {
        "7v": "7vh",
        "8v": "8vh",
        "9v": "9vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "92v": "92vh",
        "93v": "93vh",
        "100v": "100vh",
        "1/7": "14.285714285%",
        "2/7": "28.571428571%",
        "4/7": "57.142857142%",
      },
      borderRadius: {
        "3.5xl": "2.5rem",
        "4xl": "3rem",
      },
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#5C9379",
      secondary: "#B4C681",
      danger: "#e3342f",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      secondary: "#E8F1F2",
      green: "#5B9279",
      secGray: "#E8F1F2",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#5B9279",
      secondary: "#001A23",
      minimal: "#C2C2C2",
      green: "#5B9279",
      lightGray: "#979797",
      secLightGray: "#E8F1F2",
    }),

    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#E8F1F2",
      green: "#5B9279",
      danger: "#e3342f",
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
