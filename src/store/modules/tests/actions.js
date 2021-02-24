import axios from "axios";
import helper from "../../../shared/helper.js";

export default {
  getTests(context) {
    context.commit("setTestsLoading", true);
    axios
      .get("https://covid-19-greece.herokuapp.com//total-tests")
      .then((res) => {
        context.commit("setTests", helper.getTests(res.data.total_tests));
        context.commit(
          "setTotalTests",
          helper.getTotalTests(res.data.total_tests)
        );
        context.commit(
          "setDailyTests",
          helper.getDailyTests(res.data.total_tests)
        );
        context.commit(
          "setLastDayTests",
          helper.getLastDayTests(res.data.total_tests)
        );
        context.commit("filterDailyTests", "all");
        context.commit("setTestsLoading", false);
      });
  },

  clearTests(context) {
    context.commit("setTests", null);
    context.commit("setTotalTests", null);
    context.commit("setDailyTests", null);
    context.commit("setLastDayTests", null);
    context.commit("initFilters");
  },

  updateTestsFilters(context, payload) {
    context.commit("filterDailyTests", payload);
    context.commit("updateFilters", payload);
  },
};
