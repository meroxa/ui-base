const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = plugin(
  ({ addBase, addComponents, addUtilities, theme }) => {
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
      '.mxa-btn': {
        borderRadius: '0.25rem',
        padding: '0.5rem 1rem',
        fontWeight: '600',
      },

      '.mxa-btn-small': {
        borderRadius: '0.25rem',
        padding: '0.25rem 0.5rem',
        fontWeight: '500',
      },

      '.mxa-btn-primary': {
        backgroundColor: '#0F766E',
        color: 'white',
        border: '1px solid #0F766E',
      },

      '.mxa-btn-primary:active': {
        backgroundColor: '#134E4A',
        border: '1px solid #134E4A',
      },

      '.mxa-btn-secondary': {
        backgroundColor: 'white',
        color: '#111827',
        border: '1px solid #D6D7D9',
      },

      '.mxa-btn-secondary:active': {
        backgroundColor: '#F5F5F5',
      },

      '.mxa-btn-tertiary': {
        backgroundColor: 'white',
        color: '#111827',
        border: '1px solid #FFFFFF',
      },

      '.mxa-btn-tertiary:active': {
        backgroundColor: '#FBFBFB',
        borderColor: '#FBFBFB',
      },

      '.mxa-btn-danger': {
        backgroundColor: '#DC2626',
        color: 'white',
        border: '1px solid #DC2626',
      },

      '.mxa-btn-danger:active': {
        backgroundColor: '#B91C1C',
        border: '1px solid #B91C1C',
      },

      '.mxa-input': {
        borderRadius: '0.25rem',
        backgroundColor: 'white',
        placeholderColor: '#6B7280',
        color: '#111827',
        padding: '0.5rem 1rem',
        border: '1px solid transparent'
      },

      '.mxa-input:focus': {
        backgroundColor: 'white',
        borderColor: '#9333EA',
        outline: 'none'
      },

      '.mxa-label': {
        display: 'flex',
        marginBottom: '0.15rem',
        alignItems: 'center',
      },
    }

    const utilities = {
      '.required:after': {
         content: '""',
         display: 'block',
         width: '0.3rem',
         height: '0.3rem',
         backgroundColor: '#DC2626',
         position: 'relative',
         borderRadius: '0.2rem',
         marginLeft: '0.2rem',
      },
    }

    addBase(base)
    addComponents(components)
    addUtilities(utilities)
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
        // Tailwind Colors
        gray: colors.gray,
        teal: colors.teal,
        red: colors.red,
        yellow: colors.yellow,
        cyan: colors.cyan,
        purple: colors.purple,
        green: colors.green,
        // Custom Meroxa colors
        slate: {
          5: '#F5F5F5',
          20: '#D6D7D9',
          40: '#A5A7AB',
          60: '#85878D',
          100: '#111827',
          'dark': '#282D39'
        },

        forest: {
          5: '#F2F7F7',
          20: '#CEDFE2',
          40: '#B6CBCE',
          60: '#6C9EA7',
          100: '#134E4A'
        },

        sky: {
          5: '#F4FBFD',
          20: '#D2F2F7',
          40: '#BCECF4',
          60: '#79D8E8',
          100: '#06B6D4'
        },

        canary: {
          5: '#FEFCF5',
          20: '#FCF3D8',
          40: '#FAEEC5',
          60: '#F5DC8B',
          100: '#FBBF24'
        },

        saffron: {
          5: '#FDF6F5',
          20: '#F8DED8',
          40: '#F5CDC5',
          60: '#EB9B8B',
          100: '#DC2626'
        },

        plum: {
          5: '#FAF5FD',
          20: '#EBD8F8',
          40: '#E1C5F4',
          60: '#C48AE9',
          100: '#9333EA'
        },

        frost: {
          20: '#FBFBFB',
          40: '#F0F1F5',
          60: '#E9EBEF',
          100: '#6B7280'
        },

        verdant: {
          100: '#0F766E'
        },

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
      backgroundColor: ['disabled', 'checked', 'active'],
      borderWidth: ['hover', 'focus'],
      borderColor: ['focus'],
      margin: ['last'],
      ringWidth: ['focus'],
    }
  }
)
