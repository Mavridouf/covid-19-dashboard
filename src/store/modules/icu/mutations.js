export default {
  setIcu(state, payload) {
    state.icu = payload;
  },
  setTotalIcu(state, payload) {
    state.totalIcu = payload;
  },
  setIcuLoading(state, payload) {
    state.icuLoading = payload;
  },
};
