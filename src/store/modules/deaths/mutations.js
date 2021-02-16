export default {
  setDeaths(state, payload) {
    state.deaths = payload;
  },
  setTotalDeaths(state, payload) {
    state.totalDeaths = payload;
  },
  setLoading(state, payload) {
    state.deathsLoading = payload;
  },
};
