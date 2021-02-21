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
    };
  },
  mutations: icuMutations,
  actions: icuActions,
  getters: icuGetters,
};
