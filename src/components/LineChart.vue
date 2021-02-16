<template>
  <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  props: ["data", "color"],
  data() {
    return {
      series: [
        {
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
        grid: {
          strokeDashArray: 5,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          colors: [this.color],
          width: 2,
          curve: "smooth",
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
