import moment from "moment/src/moment";
import { forEach } from "lodash/core";
import helper from "../../../shared/helper";

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

  filterDailyIcu(state, payload) {
    let filter;
    let lastDay = state.dailyIcu[state.dailyIcu.length - 1].x;
    if (payload === "week") filter = helper.getlastWeek(lastDay);
    else if (payload === "month") filter = helper.getlastMonth(lastDay);
    else {
      state.filteredDailyIcu = state.dailyIcu;
      return;
    }
    state.filteredDailyIcu = state.dailyIcu.filter((entry) => {
      return moment(entry.x) > filter;
    });
  },
};
