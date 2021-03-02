import moment from "moment/src/moment";
import { forEach } from "lodash/core";
import helper from "../../../shared/helper";

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

  filterDailyTests(state, payload) {
    let filter;
    let lastDay = state.dailyTests[state.dailyTests.length - 1].x;
    if (payload === "week") filter = helper.getlastWeek(lastDay);
    else if (payload === "month") filter = helper.getlastMonth(lastDay);
    else {
      state.filteredDailyTests = state.dailyTests;
      return;
    }
    state.filteredDailyTests = state.dailyTests.filter((entry) => {
      return moment(entry.x) > filter;
    });
  },
};
