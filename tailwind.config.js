/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#112240",
        primaryColor: "#64FFDA",
        textColor: "#889280"
      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },   

    },
    screens: {
      'xs': '340px',   // Smallest breakpoint
      'sm': '480px',   // Small mobile devices
      'md': '640px',   // Medium devices (tablets)
      //min width
      'lg': '860px',   // Larger devices
      'xl': '1024px',  // Extra-large devices
      '2xl': '1280px', // 2X Extra-large devices

      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1023px' },
      'md-mx': { 'max': '859px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '479px' },
    },


  },
  plugins: [],
}


// 'xsm': '350px',
// 'xs': '476px',
// 'sm': '671px',
// 'md': '675px',
// 'bs': '920px',
// 'lg': '1111px',
// 'xl': '1280px',
// '2xl': '1536px',


// '2xl-mx': { 'max': '1535px' },
// 'xl-mx': { 'max': '1279px' },
// 'lg-mx': { 'max': '1110px' },
// 'bs-mx': { 'max': '919px' },
// 'md-mx': { 'max': '674px' },
// 'sm-mx': { 'max': '670px' },
// 'xs-mx': { 'max': '475px' },
// 'xsm-mx': { 'max': '349px' }

