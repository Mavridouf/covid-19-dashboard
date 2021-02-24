import axios from "axios";
import helper from "../../../shared/helper.js";

export default {
  getDeaths(context) {
    context.commit("setLoading", true);
    axios.get("https://covid-19-greece.herokuapp.com/deaths").then((res) => {
      context.commit("setDeaths", helper.getDeaths(res.data.cases));
      context.commit("setTotalDeaths", helper.getTotalDeaths(res.data.cases));
      context.commit("setDailyDeaths", helper.getDailyDeaths(res.data.cases));
      context.commit(
        "setLastDayDeaths",
        helper.getLastDayDeaths(res.data.cases)
      );
      context.commit("filterDailyDeaths", "all");
      context.commit("setLoading", false);
    });
  },

  clearDeaths(context) {
    context.commit("setDeaths", null);
    context.commit("setTotalDeaths", null);
    context.commit("setDailyDeaths", null);
    context.commit("setLastDayDeaths", null);
    context.commit("initFilters");
  },

  updateDeathFilters(context, payload) {
    context.commit("filterDailyDeaths", payload);
    context.commit("updateFilters", payload);
  },
};
