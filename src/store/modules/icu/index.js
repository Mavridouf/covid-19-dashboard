import icuMutations from "./mutations.js";
import icuActions from "./actions.js";
import icuGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      icu: null,
      dailyIcu: null,
      lastDayIcu: null,
      totalIcu: null,
      icuLoading: false,
      filters: [
        { name: "week", isActive: false },
        { name: "month", isActive: false },
        { name: "all", isActive: true },
      ],
      activeFilter: "all",
      filteredDailyIcu: null,
    };
  },
  mutations: icuMutations,
  actions: icuActions,
  getters: icuGetters,
};
