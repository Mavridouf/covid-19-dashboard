export default {
  confirmed(state) {
    return state.confirmed;
  },
  dailyConfirmed(state) {
    return state.dailyConfirmed;
  },
  lastDayConfirmed(state) {
    return state.lastDayConfirmed;
  },
  totalConfirmed(state) {
    return state.totalConfirmed;
  },
  confirmedLoading(state) {
    return state.confirmedLoading;
  },
  lastDay(state) {
    return state.lastDay;
  },
  confirmedFilters(state) {
    return state.filters;
  },
  activeConfirmedFilter(state) {
    return state.activeFilter;
  },
  filteredDailyConfirmed(state) {
    return state.filteredDailyConfirmed;
  },
};
