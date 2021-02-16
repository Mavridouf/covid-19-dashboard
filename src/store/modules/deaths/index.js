import deathMutations from "./mutations.js";
import deathActions from "./actions.js";
import deathGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      deaths: {},
      totalDeaths: {},
      deathsLoading: false,
    };
  },
  mutations: deathMutations,
  actions: deathActions,
  getters: deathGetters,
};
