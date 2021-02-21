export default {
  setTests(state, payload) {
    state.tests = payload;
  },
  setDailyTests(state, payload) {
    state.dailyTests = payload;
  },
  setLastDayTests(state, payload) {
    state.lastDayTests = payload;
  },
  setTotalTests(state, payload) {
    state.totalTests = payload;
  },
  setTestsLoading(state, payload) {
    state.testsLoading = payload;
  },
};
