export default {
  setIcu(state, payload) {
    state.icu = payload;
  },
  setDailyIcu(state, payload) {
    state.dailyIcu = payload;
  },
  setLastDayIcu(state, payload) {
    state.lastDayIcu = payload;
  },
  setTotalIcu(state, payload) {
    state.totalIcu = payload;
  },
  setIcuLoading(state, payload) {
    state.icuLoading = payload;
  },
};
