import { CssBaseline, ThemeProvider } from "@mui/material";
import { LayoutProvider, MusicProvider } from "../context";
import { darkTheme } from "../themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <LayoutProvider>
        <MusicProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </MusicProvider>
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default MyApp;
