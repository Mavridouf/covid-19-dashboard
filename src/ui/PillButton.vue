<template>
  <div :class="[colorClass, 'pill', activeClass]" @click="pillClicked">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: ["filterType", "type", "isActive"],
  computed: {
    title() {
      switch (this.filterType) {
        case "week":
          return "7D";
        case "month":
          return "1M";
        case "all":
          return "ALL";
        default:
          return this.filterType;
      }
    },
    activeClass() {
      return this.isActive ? "isActive" : "";
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
  methods: {
    pillClicked() {
      this.$emit("pill-clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";

.pill {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 42px;
  height: 24px;
  border-radius: 14px;
  background: #bdbdbd;
  font-size: 11px;
  font-weight: 700;
  color: $creme;
  margin-left: 16px;
  transition: all 0.3s;

  &.yellow {
    &.isActive {
      background: $yellow;
    }
  }

  &.red {
    &.isActive {
      background: $red;
    }
  }

  &.mint {
    &.isActive {
      background: $mint;
    }
  }

  &.purple {
    &.isActive {
      background: $purple;
    }
  }
}

.pill:hover {
  background: #828282;
}

@media screen and (max-width: 426px) {
  .pill {
    width: 32px;
    height: 20px;
    font-size: 8px;
  }
}
</style>
