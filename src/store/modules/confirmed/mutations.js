import moment from "moment";
import { forEach } from "lodash/core";
import helper from "../../../shared/helper";

export default {
  setConfirmed(state, payload) {
    state.confirmed = payload;
  },

  setDailyConfirmed(state, payload) {
    state.dailyConfirmed = payload;
  },

  setLastDayConfirmed(state, payload) {
    state.lastDayConfirmed = payload;
  },

  setTotalConfirmed(state, payload) {
    state.totalConfirmed = payload;
  },

  setLoading(state, payload) {
    state.confirmedLoading = payload;
  },

  setLastDay(state, payload) {
    state.lastDay = payload;
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

  filterDailyConfirmed(state, payload) {
    let filter;
    let lastDay = state.dailyConfirmed[state.dailyConfirmed.length - 1].x;
    if (payload === "week") filter = helper.getlastWeek(lastDay);
    else if (payload === "month") filter = helper.getlastMonth(lastDay);
    else {
      state.filteredDailyConfirmed = state.dailyConfirmed;
      return;
    }
    state.filteredDailyConfirmed = state.dailyConfirmed.filter((entry) => {
      return moment(entry.x) > filter;
    });
  },
};
