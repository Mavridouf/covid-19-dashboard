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
      prevVal = d.confirmed ? d.confirmed : prevVal;
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
      prevVal = d.deaths ? d.deaths : prevVal;
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
      prevVal = d.intensive_care ? d.intensive_care : prevVal;
    });
    return apexData;
  },

  getTotalIcu(apiData) {
    return apiData[apiData.length - 1].intensive_care;
  },

  getTests(apiData) {
    const apexData = [];
    let prevVal = 0;
    _.forEach(apiData, (d) => {
      apexData.push({
        x: d.date,
        y: d.tests ? d.tests : prevVal,
      });
      prevVal = d.tests ? d.tests : prevVal;
    });
    return apexData;
  },

  getTotalTests(apiData) {
    return apiData[apiData.length - 1].tests;
  },

  getGenderData(apiData) {
    const apexData = {};
    _.each(apiData, (value, key) => {
      apexData[key] = [];
      _.forEach(value, (type) => {
        apexData[key].push(type);
      });
    });
    return apexData;
  },

  getTotalGenderData(apiData) {
    const totalData = {};
    _.forEach(apiData, (gender) => {
      _.forEach(gender, (type, key) => {
        _.forEach(type, (ageGroup) => {
          if (!totalData[key]) totalData[key] = 0;
          totalData[key] += +ageGroup;
        });
      });
    });
    return totalData;
  },

  getAgeGroups(apiData) {
    let apexData = [];
    apexData = _.keys(apiData.males.cases);
    return apexData;
  },
};
