import _ from "lodash";
import moment from "moment";

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

  getDailyConfirmed(apiData) {
    const apexData = [];
    _.forEach(apiData, (d, index) => {
      let daily =
        index === 0 ? d.confirmed : d.confirmed - apiData[index - 1].confirmed;
      apexData.push({
        x: d.date,
        y: daily,
      });
    });
    return apexData;
  },

  getLastDayConfirmed(apiData) {
    return (
      apiData[apiData.length - 1].confirmed -
      apiData[apiData.length - 2].confirmed
    );
  },

  getTotalConfirmed(apiData) {
    return apiData[apiData.length - 1].confirmed;
  },

  getLastDay(apiData) {
    return moment(apiData[apiData.length - 1].date).format("DD MMM YYYY");
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

  getDailyDeaths(apiData) {
    const apexData = [];
    _.forEach(apiData, (d, index) => {
      let daily = index === 0 ? d.deaths : d.deaths - apiData[index - 1].deaths;
      apexData.push({
        x: d.date,
        y: daily,
      });
    });
    return apexData;
  },

  getLastDayDeaths(apiData) {
    return (
      apiData[apiData.length - 1].deaths - apiData[apiData.length - 2].deaths
    );
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

  getDailyIcu(apiData) {
    const apexData = [];
    let prevVal = 0;
    let curVal = 0;
    _.forEach(apiData, (d, index) => {
      curVal = d.intensive_care ? d.intensive_care : curVal;
      let daily = index === 0 ? curVal : curVal - prevVal;
      apexData.push({
        x: d.date,
        y: daily,
      });
      prevVal = d.intensive_care ? d.intensive_care : prevVal;
    });
    return apexData;
  },

  getLastDayIcu(apiData) {
    return (
      apiData[apiData.length - 1].intensive_care -
      apiData[apiData.length - 2].intensive_care
    );
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

  getDailyTests(apiData) {
    const apexData = [];
    let prevVal = 0;
    let curVal = 0;
    _.forEach(apiData, (d, index) => {
      curVal = d.tests ? d.tests : curVal;
      let daily = index === 0 ? curVal : curVal - prevVal;
      apexData.push({
        x: d.date,
        y: daily,
      });
      prevVal = d.tests ? d.tests : prevVal;
    });
    return apexData;
  },

  getLastDayTests(apiData) {
    return (
      apiData[apiData.length - 1].tests - apiData[apiData.length - 2].tests
    );
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
