export default {
  setConfirmed(state, payload) {
    state.confirmed = payload;
  },
  setDailyConfirmed(state, payload) {
    state.dailyConfirmed = payload;
  },
  setLastDayConfirmed(state, payload) {
    state.lastDayConfirmed = payload;
  },
  setTotalConfirmed(state, payload) {
    state.totalConfirmed = payload;
  },
  setLoading(state, payload) {
    state.confirmedLoading = payload;
  },
  setLastDay(state, payload) {
    state.lastDay = payload;
  },
};
