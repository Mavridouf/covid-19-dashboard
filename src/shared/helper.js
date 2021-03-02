import moment from "moment";
import { forEach, each, keys } from "lodash/core";

export default {
  getApiKeysFromType(type) {
    switch (type) {
      case "confirmed":
        return "confirmed";
      case "deaths":
        return "deaths";
      case "icu":
        return "intensive_care";
      case "tests":
        return "tests";
      default:
        return type;
    }
  },

  getOverview(apiData, type) {
    let key = this.getApiKeysFromType(type);
    const apexData = [];
    let prevVal = 0;
    forEach(apiData, (d) => {
      apexData.push({
        x: d.date,
        y: d[key] ? d[key] : prevVal,
      });
      prevVal = d[key] ? d[key] : prevVal;
    });
    return apexData;
  },

  getTotal(apiData, type) {
    let key = this.getApiKeysFromType(type);
    return apiData[apiData.length - 1][key];
  },

  getDaily(apiData, type) {
    let key = this.getApiKeysFromType(type);
    const apexData = [];
    let prevVal = 0;
    let curVal = 0;
    forEach(apiData, (d, index) => {
      curVal = d[key] ? d[key] : curVal;
      let daily = index === 0 ? curVal : curVal - prevVal;
      apexData.push({
        x: d.date,
        y: daily > 0 ? daily : 0,
      });
      prevVal = d[key] ? d[key] : prevVal;
    });
    return apexData;
  },

  getLastDayData(apiData, type) {
    let key = this.getApiKeysFromType(type);
    return apiData[apiData.length - 1][key] - apiData[apiData.length - 2][key];
  },

  getLastDay(apiData) {
    return moment(apiData[apiData.length - 1].date).format("DD MMM YYYY");
  },

  getIcu(apiData) {
    const apexData = [];
    let total = 0;
    forEach(apiData, (d) => {
      total += d.intensive_care;
      apexData.push({
        x: d.date,
        y: total,
      });
    });
    return apexData;
  },

  getTotalIcu(apiData) {
    let total = 0;
    forEach(apiData, (d) => {
      total += d.intensive_care;
    });
    return total;
  },

  getGenderData(apiData) {
    const apexData = {};
    each(apiData, (value, key) => {
      apexData[key] = [];
      forEach(value, (type) => {
        apexData[key].push(type);
      });
    });
    return apexData;
  },

  getTotalGenderData(apiData) {
    const totalData = {};
    forEach(apiData, (gender) => {
      forEach(gender, (type, key) => {
        forEach(type, (ageGroup) => {
          if (!totalData[key]) totalData[key] = 0;
          totalData[key] += +ageGroup;
        });
      });
    });
    return totalData;
  },

  getAgeGroups(apiData) {
    let apexData = [];
    apexData = keys(apiData.males.cases);
    return apexData;
  },

  getlastWeek(lastDay) {
    return moment(lastDay)
      .subtract(7, "days")
      .hours(0);
  },

  getlastMonth(lastDay) {
    return moment(lastDay)
      .subtract(30, "days")
      .hours(0);
  },
};
