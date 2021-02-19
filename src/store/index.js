import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

import confirmedModule from "./modules/confirmed/index.js";
import deathModule from "./modules/deaths/index.js";
import icuModule from "./modules/icu/index.js";
import testsModule from "./modules/tests/index.js";
import genderModule from "./modules/gender/index.js";

export default createStore({
  modules: {
    confirmedModule: confirmedModule,
    deathModule: deathModule,
    icuModule: icuModule,
    testsModule: testsModule,
    genderModule: genderModule,
  },
  state() {
    return {};
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
