<template>
  <main-header
    title="Total"
    :confirmed="totalConfirmed"
    :deaths="totalDeaths"
    :icu="totalIcu"
    :tests="totalTests"
  ></main-header>
  <card-container>
    <card>
      <card-content :loading="confirmedLoading" type="confirmed">
        <line-chart
          v-if="confirmed"
          :data="confirmed"
          type="Confrimed"
          color="#fac30f"
        ></line-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="deathsLoading" type="deaths">
        <line-chart
          v-if="deaths"
          type="Deaths"
          :data="deaths"
          color="#ff715b"
        ></line-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="icuLoading" type="icu">
        <line-chart
          v-if="icu"
          :data="icu"
          type="Icu"
          color="#36c9c6"
        ></line-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="testsLoading" type="tests">
        <line-chart
          v-if="tests"
          type="Tests"
          :data="tests"
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
      "confirmed",
      "confirmedLoading",
      "totalConfirmed",
    ]),
    ...mapGetters("deathModule", ["deaths", "deathsLoading", "totalDeaths"]),
    ...mapGetters("icuModule", ["icu", "icuLoading", "totalIcu"]),
    ...mapGetters("testsModule", ["tests", "testsLoading", "totalTests"]),
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
