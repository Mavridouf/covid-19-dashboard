<template>
  <main-header
    title="Total"
    :confirmed="totalConfirmed"
    :deaths="totalDeaths"
    icu="25"
    recovered="250"
    tests="10000"
    vaccines="4549"
  ></main-header>
  <card-container>
    <card>
      <total-confirmed></total-confirmed>
    </card>
    <card>
      <total-deaths></total-deaths>
    </card>
  </card-container>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import TotalConfirmed from "../components/TotalConfirmed";
import TotalDeaths from "../components/TotalDeaths";

import { mapGetters } from "vuex";

export default {
  components: {
    MainHeader,
    TotalConfirmed,
    TotalDeaths,
  },
  computed: {
    ...mapGetters("confirmedModule", ["totalConfirmed"]),
    ...mapGetters("deathModule", ["totalDeaths"]),
  },
};
</script>
