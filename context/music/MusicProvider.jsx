import { useReducer } from "react";
import { MusicContext, MusicReducer } from "./";

export const MusicProvider = ({ children }) => {
  const initialState = {
    isPlaying: false,
    isMuted: false,
    volume: 0.5,

    timeElapsed: 53,
    timeRemaining: 171,
    duration: 224,
  };

  const [state, dispatch] = useReducer(MusicReducer, initialState);

  const handlePlayMusic = () => {
    dispatch({ type: "PLAY_MUSIC" });
  };

  const handlePauseMusic = () => {
    dispatch({ type: "PAUSE_MUSIC" });
  };

  const handleMuteVolume = () => {
    dispatch({ type: "MUTE_VOLUME" });
  };

  const handleUnMuteVolume = () => {
    dispatch({ type: "UNMUTE_VOLUME" });
  };

  const handleSetVolume = (volume) => {
    dispatch({ type: "SET_VOLUME", payload: volume });
  };

  const handleSetTimeElapsed = (timeElapsed) => {
    dispatch({ type: "SET_TIME_ELAPSED", payload: timeElapsed });
  };

  return (
    <MusicContext.Provider
      value={{
        ...state,
        // METHODS:

        handlePlayMusic,
        handlePauseMusic,
        handleMuteVolume,
        handleUnMuteVolume,
        handleSetVolume,
        handleSetTimeElapsed,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
