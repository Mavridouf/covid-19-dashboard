import axios from "axios";
import helper from "../../../shared/helper.js";

export default {
  getGenderData(context) {
    context.commit("setLoading", true);
    axios
      .get("https://covid-19-greece.herokuapp.com/gender-age-distribution")
      .then((res) => {
        context.commit(
          "setMale",
          helper.getGenderData(res.data.total_age_gender_distribution.males)
        );
        context.commit(
          "setFemale",
          helper.getGenderData(res.data.total_age_gender_distribution.females)
        );
        context.commit(
          "setAgeGroups",
          helper.getAgeGroups(res.data.total_age_gender_distribution)
        );
        context.commit(
          "setTotalGenderData",
          helper.getTotalGenderData(res.data.total_age_gender_distribution)
        );
        context.commit("setLoading", false);
      });
  },

  clearGenderData(context) {
    context.commit("setMale", null);
    context.commit("setFemale", null);
    context.commit("setAgeGroups", []);
  },
};
