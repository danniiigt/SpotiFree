import { useContext } from "react";
import { MusicContext } from "../../context/music";

import { Slider, Stack, Tooltip } from "@mui/material";

import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export const Volume = () => {
  const {
    volume,
    isMuted,
    handleMuteVolume,
    handleUnMuteVolume,
    handleSetVolume,
  } = useContext(MusicContext);

  const handleChangeVolume = (e, newValue) => {
    if (isMuted) {
      handleUnMuteVolume();
    } else {
      handleSetVolume(newValue);
    }
  };

  const handleIncrementVolume = () => {
    if (volume < 1) {
      if (volume + 0.05 > 1) {
        handleSetVolume(1);
      } else {
        handleSetVolume(volume + 0.05);
      }
    }
  };

  const handleVolumeUp = () => {
    if (isMuted) {
      handleUnMuteVolume();
    } else {
      handleIncrementVolume();
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ width: 150 }}
    >
      {!isMuted ? (
        <VolumeMuteIcon onClick={handleMuteVolume} />
      ) : (
        <VolumeOffIcon onClick={handleUnMuteVolume} />
      )}

      <Slider
        size="small"
        aria-label="Volume"
        sx={{ color: "text.secondary" }}
        onChange={handleChangeVolume}
        value={isMuted ? 0 : volume}
        step={0.01}
        min={0}
        max={1}
      />

      <Tooltip title="+">
        <VolumeUpIcon onClick={handleVolumeUp} />
      </Tooltip>
    </Stack>
  );
};
