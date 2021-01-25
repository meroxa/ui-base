const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  ({ addBase, addComponents, theme }) => {
    // #TODO break out styles into .js files we can import here
    // #TODO better font fallback support
    const base = {
      "@font-face": {
        "font-family": "Inter Thin",
        "font-weight": 200,
        src: "url('./fonts/Inter-Thin.woff')",
      },
      "@font-face": {
        "font-family": "Inter Light",
        "font-weight": 300,
        src: "url('./fonts/Inter-Light.woff')",
      },
      "@font-face": {
        "font-family": "Inter",
        "font-weight": 400,
        src: "url('./fonts/Inter-Regular.woff')",
      },
      "@font-face": {
        "font-family": "Inter Medium",
        "font-weight": 500,
        src: "url('./fonts/Inter-Medium.woff')",
      },
      "@font-face": {
        "font-family": "Inter SemiBold",
        "font-weight": 600,
        src: "url('./fonts/Inter-SemiBold.woff')",
      },
      "@font-face": {
        "font-family": "Inter Bold",
        "font-weight": 700,
        src: "url('./fonts/Inter-Bold.woff')",
      },
    };

    const components = {
      '.mxa-btn-primary': {
        borderRadius: '0.25rem',
        backgroundColor: '#0B525E',
        color: 'white',
        padding: '0.5rem 1.5rem',
        border: '1px solid #0B525E'
      },

      '.mxa-btn-secondary': {
        borderRadius: '0.25rem',
        backgroundColor: 'white',
        color: '#333741',
        padding: '0.5rem 1.5rem',
        border: '1px solid #D6D7D9'
      },

      '.mxa-input': {
        borderRadius: '0.25rem',
        backgroundColor: '#FBFBFB',
        placeholderColor: '#85878D',
        color: '#333741',
        padding: '0.5rem 1rem',
        border: '1px solid transparent'
      },

      '.mxa-input:focus': {
        backgroundColor: 'white',
        borderColor: '#9C3CDB',
        outline: 'none'
      }
    }

    addBase(base)
    addComponents(components)
  },
  {
    theme: {
      fontFamily: {
        inter: [
          'Inter',
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
          5: '#F5F5F5',
          20: '#D6D7D9',
          60: '#85878D',
          100: '#333741',
          'dark': '#282D39'
        },

        forest: {
          5: '#F2F7F7',
          20: '#CEDFE2',
          60: '#6C9EA7',
          100: '#0B525E'
        },

        sky: {
          5: '#F4FBFD',
          20: '#D2F2F7',
          60: '#79D8E8',
          100: '#20BED9'
        },

        canary: {
          5: '#FEFCF5',
          20: '#FCF3D8',
          60: '#F5DC8B',
          100: '#EEC53E'
        },

        saffron: {
          5: '#FDF6F5',
          20: '#F8DED8',
          60: '#EB9B8B',
          100: '#DE583E'
        },

        plum: {
          5: '#FAF5FD',
          20: '#EBD8F8',
          60: '#C48AE9',
          100: '#9C3CDB'
        },

        frost: {
          20: '#FBFBFB',
          60: '#F3F3F4',
          100: '#DADDE5'
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
