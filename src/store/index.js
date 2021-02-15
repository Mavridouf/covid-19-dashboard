import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

export default createStore({
  state() {
    return {
      confirmed: {},
      totalConfirmed: null,
      loading: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
