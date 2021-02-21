<template>
  <main-header
    :title="lastDay"
    :confirmed="lastDayConfirmed"
    :deaths="lastDayDeaths"
    :icu="lastDayIcu"
    :tests="lastDayTests"
  ></main-header>
  <card-container>
    <card>
      <card-content :loading="confirmedLoading" type="confirmed">
        <line-chart
          v-if="dailyConfirmed"
          :data="dailyConfirmed"
          type="Confirmed"
          color="#fac30f"
        ></line-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="deathsLoading" type="deaths">
        <line-chart
          v-if="dailyDeaths"
          :data="dailyDeaths"
          type="Deaths"
          color="#ff715b"
        ></line-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="icuLoading" type="icu">
        <line-chart
          v-if="dailyIcu"
          :data="dailyIcu"
          type="Icu"
          color="#36c9c6"
        ></line-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="testsLoading" type="tests">
        <line-chart
          v-if="dailyTests"
          :data="dailyTests"
          type="Tests"
          color="#a084ff"
        ></line-chart>
      </card-content>
    </card>
  </card-container>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    MainHeader,
  },
  methods: {
    ...mapActions("confirmedModule", ["getConfirmed", "clearConfirmed"]),
    ...mapActions("deathModule", ["getDeaths", "clearDeaths"]),
    ...mapActions("icuModule", ["getIcu", "clearIcu"]),
    ...mapActions("testsModule", ["getTests", "clearTests"]),
  },
  computed: {
    ...mapGetters("confirmedModule", [
      "dailyConfirmed",
      "lastDayConfirmed",
      "confirmedLoading",
      "lastDay",
    ]),
    ...mapGetters("deathModule", [
      "dailyDeaths",
      "lastDayDeaths",
      "deathsLoading",
    ]),
    ...mapGetters("icuModule", ["dailyIcu", "lastDayIcu", "icuLoading"]),
    ...mapGetters("testsModule", [
      "dailyTests",
      "lastDayTests",
      "testsLoading",
    ]),
  },
  mounted() {
    this.getConfirmed();
    this.getDeaths();
    this.getIcu();
    this.getTests();
  },
  unmounted() {
    this.clearConfirmed();
    this.clearDeaths();
    this.clearIcu();
    this.clearTests();
  },
};
</script>
