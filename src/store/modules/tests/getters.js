export default {
  tests(state) {
    return state.tests;
  },
  dailyTests(state) {
    return state.dailyTests;
  },
  lastDayTests(state) {
    return state.lastDayTests;
  },
  totalTests(state) {
    return state.totalTests;
  },
  testsLoading(state) {
    return state.testsLoading;
  },
  testsFilters(state) {
    return state.filters;
  },
  activeTestsFilter(state) {
    return state.activeFilter;
  },
  filteredDailyTests(state) {
    return state.filteredDailyTests;
  },
};
