import { useContext, useState } from "react";
import { MusicContext } from "../../context/music";
import format from "format-duration";

import { IconButton, Slider, Stack, Tooltip, Typography } from "@mui/material";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export const MusicController = () => {
  const {
    isPlaying,
    timeElapsed,
    timeRemaining,
    duration,
    handlePlayMusic,
    handlePauseMusic,
    handleSetTimeElapsed,
  } = useContext(MusicContext);

  const [showTimeElapsed, setShowTimeElapsed] = useState(true);

  return (
    <Stack
      spacing={0.25}
      flexGrow={1}
      sx={{ height: "100%" }}
      justifyContent="center"
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1.5}
      >
        <IconButton size="small">
          <Tooltip title="Anterior">
            <SkipPreviousIcon />
          </Tooltip>
        </IconButton>

        {isPlaying ? (
          <IconButton
            onClick={handlePauseMusic}
            size="small"
            sx={{
              backgroundColor: "primary.main",

              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <Tooltip title="Pausa">
              <PauseIcon />
            </Tooltip>
          </IconButton>
        ) : (
          <IconButton
            onClick={handlePlayMusic}
            size="small"
            sx={{
              backgroundColor: "primary.main",

              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <Tooltip title="Reproducir">
              <PlayArrowIcon />
            </Tooltip>
          </IconButton>
        )}

        <IconButton size="small">
          <Tooltip title="Siguiente">
            <SkipNextIcon />
          </Tooltip>
        </IconButton>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={3}>
        {showTimeElapsed ? (
          <Typography
            variant="body2"
            onClick={() => setShowTimeElapsed(false)}
            sx={{ cursor: "pointer" }}
          >
            {format(timeElapsed * 1000)}
          </Typography>
        ) : (
          <Typography
            variant="body2"
            onClick={() => setShowTimeElapsed(true)}
            sx={{ cursor: "pointer" }}
          >
            -{format(timeRemaining * 1000)}
          </Typography>
        )}
        <Slider
          size="medium"
          aria-label="Song Duration"
          value={timeElapsed}
          min={0}
          max={duration}
          step={1}
          onChange={(e, value) => handleSetTimeElapsed(value)}
        />
        <Typography variant="body2">{format(duration * 1000)}</Typography>
      </Stack>
    </Stack>
  );
};
