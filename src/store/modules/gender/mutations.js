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
  setLoading(state, payload) {
    state.gendersLoading = payload;
  },
};
