import moment from "moment";
import { forEach } from "lodash/core";
import helper from "../../../shared/helper";

export default {
  setDeaths(state, payload) {
    state.deaths = payload;
  },
  setDailyDeaths(state, payload) {
    state.dailyDeaths = payload;
  },
  setLastDayDeaths(state, payload) {
    state.lastDayDeaths = payload;
  },
  setTotalDeaths(state, payload) {
    state.totalDeaths = payload;
  },
  setLoading(state, payload) {
    state.deathsLoading = payload;
  },

  initFilters(state) {
    state.filters = [
      { name: "week", isActive: false },
      { name: "month", isActive: false },
      { name: "all", isActive: true },
    ];
  },

  updateFilters(state, payload) {
    state.activeFilter = payload;
    forEach(state.filters, (filter) => {
      filter.isActive = filter.name === payload;
    });
  },

  filterDailyDeaths(state, payload) {
    let filter;
    let lastDay = state.dailyDeaths[state.dailyDeaths.length - 1].x;
    if (payload === "week") filter = helper.getlastWeek(lastDay);
    else if (payload === "month") filter = helper.getlastMonth(lastDay);
    else {
      state.filteredDailyDeaths = state.dailyDeaths;
      return;
    }
    state.filteredDailyDeaths = state.dailyDeaths.filter((entry) => {
      return moment(entry.x) > filter;
    });
  },
};
