export default {
  icu(state) {
    return state.icu;
  },
  dailyIcu(state) {
    return state.dailyIcu;
  },
  lastDayIcu(state) {
    return state.lastDayIcu;
  },
  totalIcu(state) {
    return state.totalIcu;
  },
  icuLoading(state) {
    return state.icuLoading;
  },
  icuFilters(state) {
    return state.filters;
  },
  activeIcuFilter(state) {
    return state.activeFilter;
  },
  filteredDailyIcu(state) {
    return state.filteredDailyIcu;
  },
};
