const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

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
      ".mxa-btn": {
        borderRadius: "0.25rem",
        padding: "0.5rem 1rem",
        fontWeight: "600",
      },

      ".mxa-btn-small": {
        borderRadius: "0.25rem",
        padding: "0.25rem 0.5rem",
        fontWeight: "500",
      },

      ".mxa-btn-primary": {
        backgroundColor: "#0F766E",
        color: "white",
        border: "1px solid #0F766E",
      },

      ".mxa-btn-primary:active": {
        backgroundColor: "#134E4A",
        border: "1px solid #134E4A",
      },

      ".mxa-btn-secondary": {
        backgroundColor: "white",
        color: "#111827",
        border: "1px solid #D6D7D9",
      },

      ".mxa-btn-secondary:active": {
        backgroundColor: "#F5F5F5",
      },

      ".mxa-btn-tertiary": {
        backgroundColor: "white",
        color: "#111827",
        border: "1px solid #FFFFFF",
      },

      ".mxa-btn-tertiary:active": {
        backgroundColor: "#FBFBFB",
        borderColor: "#FBFBFB",
      },

      ".mxa-btn-danger": {
        backgroundColor: "#DC2626",
        color: "white",
        border: "1px solid #DC2626",
      },

      ".mxa-btn-danger:active": {
        backgroundColor: "#B91C1C",
        border: "1px solid #B91C1C",
      },

      ".mxa-input": {
        borderRadius: "0.25rem",
        backgroundColor: "white",
        placeholderColor: "#6B7280",
        color: "#111827",
        padding: "0.5rem 1rem",
        border: "1px solid transparent",
      },

      ".mxa-input:focus": {
        backgroundColor: "white",
        borderColor: "#9333EA",
        outline: "none",
      },

      ".mxa-label": {
        display: "flex",
        marginBottom: "0.15rem",
        alignItems: "center",
      },
    };

    const utilities = {
      ".required:after": {
        content: '""',
        display: "block",
        width: "0.3rem",
        height: "0.3rem",
        backgroundColor: "#DC2626",
        position: "relative",
        borderRadius: "0.2rem",
        marginLeft: "0.2rem",
      },
    };

    addBase(base);
    addComponents(components);
    addUtilities(utilities);
  },
  {
    theme: {
      fontFamily: {
        inter: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      extend: {
        // Absolute positioning extensions
        // I.E. top-16, left-32
        inset: {
          16: "4rem",
          32: "8rem",
        },
        colors: {
          green: colors.emerald,
          yellow: colors.amber,
          purple: colors.violet,
        },
      },
    },
  }
);
