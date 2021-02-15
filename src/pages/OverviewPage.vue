<template>
  <main-header
    title="Total"
    :confirmed="totalConfirmed"
    deaths="150"
    icu="25"
    recovered="250"
    tests="10000"
    vaccines="4549"
  ></main-header>
  <card-container>
    <card>
      <total-confirmed></total-confirmed>
    </card>
    <!-- <card>
      <total-confirmed></total-confirmed>
    </card> -->
  </card-container>
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import Card from "../ui/Card.vue";
import TotalConfirmed from "../components/TotalConfirmed";
import { mapGetters } from "vuex";

export default {
  components: {
    MainHeader,
    Card,
    TotalConfirmed,
  },
  computed: {
    ...mapGetters({
      totalConfirmed: "totalConfirmed",
    }),
  },
};
</script>
