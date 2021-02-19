<template>
  <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  props: ["data", "color"],
  data() {
    return {
      series: [
        {
          name: "male",
          data: this.data?.male,
        },
        {
          name: "female",
          data: this.data?.female,
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: ["#03A9F4", "#f46197"],
        grid: {
          strokeDashArray: 5,
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: this.data?.ageGroups,
          labels: {
            style: {
              colors: "#828282",
              fontSize: "12px",
              fontFamily: "Roboto",
              fontWeight: 500,
            },
          },
          axisTicks: false,
          axisBorder: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#828282",
              fontSize: "12px",
              fontFamily: "Roboto",
              fontWeight: 500,
            },
          },
        },
        plotOptions: {
          bar: {
            distributed: false,
            horizontal: false,
            columnWidth: "16px",
            endingShape: "rounded",
          },
        },
        legend: {
          markers: {
            radius: 50,
          },
          onItemClick: {
            toggleDataSeries: false,
          },
        },
      },
    };
  },
};
</script>
<style lang="scss">
.apexcharts-legend {
  .apexcharts-legend-series {
    margin-top: 20px !important;
    cursor: pointer !important;
  }
}
</style>
