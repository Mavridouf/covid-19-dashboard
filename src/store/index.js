import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";
import deathModule from "./modules/deaths/index.js";
import confirmedModule from "./modules/confirmed/index.js";

export default createStore({
  modules: {
    confirmedModule: confirmedModule,
    deathModule: deathModule,
  },
  state() {
    return {};
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
