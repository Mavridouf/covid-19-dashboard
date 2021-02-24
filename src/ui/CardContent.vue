<template>
  <div v-if="!loading">
    <div class="row">
      <div :class="[colorClass, 'title']">{{ title }}</div>
      <div class="pill-container">
        <slot name="filters"></slot>
      </div>
    </div>
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
@import "../styles/styles.scss";

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 18px;

  .title {
    font-size: 16px;
    font-weight: 500;
    margin-left: 16px;
  }
  .pill-container {
    margin-right: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
