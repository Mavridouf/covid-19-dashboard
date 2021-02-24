export default {
  setMale(state, payload) {
    state.male = payload;
  },
  setFemale(state, payload) {
    state.female = payload;
  },
  setAgeGroups(state, payload) {
    state.ageGroups = payload;
  },
  setTotalGenderData(state, payload) {
    state.totalGenderData = payload;
  },
  setLoading(state, payload) {
    state.gendersLoading = payload;
  },
  setDistribution(state, payload) {
    state.distribution = payload;
  },
  setDistributionLoading(state, payload) {
    state.distributionLoading = payload;
  },
};
