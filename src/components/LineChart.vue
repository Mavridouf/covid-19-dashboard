<template>
  <apexchart
    ref="lineChart"
    type="line"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  props: ["data", "color", "type", "filter"],
  watch: {
    data(value) {
      this.series = [{ data: value }];
    },
  },
  data() {
    return {
      series: [
        {
          name: this.type,
          data: this.data,
        },
      ],
      chartOptions: {
        chart: {
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        colors: [this.color],
        grid: {
          strokeDashArray: 5,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
          curve: "smooth",
        },
        fill: {
          colors: [this.color],
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
        xaxis: {
          type: "datetime",
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
      },
    };
  },
};
</script>
