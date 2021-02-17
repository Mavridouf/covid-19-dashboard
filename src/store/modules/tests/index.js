import testsMutations from "./mutations.js";
import testsActions from "./actions.js";
import testsGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      tests: {},
      totalTotalTests: {},
      testsLoading: false,
    };
  },
  mutations: testsMutations,
  actions: testsActions,
  getters: testsGetters,
};
