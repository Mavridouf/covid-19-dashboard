import _ from "lodash";

export default {
  getConfirmed(apiData) {
    const apexData = [];
    let prevVal = 0;
    _.forEach(apiData, (d) => {
      apexData.push({
        x: d.date,
        y: d.confirmed ? d.confirmed : prevVal,
      });
      prevVal = d.confirmed;
    });
    return apexData;
  },

  getTotalConfirmed(apiData) {
    return apiData[apiData.length - 1].confirmed;
  },

  getDeaths(apiData) {
    const apexData = [];
    let prevVal = 0;
    _.forEach(apiData, (d) => {
      apexData.push({
        x: d.date,
        y: d.deaths ? d.deaths : prevVal,
      });
      prevVal = d.deaths;
    });
    return apexData;
  },

  getTotalDeaths(apiData) {
    return apiData[apiData.length - 1].deaths;
  },

  getIcu(apiData) {
    const apexData = [];
    let prevVal = 0;
    _.forEach(apiData, (d) => {
      apexData.push({
        x: d.date,
        y: d.intensive_care ? d.intensive_care : prevVal,
      });
      prevVal = d.intensive_care;
    });
    return apexData;
  },

  getTotalIcu(apiData) {
    return apiData[apiData.length - 1].intensive_care;
  },
};
