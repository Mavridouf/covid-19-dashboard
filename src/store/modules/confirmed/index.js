import confirmedMutations from "./mutations.js";
import confirmedActions from "./actions.js";
import confirmedGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      confirmed: {},
      totalConfirmed: {},
      confirmedLoading: false,
    };
  },
  mutations: confirmedMutations,
  actions: confirmedActions,
  getters: confirmedGetters,
};
