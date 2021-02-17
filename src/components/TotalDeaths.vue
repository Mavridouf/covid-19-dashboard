<template>
  <div v-if="!deathsLoading">
    <div class="red title">Deaths</div>
    <div class="chart">
      <line-chart :data="deaths" color="#ff715b"></line-chart>
    </div>
  </div>
  <div v-if="deathsLoading" class="skelContainer">
    <div class="skeleton-box" style="width:55%;"></div>
    <div
      class="skeleton-box"
      style="width:100%; margin-top:40px; height:220px;"
    ></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("deathModule", ["getDeaths"]),
  },
  computed: {
    ...mapGetters("deathModule", ["deaths", "deathsLoading"]),
  },
  mounted() {
    this.getDeaths();
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
