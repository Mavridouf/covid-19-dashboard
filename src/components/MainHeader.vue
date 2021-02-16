<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div v-if="confirmedLoading || deathsLoading" class="results flex-col">
      <div>
        <div
          class="skeleton-box"
          style="width:140px; margin-right: 20px;"
        ></div>
        <div
          class="skeleton-box"
          style="width:60px;  margin-right: 20px;"
        ></div>
        <div class="skeleton-box" style="width:100px;"></div>
      </div>
      <div>
        <div
          class="skeleton-box"
          style="width:200px; margin-right: 20px;"
        ></div>
        <div class="skeleton-box" style="width:100px;"></div>
      </div>
    </div>
    <div v-if="!confirmedLoading && !deathsLoading" class="results">
      <div class="col">
        <div class="row">
          <span>Confirmed</span>
          <span class="yellow">{{ confirmed }}</span>
        </div>
        <!-- <div class="row">
          <span>Recovered</span>
          <span class="green">{{ recovered }}</span>
        </div> -->
      </div>
      <div class="col">
        <div class="row">
          <span>Deaths</span>
          <span class="red">{{ deaths }}</span>
        </div>
        <!-- <div class="row">
          <span>Tests</span>
          <span class="blue">{{ tests }}</span>
        </div> -->
      </div>
      <!-- <div class="col">
        <div class="row">
          <span>ICU</span>
          <span class="pink">{{ icu }}</span>
        </div>
        <div class="row">
          <span>Vaccines</span>
          <span class="mint">{{ vaccines }}</span>
        </div>
      </div>  -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: [
    "title",
    "confirmed",
    "deaths",
    "icu",
    "recovered",
    "tests",
    "vaccines",
  ],
  computed: {
    ...mapGetters("confirmedModule", ["confirmedLoading"]),
    ...mapGetters("deathModule", ["deathsLoading"]),
  },
};
</script>

<style scoped lang="scss">
@import "../styles/styles.scss";

.container {
  margin-top: 40px;
  display: flex;
  align-items: center;
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .title {
    margin: 0;
    font-family: "Ubuntu";
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0.2em;
  }
  .results {
    background: #ffffff;
    box-shadow: 0px 6px 12px rgb(0 0 0 / 12%);
    border-radius: 12px;
    padding: 15px 24px;
    margin-left: 24px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    padding-left: 40px;
    .col {
      width: 150px;
      display: flex;
      flex-direction: column;
      padding-right: 42px;
      .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 5px;
        padding-bottom: 5px;
        span {
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
