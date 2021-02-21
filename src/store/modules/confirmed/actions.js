import axios from "axios";
import helper from "../../../shared/helper.js";

export default {
  getConfirmed(context) {
    context.commit("setLoading", true);
    axios.get("https://covid-19-greece.herokuapp.com/confirmed").then((res) => {
      context.commit("setConfirmed", helper.getConfirmed(res.data.cases));
      context.commit(
        "setTotalConfirmed",
        helper.getTotalConfirmed(res.data.cases)
      );
      context.commit(
        "setDailyConfirmed",
        helper.getDailyConfirmed(res.data.cases)
      );
      context.commit(
        "setLastDayConfirmed",
        helper.getLastDayConfirmed(res.data.cases)
      );
      context.commit("setLastDay", helper.getLastDay(res.data.cases));
      context.commit("setLoading", false);
    });
  },

  clearConfirmed(context) {
    context.commit("setConfirmed", null);
    context.commit("setTotalConfirmed", null);
    context.commit("setDailyConfirmed", null);
    context.commit("setLastDayConfirmed", null);
  },
};
