import axios from "axios";
import helper from "../../../shared/helper.js";

export default {
  getConfirmed(context) {
    context.commit("setLoading", true);
    axios.get("https://covid-19-greece.herokuapp.com/confirmed").then((res) => {
      context.commit(
        "setConfirmed",
        helper.getOverview(res.data.cases, "confirmed")
      );
      context.commit(
        "setTotalConfirmed",
        helper.getTotal(res.data.cases, "confirmed")
      );
      context.commit("setLoading", false);
    });
  },

  getDailyConfirmed(context) {
    context.commit("setLoading", true);
    context.commit("initFilters");
    axios.get("https://covid-19-greece.herokuapp.com/confirmed").then((res) => {
      context.commit(
        "setDailyConfirmed",
        helper.getDaily(res.data.cases, "confirmed")
      );
      context.commit(
        "setLastDayConfirmed",
        helper.getLastDayData(res.data.cases, "confirmed")
      );
      context.commit("setLastDay", helper.getLastDay(res.data.cases));
      context.commit("filterDailyConfirmed", "all");
      context.commit("setLoading", false);
    });
  },

  clearConfirmed(context) {
    context.commit("setConfirmed", null);
    context.commit("setTotalConfirmed", null);
    context.commit("setDailyConfirmed", null);
    context.commit("setLastDayConfirmed", null);
    context.commit("initFilters");
  },

  updateConfirmFilters(context, payload) {
    context.commit("filterDailyConfirmed", payload);
    context.commit("updateFilters", payload);
  },
};
