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
      context.commit("setLoading", false);
    });
  },
};
