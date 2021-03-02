<template>
  <div class="donutContainer">
    <apexchart
      type="donut"
      width="82%"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      series: [this.data?.male, this.data?.female],
      chartOptions: {
        chart: {
          type: "donut",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        labels: ["male", "female"],
        colors: ["#03A9F4", "#f46197"],
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return val + "%";
          },
          style: {
            fontFamily: "Roboto",
            fontWeight: "bold",
          },
          dropShadow: {
            enabled: false,
          },
          background: {
            enabled: true,
            foreColor: "#888",
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#fff",
            opacity: 1,
            dropShadow: {
              enabled: true,
              top: 1,
              left: 1,
              blur: 1,
              color: "#000",
              opacity: 0.4,
            },
          },
        },
        legend: {
          labels: {
            colors: "#828282",
          },
          fontFamily: "Roboto",
          fontWeight: 500,
          position: "bottom",
          horizontalAlign: "center",
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
.donutContainer {
  .vue-apexcharts {
    .apexcharts-canvas {
      margin: auto;
    }
  }
}
</style>
