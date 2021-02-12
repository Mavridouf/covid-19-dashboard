<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="results">
      <div class="col">
        <div class="row">
          <span>Confirmed</span>
          <span class="yellow">{{ confirmed }}</span>
        </div>
        <div class="row">
          <span>Recovered</span>
          <span class="green">{{ recovered }}</span>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <span>Deaths</span>
          <span class="red">{{ deaths }}</span>
        </div>
        <div class="row">
          <span>Tests</span>
          <span class="blue">{{ tests }}</span>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <span>ICU</span>
          <span class="pink">{{ icu }}</span>
        </div>
        <div class="row">
          <span>Vaccines</span>
          <span class="mint">{{ vaccines }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
};
</script>
<style scoped lang="scss">
@import "../styles/styles.scss";

.container {
  margin-top: 56px;
  display: flex;
  align-items: center;
  .title {
    margin: 0;
    font-family: "Ubuntu";
    font-size: 54px;
    font-weight: 700;
    letter-spacing: 0.2em;
  }
  .results {
    flex: 1;
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
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
