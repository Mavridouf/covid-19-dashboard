import _ from "lodash";

export default {
  getConfirmed(apiData) {
    const apexData = [];
    _.forEach(apiData, (d) => {
      apexData.push({
        x: d.date,
        y: d.confirmed,
      });
    });
    return apexData;
  },

  getTotalConfirmed(apiData) {
    return apiData[apiData.length - 1].confirmed;
  },

  getDeaths(apiData) {
    const apexData = [];
    _.forEach(apiData, (d) => {
      apexData.push({
        x: d.date,
        y: d.deaths,
      });
    });
    return apexData;
  },

  getTotalDeaths(apiData) {
    return apiData[apiData.length - 1].deaths;
  },
};
