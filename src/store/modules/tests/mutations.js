export default {
  setTests(state, payload) {
    state.tests = payload;
  },
  setTotalTests(state, payload) {
    state.totalTests = payload;
  },
  setTestsLoading(state, payload) {
    state.testsLoading = payload;
  },
};
