<template>
  <div v-if="!icuLoading">
    <div class="mint title">ICU</div>
    <div class="chart">
      <line-chart :data="icu" color="#36C9C6"></line-chart>
    </div>
  </div>
  <div v-if="icuLoading" class="skelContainer">
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
    ...mapActions("icuModule", ["getIcu"]),
  },
  computed: {
    ...mapGetters("icuModule", ["icu", "icuLoading"]),
  },
  mounted() {
    this.getIcu();
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
