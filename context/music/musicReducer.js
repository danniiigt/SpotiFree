export const MusicReducer = (state, action) => {
  switch (action.type) {
    case "PLAY_MUSIC":
      return {
        ...state,
        isPlaying: true,
      };

    case "PAUSE_MUSIC":
      return {
        ...state,
        isPlaying: false,
      };

    case "MUTE_VOLUME":
      return {
        ...state,
        isMuted: true,
      };

    case "UNMUTE_VOLUME":
      return {
        ...state,
        isMuted: false,
      };

    case "SET_VOLUME":
      return {
        ...state,
        volume: action.payload,
      };

    case "SET_TIME_ELAPSED": {
      return {
        ...state,
        timeElapsed: action.payload,
        timeRemaining: state.duration - action.payload,
      };
    }

    default:
      return state;
  }
};
