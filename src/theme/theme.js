import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#06BFB3",
      dark: "#04a89d",
      light: "#2cc9bf",
      contrastText: "#fff",
    },
    secondary: {
      main: "#293239",
      light: "#555",
      dark: "#1a1f23",
      contrastText: "#fff",
    },
    text: {
      primary: "#293239",
      secondary: "#666",
      disabled: "#999",
    },
    background: {
      default: "#fff",
      paper: "#f8fffe",
    },
    grey: {
      50: "#f8fffe",
      100: "#e6faf8",
      200: "#d4f5f2",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      lineHeight: 1.2,
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:480px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 800,
      lineHeight: 1.2,
      "@media (max-width:768px)": {
        fontSize: "2rem",
      },
      "@media (max-width:480px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "1.3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "0.9rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 50,
  },
  shadows: [
    "none",
    "0 2px 10px rgba(0, 0, 0, 0.1)",
    "0 5px 20px rgba(0, 0, 0, 0.05)",
    "0 8px 30px rgba(0, 0, 0, 0.1)",
    "0 10px 30px rgba(6, 191, 179, 0.3)",
    "0 15px 40px rgba(6, 191, 179, 0.15)",
    "0 20px 60px rgba(0, 0, 0, 0.1)",
    ...Array(18).fill("none"),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: "0.75rem 1.5rem",
          fontWeight: 600,
          transition: "all 0.3s ease",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 10px 30px rgba(6, 191, 179, 0.3)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s ease",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

export default theme;
