import axios from "axios";
import helper from "../../../shared/helper.js";

export default {
  getDeaths(context) {
    context.commit("setLoading", true);
    axios.get("https://covid-19-greece.herokuapp.com/deaths").then((res) => {
      context.commit("setDeaths", helper.getOverview(res.data.cases, "deaths"));
      context.commit(
        "setTotalDeaths",
        helper.getTotal(res.data.cases, "deaths")
      );
      context.commit("setLoading", false);
    });
  },

  getDailyDeaths(context) {
    context.commit("setLoading", true);
    context.commit("initFilters");
    axios.get("https://covid-19-greece.herokuapp.com/deaths").then((res) => {
      context.commit(
        "setDailyDeaths",
        helper.getDaily(res.data.cases, "deaths")
      );
      context.commit(
        "setLastDayDeaths",
        helper.getLastDayData(res.data.cases, "deaths")
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
