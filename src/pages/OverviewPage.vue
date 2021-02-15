<template>
  <main-header
    title="Total"
    confirmed="1500"
    deaths="150"
    icu="25"
    recovered="250"
    tests="10000"
    vaccines="4549"
  ></main-header>
  <card-container>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
  </card-container>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
import Card from "../ui/Card.vue";

export default {
  components: {
    MainHeader,
    Card,
  },
};
</script>
