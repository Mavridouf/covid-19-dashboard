<template>
  <div v-if="!loading">
    <div :class="[colorClass, 'title']">{{ title }}</div>
    <div class="chart">
      <slot></slot>
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
export default {
  props: ["loading", "type"],
  computed: {
    title() {
      let title = this.type;
      title = title ? title[0].toUpperCase() + title.slice(1) : title;
      return title;
    },
    colorClass() {
      switch (this.type) {
        case "deaths":
          return "red";
        case "icu":
          return "mint";
        case "tests":
          return "purple";
        default:
          return "yellow";
      }
    },
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
