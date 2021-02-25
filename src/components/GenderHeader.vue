<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div v-if="loading" class="results flex-col">
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
    </div>
    <div v-if="!loading" class="results">
      <div class="row">
        <div class="col">
          <span>Cases</span>
          <span class="yellow">{{ cases }}</span>
        </div>
        <div class="col">
          <span>Deaths</span>
          <span class="red">{{ deaths }}</span>
        </div>
        <div class="col">
          <span>ICU</span>
          <span class="mint">{{ icu }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "cases", "deaths", "icu", "loading"],
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
    .row {
      display: flex;
      flex-wrap: wrap;
      .col {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 130px;
        padding: 0px 10px;
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

@media screen and (max-width: 426px) {
  .container {
    justify-content: space-between;
    margin-top: 18px;
    .title {
      width: 80px;
      font-size: 18px;
      margin-bottom: 12px;
    }
    .results {
      flex: 1;
      margin-left: 14px;
      padding: 15px 16px;
      .row {
        .col {
          width: 100%;
          padding: 5px 0px;
          padding: auto;
          span {
            font-size: 12px;
            padding: 0px 8px;
          }
        }
      }
    }
  }
}
</style>
