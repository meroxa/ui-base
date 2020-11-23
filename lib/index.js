const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  ({ addBase, addComponents, theme }) => {
    // #TODO break out styles into .js files we can import here
    // #TODO better font fallback support
    const base = {
      '@font-face' : {
        "font-family": "Roboto Thin",
        "font-weight": 200,
        "src": "url('./fonts/Roboto-Thin-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto Light",
        "font-weight": 300,
        "src": "url('./fonts/Roboto-Light-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto",
        "font-weight": 400,
        "src": "url('./fonts/Roboto-Regular-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto Medium",
        "font-weight": 500,
        "src": "url('./fonts/Roboto-Medium-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto Bold",
        "font-weight": 700,
        "src": "url('./fonts/Roboto-Bold-webfont.woff')"
      },
      '@font-face' : {
        "font-family": "Roboto Black",
        "font-weight": 800,
        "src": "url('./fonts/Roboto-Black-webfont.woff')"
      }
    }

    const components = {
      '.mxa-btn-primary': {
        "@apply rounded": {},
        "@apply bg-forest-400": {},
        "@apply text-white": {},
        "@apply px-6": {},
        "@apply py-2": {},
        "@apply border": {},
        "@apply border-forest-400": {}
      },

      '.mxa-btn-secondary': {
        "@apply rounded": {},
        "@apply bg-white": {},
        "@apply text-slate-400": {},
        "@apply px-6": {},
        "@apply py-2": {},
        "@apply border": {},
        "@apply border-slate-200": {}
      },

      '.mxa-input': {
        "@apply rounded": {},
        "@apply border": {},
        "@apply border-transparent": {},
        "@apply bg-frost-100": {},
        "@apply px-4": {},
        "@apply py-2": {},
        "@apply placeholder-slate-300": {},
        '@apply text-slate-400': {}
      },

      '.mxa-input:focus': {
        "@apply outline-none": {},
        "@apply bg-white": {},
        "@apply ring": {},
        "@apply border-plum-400": {},
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
        slate: {
          100: '#F5F5F5',
          200: '#D6D7D9',
          300: '#85878D',
          400: '#333741',
          'dark': '#282D39'
        },

        forest: {
          100: '#F2F7F7',
          200: '#CEDFE2',
          300: '#6C9EA7',
          400: '#0B525E'
        },

        sky: {
          100: '#F4FBFD',
          200: '#D2F2F7',
          300: '#79D8E8',
          400: '#20BED9'
        },

        canary: {
          100: '#FEFCF5',
          200: '#FCF3D8',
          300: '#F5DC8B',
          400: '#EEC53E'
        },

        saffron: {
          100: '#FDF6F5',
          200: '#F8DED8',
          300: '#EB9B8B',
          400: '#DE583E'
        },

        plum: {
          100: '#FAF5FD',
          200: '#EBD8F8',
          300: '#C48AE9',
          400: '#9C3CDB'
        },

        frost: {
          100: '#F3F3F4',
          200: '#DADDE5'
        },

        kale: '#00A191',

        white: '#FFFFFF',
        black: '#000000',
        transparent: 'transparent'
      },
      extend: {
        // Absolute positioning extensions
        // I.E. top-16, left-32
        inset: {
          '16': '4rem',
          '32': '8rem'
        },
      },
    },
    variants: {
      borderWidth: ['hover', 'focus'],
      borderColor: ['focus'],
      ringWidth: ['focus']
    }
  }
)
