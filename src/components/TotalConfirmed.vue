<template>
  <div v-if="!loading">
    <div class="yellow title">Confirmed</div>
    <div class="chart">
      <line-chart :data="confirmed"></line-chart>
    </div>
  </div>
  <div v-if="loading" class="skelContainer">
    <div class="skeleton-box" style="width:55%;"></div>
    <div
      class="skeleton-box"
      style="width:100%; margin-top:40px; height:220px;"
    ></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LineChart from "./LineChart.vue";

export default {
  components: { LineChart },
  methods: {
    ...mapActions({
      getData: "getConfirmed",
    }),
  },
  computed: {
    ...mapGetters({
      confirmed: "confirmed",
      loading: "loading",
    }),
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: 500;
  margin-left: 16px;
  padding-bottom: 4px;
}

.chart {
  width: 100%;
  height: 100%;
}

.skelContainer {
  display: flex;
  flex-direction: column;
}
</style>
