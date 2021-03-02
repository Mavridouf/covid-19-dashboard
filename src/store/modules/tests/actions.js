import axios from "axios";
import helper from "../../../shared/helper.js";

export default {
  getTests(context) {
    context.commit("setTestsLoading", true);
    axios
      .get("https://covid-19-greece.herokuapp.com//total-tests")
      .then((res) => {
        context.commit(
          "setTests",
          helper.getOverview(res.data.total_tests, "tests")
        );
        context.commit(
          "setTotalTests",
          helper.getTotal(res.data.total_tests, "tests")
        );
        context.commit("setTestsLoading", false);
      });
  },

  getDailyTests(context) {
    context.commit("setTestsLoading", true);
    context.commit("initFilters");
    axios
      .get("https://covid-19-greece.herokuapp.com//total-tests")
      .then((res) => {
        context.commit(
          "setDailyTests",
          helper.getDaily(res.data.total_tests, "tests")
        );
        context.commit(
          "setLastDayTests",
          helper.getLastDayData(res.data.total_tests, "tests")
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
