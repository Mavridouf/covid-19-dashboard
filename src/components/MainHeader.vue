<template>
  <div class="container">
    <div class="titleContainer">
      <h6 v-if="title !== 'Total'" class="subTitle">Last Updated</h6>
      <h1 class="title">{{ title }}</h1>
    </div>
    <div
      v-if="confirmedLoading || deathsLoading || icuLoading || testsLoading"
      class="results flex-col"
    >
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
    <div
      v-if="!confirmedLoading && !deathsLoading && !icuLoading && !testsLoading"
      class="results"
    >
      <div class="col">
        <div class="row">
          <span>Confirmed</span>
          <span class="yellow">{{ confirmed }}</span>
        </div>
        <div class="row">
          <span>Deaths</span>
          <span class="red">{{ deaths }}</span>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <span>ICU</span>
          <span class="mint">{{ icu }}</span>
        </div>
        <div class="row">
          <span>Tests</span>
          <span class="purple">{{ tests }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: ["title", "confirmed", "deaths", "icu", "tests"],
  computed: {
    ...mapGetters("confirmedModule", ["confirmedLoading"]),
    ...mapGetters("deathModule", ["deathsLoading"]),
    ...mapGetters("icuModule", ["icuLoading"]),
    ...mapGetters("testsModule", ["testsLoading"]),
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
  .titleContainer {
    display: flex;
    flex-direction: column;
    .subTitle {
      margin: 0;
      font-weight: 700;
      letter-spacing: 0.2em;
      font-size: 16px;
      font-family: "Ubuntu";
    }
    .title {
      margin: 0;
      font-family: "Ubuntu";
      font-size: 48px;
      font-weight: 700;
      letter-spacing: 0.2em;
    }
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
    .col {
      width: 150px;
      display: flex;
      flex-direction: column;
      padding: 0px 10px;
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

@media screen and (max-width: 768px) {
  .container {
    .results {
      flex: 1;
      padding: 15px 16px;
      margin-left: 14px;
      .col {
        width: 100%;
        padding: 0px 8px;
      }
    }
  }
}

@media screen and (max-width: 426px) {
  .container {
    justify-content: space-between;
    margin-top: 18px;
    .titleContainer {
      display: flex;
      flex-direction: column;
      .subTitle {
        font-size: 12px;
      }
      .title {
        width: 80px;
        font-size: 18px;
        margin-bottom: 12px;
      }
    }
    .container {
      .results {
        .col {
          .row {
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
