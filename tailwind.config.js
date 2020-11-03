module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
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
    extend: {
      // Override default tailwind names... 
      // Unsure if maybe we should
      // give these custom names vs. 
      // overriding tailwind names ? 
      fontSize: {
        xs: '0.6875rem', // 11px
        sm: '0.75rem', // 12px
        base: '0.8125rem', // 13px
        lg: '0.875rem', // 14px
        '3xl': '1.75rem', // 28px
      }
    },
  },
  variants: {},
  plugins: [],
}
