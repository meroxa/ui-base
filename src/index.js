const plugin = require('tailwindcss/plugin')
const postcss = require('postcss')
const postcssJs = require('postcss-js')

module.exports = plugin(
  ({ addBase, addComponents, theme }) => {
    // #TODO break out styles into .js files we can import here
    // #TODO better font fallback support
    const base = {
      '@font-face' : {
        "font-family": "Roboto Thin",
        "font-weight": 200,
        "src": "url('/fonts/Roboto-Thin-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto Light",
        "font-weight": 300,
        "src": "url('/fonts/Roboto-Light-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto",
        "font-weight": 400,
        "src": "url('/fonts/Roboto-Regular-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto Medium",
        "font-weight": 500,
        "src": "url('/fonts/Roboto-Medium-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto Bold",
        "font-weight": 700,
        "src": "url('/fonts/Roboto-Bold-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto Black",
        "font-weight": 800,
        "src": "url('/fonts/Roboto-Black-webfont.woff')"
      }
    }

    const components = {
      '.mxa-btn-primary': {
        "@apply rounded-full": {},
        "@apply bg-teal-100": {},
        "@apply text-white": {},
        "@apply px-5": {},
        "@apply py-1": {},
        "@apply border": {},
        "@apply border-teal-100": {}
      },

      '.mxa-btn-secondary': {
        "@apply rounded-full": {},
        "@apply bg-white": {},
        "@apply text-gray-300": {},
        "@apply px-5": {},
        "@apply py-1": {},
        "@apply border": {},
        "@apply border-gray-300": {}
      },

      '.mxa-input': {
        "@apply rounded": {},
        "@apply outline-none": {},
        "@apply border": {},
        "@apply border-gray-200": {},
        "@apply px-3": {},
        "@apply py-2": {},
      },

      '.mxa-input:focus': {
        "@apply border-blue-300": {}
      }
    }

    addBase(base)
    addComponents(components)
  },
  {
    theme: {
      fontFamily: {
        roboto: [
          'Roboto',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        white: '#FFFFFF',
        blue: {
          100: '#D5F5FA',
          200: '#95E7F2',
          300: '#20BED9',
        },
        teal: {
          100: '#087D92',
          200: '#0A5E6C',
        },
        gray: {
          100: '#F4F4F6',
          200: '#DADDE5',
          300: '#838B9B',
          400: '#848B9A',
          500: '#323742'
        },
        yellow: {
          100: '#FFE695',
          200: '#EEC53E'
        },
        red: {
          100: '#FEA797',
          200: '#DE583E'
        }
      },
      extend: {},
    },
    variants: {},
  }
)