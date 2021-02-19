import axios from "axios";
import helper from "../../../shared/helper.js";

export default {
  getDeaths(context) {
    context.commit("setLoading", true);
    axios.get("https://covid-19-greece.herokuapp.com/deaths").then((res) => {
      context.commit("setDeaths", helper.getDeaths(res.data.cases));
      context.commit("setTotalDeaths", helper.getTotalDeaths(res.data.cases));
      context.commit("setLoading", false);
    });
  },

  clearDeaths(context) {
    context.commit("setDeaths", null);
    context.commit("setTotalDeaths", null);
  },
};
