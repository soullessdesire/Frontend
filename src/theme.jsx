// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2a2b2e", // Jet
    },
    secondary: {
      main: "#5a5a66", // Davy's gray
    },
    error: {
      main: "#e76f51", // Example error color (could be from your palette)
    },
    warning: {
      main: "#f4a261", // Example warning color (could be from your palette)
    },
    info: {
      main: "#a4c2a8", // Cambridge blue
    },
    success: {
      main: "#87ff65", // Screamin' green
    },
    background: {
      default: "#ffffff", // Default background color
      paper: "#f4f4f4", // Paper background color
    },
    text: {
      primary: "#2a2b2e", // Jet
      secondary: "#5a5a66", // Davy's gray
    },
  },
  typography: {
    fontFamily: "Georgia, serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
      color: "#2a2b2e", // Jet
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      color: "#5a5a66", // Davy's gray
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#a4c2a8", // Cambridge blue
    },
    body1: {
      fontSize: "1rem",
      color: "#2a2b2e", // Jet
    },
    body2: {
      fontSize: "0.875rem",
      color: "#5a5a66", // Davy's gray
    },
    subtitle1: {
      fontSize: "1.125rem",
      color: "#a4c2a8", // Cambridge blue
    },
    subtitle2: {
      fontSize: "1rem",
      color: "#aceb98", // Light green
    },
    button: {
      textTransform: "none",
      fontSize: "1rem",
      color: "#ffffff", // White text on buttons
    },
    caption: {
      fontSize: "0.75rem",
      color: "#87ff65", // Screamin' green
    },
    overline: {
      fontSize: "0.75rem",
      color: "#5a5a66", // Davy's gray
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for a softer look
  },
  spacing: 8, // Default spacing of 8px
});

export default theme;
