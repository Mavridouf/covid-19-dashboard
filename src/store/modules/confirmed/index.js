import confirmedMutations from "./mutations.js";
import confirmedActions from "./actions.js";
import confirmedGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      confirmed: null,
      dailyConfirmed: null,
      lastDayConfirmed: null,
      totalConfirmed: null,
      confirmedLoading: false,
      lastDay: null,
      filters: [
        { name: "week", isActive: false },
        { name: "month", isActive: false },
        { name: "all", isActive: true },
      ],
      activeFilter: "all",
      filteredDailyConfirmed: null,
    };
  },
  mutations: confirmedMutations,
  actions: confirmedActions,
  getters: confirmedGetters,
};
