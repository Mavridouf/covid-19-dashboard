<template>
  <main-header
    title="Total"
    :confirmed="totalConfirmed"
    :deaths="totalDeaths"
    :icu="totalIcu"
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
    <card>
      <total-icu></total-icu>
    </card>
  </card-container>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import TotalConfirmed from "../components/TotalConfirmed";
import TotalDeaths from "../components/TotalDeaths";
import TotalIcu from "../components/TotalIcu";

import { mapGetters } from "vuex";

export default {
  components: {
    MainHeader,
    TotalConfirmed,
    TotalDeaths,
    TotalIcu,
  },
  computed: {
    ...mapGetters("confirmedModule", ["totalConfirmed"]),
    ...mapGetters("deathModule", ["totalDeaths"]),
    ...mapGetters("icuModule", ["totalIcu"]),
  },
};
</script>
