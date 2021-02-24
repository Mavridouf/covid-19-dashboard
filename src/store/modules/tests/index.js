import testsMutations from "./mutations.js";
import testsActions from "./actions.js";
import testsGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      tests: null,
      dailyTests: null,
      lastDayTests: null,
      totalTotalTests: null,
      testsLoading: false,
      filters: [
        { name: "week", isActive: false },
        { name: "month", isActive: false },
        { name: "all", isActive: true },
      ],
      activeFilter: "all",
      filteredDailyTests: null,
    };
  },
  mutations: testsMutations,
  actions: testsActions,
  getters: testsGetters,
};
