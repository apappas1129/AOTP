import { PlayList } from "@/data";

const state = {
  audio: null,
  circleLeft: null,
  playerInfo: {
    barWidth: null,
    duration: null,
    currentTime: null,
  },
  isTimerPlaying: false,
  tracks: PlayList,
  currentTrack: null,
  currentTrackIndex: 0,
};

const getters = {
  getPlayerInfo: (state) => state.playerInfo,
  getIsTimerPlaying: (state) => state.isTimerPlaying,
  getTracks: (state) => state.tracks,
  getCurrentTrack: (state) => state.currentTrack,
  getCurrentTrackIndex: (state) => state.currentTrackIndex,
};

const actions = {
  play({ commit, state }) {
    if (state.audio.paused) {
      state.audio.play();
      commit("setIsPlaying", true);
    } else {
      state.audio.pause();
      commit("setIsPlaying", false);
    }
  },
  generateTime({ commit, state }) {
    let width = (100 / state.audio.duration) * state.audio.currentTime;
    commit("setPlayBack", width + "%");
    let durmin = Math.floor(state.audio.duration / 60);
    let dursec = Math.floor(state.audio.duration - durmin * 60);
    let curmin = Math.floor(state.audio.currentTime / 60);
    let cursec = Math.floor(state.audio.currentTime - curmin * 60);
    if (durmin < 10) {
      durmin = "0" + durmin;
    }
    if (dursec < 10) {
      dursec = "0" + dursec;
    }
    if (curmin < 10) {
      curmin = "0" + curmin;
    }
    if (cursec < 10) {
      cursec = "0" + cursec;
    }
    commit("setDuration", durmin + ":" + dursec);
    commit("setCurrentTime", curmin + ":" + cursec);
  },
  updateBar({ commit, state }, x, progress) {
    commit("setTimerPlaying", true);
    state.audio.pause();
    let maxduration = state.audio.duration;
    let position = x - progress.offsetLeft;
    let percentage = (100 * position) / progress.offsetWidth;
    if (percentage > 100) {
      percentage = 100;
    }
    if (percentage < 0) {
      percentage = 0;
    }
    commit("setPlayBack", percentage + "%");
    commit("setAudioCurrentTime", (maxduration * percentage) / 100);
    state.audio.play();
  },
  pTrack({ commit, state, dispatch }) {
    if (state.currentTrackIndex > 0) {
      commit("decrementCurrentTrackIndex");
    } else {
      commit("setCurrentTrackIndex", state.tracks.length - 1);
    }

    commit("setCurrentTrack");
    dispatch("resetPlayer");
  },
  nTrack({ commit, state, dispatch }) {
    if (state.currentTrackIndex < state.tracks.length - 1) {
      commit("incrementCurrentTrackIndex");
    } else {
      commit("setCurrentTrackIndex", 0);
    }

    commit("setCurrentTrack");
    dispatch("resetPlayer");
  },
  skipTrack({ commit, state, dispatch }, index) {
    console.log("skipping to", index);
    if (index >= state.tracks.length) return;

    if (state.audio === null) {
      dispatch("initiate");
    }

    commit("setCurrentTrackIndex", index);
    commit("setCurrentTrack");
    dispatch("resetPlayer");

    if (state.audio.paused) {
      state.audio.play();
      commit("setIsPlaying", true);
    }
  },
  resetPlayer({ commit, state }) {
    commit("setPlayBack", 0);
    commit("setAudioCurrentTime", 0);
    commit("setAudioSource");
    setTimeout(() => {
      if (state.isTimerPlaying) {
        state.audio.play();
      } else {
        state.audio.pause();
      }
    }, 300);
  },
  favorite({ commit, state }) {
    commit("setFavorite", !state.tracks[state.currentTrackIndex].favorited);
  },
  initiate({ commit, state, dispatch }) {
    if (state.audio === null) {
      commit("setCurrentTrack");
      commit("setAudio");
      commit("setAudioSource");

      state.audio.ontimeupdate = function() {
        dispatch("generateTime");
      };
      state.audio.onloadedmetadata = function() {
        dispatch("generateTime");
      };
      state.audio.onended = function() {
        dispatch("nTrack");
        commit("setIsPlaying", true);
      };
    }
  },
};

const mutations = {
  setDuration(state, duration) {
    state.playerInfo.duration = duration;
  },
  setCurrentTime(state, currentTime) {
    state.playerInfo.currentTime = currentTime;
  },
  setPlayBack(state, playBack) {
    state.playerInfo.circleLeft = state.playerInfo.barWidth = playBack;
  },
  setIsPlaying(state, isPlaying) {
    state.isTimerPlaying = isPlaying;
  },
  incrementCurrentTrackIndex(state) {
    state.currentTrackIndex++;
  },
  decrementCurrentTrackIndex(state) {
    state.currentTrackIndex--;
  },
  setCurrentTrackIndex(state, currentTrackIndex) {
    state.currentTrackIndex = currentTrackIndex;
  },
  setCurrentTrack(state) {
    state.currentTrack = state.tracks[state.currentTrackIndex];
  },
  setFavorite(state, favorite) {
    state.tracks[state.currentTrackIndex].favorited = favorite;
  },
  setAudioCurrentTime(state, currentTime) {
    state.audio.currentTime = currentTime;
  },
  setAudioSource(state) {
    state.audio.src = state.currentTrack.source;
  },
  setAudio(state) {
    state.audio = new Audio();
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
