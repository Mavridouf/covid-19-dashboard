export default {
  setDeaths(state, payload) {
    state.deaths = payload;
  },
  setDailyDeaths(state, payload) {
    state.dailyDeaths = payload;
  },
  setLastDayDeaths(state, payload) {
    state.lastDayDeaths = payload;
  },
  setTotalDeaths(state, payload) {
    state.totalDeaths = payload;
  },
  setLoading(state, payload) {
    state.deathsLoading = payload;
  },
};
