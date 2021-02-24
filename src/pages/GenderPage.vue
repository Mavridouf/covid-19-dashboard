<template>
  <gender-header
    title="Gender Data"
    :cases="totalGenderData?.cases"
    :deaths="totalGenderData?.deaths"
    :icu="totalGenderData?.critical"
    :loading="gendersLoading"
  ></gender-header>
  <card-container>
    <card>
      <card-content :loading="gendersLoading" type="cases">
        <bar-chart
          v-if="male && female"
          :data="{
            male: male?.cases,
            female: female?.cases,
            ageGroups: ageGroups,
          }"
        ></bar-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="gendersLoading" type="deaths">
        <bar-chart
          v-if="male && female"
          :data="{
            male: male?.deaths,
            female: female?.deaths,
            ageGroups: ageGroups,
          }"
        ></bar-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="distributionLoading" type="icu">
        <bar-chart
          v-if="male && female"
          :data="{
            male: male?.critical,
            female: female?.critical,
            ageGroups: ageGroups,
          }"
        ></bar-chart>
      </card-content>
    </card>
    <card>
      <card-content :loading="gendersLoading" type="Cases Gender Distribution">
        <donut-chart
          v-if="genderDistribution"
          :data="genderDistribution"
        ></donut-chart>
      </card-content>
    </card>
  </card-container>
</template>

<script>
import GenderHeader from "../components/GenderHeader";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    GenderHeader,
  },
  methods: {
    ...mapActions("genderModule", [
      "getGenderData",
      "getGenderDestributionData",
      "clearGenderData",
    ]),
  },
  computed: {
    ...mapGetters("genderModule", [
      "male",
      "female",
      "ageGroups",
      "totalGenderData",
      "gendersLoading",
      "genderDistribution",
      "distributionLoading",
    ]),
  },
  mounted() {
    this.getGenderData();
    this.getGenderDestributionData();
  },
  unmounted() {
    this.clearGenderData();
  },
};
</script>
