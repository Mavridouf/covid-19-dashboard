import genderMutations from "./mutations.js";
import genderActions from "./actions.js";
import genderGetters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      male: null,
      female: null,
      ageGroups: [],
      gendersLoading: false,
    };
  },
  mutations: genderMutations,
  actions: genderActions,
  getters: genderGetters,
};
