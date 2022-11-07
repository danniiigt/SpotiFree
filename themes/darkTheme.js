import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1a1a1a",
    },

    text: {
      primary: "#636363",
      secondary: "#fff",
    },

    primary: {
      main: "#008fff",
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#0d0d0d",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "6px",
          fontWeight: 400,
          fontSize: "14px",
          outline: "none",
          backgroundColor: "transparent",
          border: "1px solid #333",
          padding: "8px 24px",
          borderRadius: "6px",
          color: "#888",
          textTransform: "none",
        },
        outlined: {
          "&:hover": {
            backgroundColor: "transparent",
            color: "white",
          },
        },
        contained: {
          backgroundColor: "white",
          color: "black",

          "&:hover": {
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid white",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "inherit",
          textDecoration: "none",

          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
