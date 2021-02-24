export default {
  deaths(state) {
    return state.deaths;
  },
  dailyDeaths(state) {
    return state.dailyDeaths;
  },
  lastDayDeaths(state) {
    return state.lastDayDeaths;
  },
  totalDeaths(state) {
    return state.totalDeaths;
  },
  deathsLoading(state) {
    return state.deathsLoading;
  },
  deathsFilters(state) {
    return state.filters;
  },
  activeDeathsFilter(state) {
    return state.activeFilter;
  },
  filteredDailyDeaths(state) {
    return state.filteredDailyDeaths;
  },
};
