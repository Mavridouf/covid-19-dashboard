<template>
  <div v-if="!testsLoading">
    <div class="purple title">Tests</div>
    <div class="chart">
      <line-chart :data="tests" color="#A084FF"></line-chart>
    </div>
  </div>
  <div v-if="testsLoading" class="skelContainer">
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
    ...mapActions("testsModule", ["getTests"]),
  },
  computed: {
    ...mapGetters("testsModule", ["tests", "testsLoading"]),
  },
  mounted() {
    this.getTests();
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
