import axios from "axios";
import helper from "../../../shared/helper.js";

export default {
  getIcu(context) {
    context.commit("setIcuLoading", true);
    axios
      .get("https://covid-19-greece.herokuapp.com//intensive-care")
      .then((res) => {
        context.commit("setIcu", helper.getIcu(res.data.cases));
        context.commit("setTotalIcu", helper.getTotalIcu(res.data.cases));
        context.commit("setDailyIcu", helper.getDailyIcu(res.data.cases));
        context.commit("setLastDayIcu", helper.getLastDayIcu(res.data.cases));
        context.commit("filterDailyIcu", "all");
        context.commit("setIcuLoading", false);
      });
  },

  clearIcu(context) {
    context.commit("setIcu", null);
    context.commit("setTotalIcu", null);
    context.commit("setDailyIcu", null);
    context.commit("setLastDayIcu", null);
    context.commit("initFilters");
  },

  updateIcuFilters(context, payload) {
    context.commit("filterDailyIcu", payload);
    context.commit("updateFilters", payload);
  },
};
