export default {
  setConfirmed(state, payload) {
    state.confirmed = payload;
  },
  setTotalConfirmed(state, payload) {
    state.totalConfirmed = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
};
