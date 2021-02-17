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
        context.commit("setTestsLoading", false);
      });
  },
};
