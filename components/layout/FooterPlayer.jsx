import { Box } from "@mui/material";
import { useContext } from "react";
import { LayoutContext, MusicContext } from "../../context";
import { Volume, MusicController } from "../music";

export const FooterPlayer = () => {
  const { footerPlayerHeight } = useContext(LayoutContext);
  const { isPlaying, handlePlayMusic, handlePauseMusic } =
    useContext(MusicContext);

  return (
    <footer
      style={{
        position: "sticky",
        width: "100vw",
        bottom: 0,
        height: `${footerPlayerHeight}px`,
        padding: "0px 30px",
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "30%" }}>{/* SONG PICTURE */}</Box>

      <MusicController />

      <Box sx={{ width: "30%", display: "flex", justifyContent: "flex-end" }}>
        <Volume />
      </Box>
    </footer>
  );
};
