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
        context.commit("setIcuLoading", false);
      });
  },
};
