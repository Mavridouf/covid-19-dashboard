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
        <template #filters>
          <pill-btn
            v-for="filter in confirmedFilters"
            :key="filter.name"
            :filterType="filter.name"
            type="confirmed"
            :isActive="filter.isActive"
            @pill-clicked="updateConfirmFilters(filter.name)"
          ></pill-btn>
        </template>
        <line-chart
          v-if="filteredDailyConfirmed"
          :data="filteredDailyConfirmed"
          type="Confirmed"
          color="#fac30f"
          :filter="activeConfirmedFilter"
        ></line-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="deathsLoading" type="deaths">
        <template #filters>
          <pill-btn
            v-for="filter in deathsFilters"
            :key="filter.name"
            :filterType="filter.name"
            type="deaths"
            :isActive="filter.isActive"
            @pill-clicked="updateDeathFilters(filter.name)"
          ></pill-btn>
        </template>
        <line-chart
          v-if="filteredDailyDeaths"
          :data="filteredDailyDeaths"
          type="Deaths"
          color="#ff715b"
        ></line-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="icuLoading" type="icu">
        <template #filters>
          <pill-btn
            v-for="filter in icuFilters"
            :key="filter.name"
            :filterType="filter.name"
            type="icu"
            :isActive="filter.isActive"
            @pill-clicked="updateIcuFilters(filter.name)"
          ></pill-btn>
        </template>
        <line-chart
          v-if="filteredDailyIcu"
          :data="filteredDailyIcu"
          type="Icu"
          color="#36c9c6"
        ></line-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="testsLoading" type="tests">
        <template #filters>
          <pill-btn
            v-for="filter in testsFilters"
            :key="filter.name"
            :filterType="filter.name"
            type="tests"
            :isActive="filter.isActive"
            @pill-clicked="updateTestsFilters(filter.name)"
          ></pill-btn>
        </template>
        <line-chart
          v-if="filteredDailyTests"
          :data="filteredDailyTests"
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
    ...mapActions("confirmedModule", [
      "getConfirmed",
      "clearConfirmed",
      "updateConfirmFilters",
    ]),
    ...mapActions("deathModule", [
      "getDeaths",
      "clearDeaths",
      "updateDeathFilters",
    ]),
    ...mapActions("icuModule", ["getIcu", "clearIcu", "updateIcuFilters"]),
    ...mapActions("testsModule", [
      "getTests",
      "clearTests",
      "updateTestsFilters",
    ]),
    pillClick(type, filterType) {
      console.log(type, filterType);
    },
  },
  computed: {
    ...mapGetters("confirmedModule", [
      "filteredDailyConfirmed",
      "lastDayConfirmed",
      "confirmedLoading",
      "lastDay",
      "confirmedFilters",
      "activeConfirmedFilter",
    ]),
    ...mapGetters("deathModule", [
      "filteredDailyDeaths",
      "lastDayDeaths",
      "deathsLoading",
      "deathsFilters",
      "activeDeathsFilter",
    ]),
    ...mapGetters("icuModule", [
      "filteredDailyIcu",
      "lastDayIcu",
      "icuLoading",
      "icuFilters",
      "activeIcuFilter",
    ]),
    ...mapGetters("testsModule", [
      "filteredDailyTests",
      "lastDayTests",
      "testsLoading",
      "testsFilters",
      "activeTestsFilter",
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
<style lang="scss" scoped>
.testList {
  padding: 5px;
  border: 1px solid #333;
  margin: 5px;
}
</style>
