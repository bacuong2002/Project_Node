const { createThemes } = require("tw-colors");

module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      spacing: {
        '775px': 'calc(100vh - 63px - 24px)', // Chiều cao phần tử là 100% chiều cao trình duyệt trừ đi khoảng cách từ top (63px) và padding bottom (24px)
        '572px': '572px',
        '164px': '164px',
        '48px': '48px',
        '12px': '12px',
        '24px': '24px',
        '1440': '1440px',
        '900': '900px',
        '15016': '15016px',
        '-6480': '-6480px',
        '102': '102px',
        '126': '126px',
        '351': '351px',
        '626': '626px',
        '357': '357px',
      },
      width: {
        'fixed': '640px',
        'w-569': '569px',
        '54': '54px',
        '236': '236px',
        '1354': '1354px',
      },
      height: {
        'h-572' : '572px',
        '884' : '884px',
        '57': '57px',
        '236': '236px',
        '828': '828px',
      },
      inset: {
        '64': '64px',
        '78': '78px',
      },
      padding: {
        '24px': '24px',
        '784': '784px',
      },
      borderRadius: {
        '8': '8px',
        '0': '0', 
      },
      borderWidth: {
        '1': '1px',
      },
      justifyContent: {
        'space-between': 'space-between',
      },
      colors: {
        customGrayLight: "#D8D8D8",
        customGrayDark: "#939090",
        customYellow: "#FBAF17",
        customBlack: "#2E2E2E",
        customGray: "#5F5F5F",
        customDarkGray: "#252525",
        customBrown: "#533700",
        customWhite: "#FFFFFF",
        customDark: "#080808",
        customDark2: "#151515",
        customBlack2: "#000000",
        customDark3: "#212121",
        customRed: "#FF453A"
      },
    }
  },

  plugins: [
    createThemes(({ light, dark }) => ({
      light: light({
        primary: "white",
        secondary: "black",
      }),
      dark: dark({
        primary: "black",
        secondary: "white"
      }),
      oled: dark({
        primary: "gray",
        secondary: "white"
      })
    }))
  ]
};
