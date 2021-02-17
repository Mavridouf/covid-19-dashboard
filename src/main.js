import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";

import Card from "./ui/Card.vue";
import CardContainer from "./ui/CardContainer.vue";
import LineChart from "./ui/LineChart.vue";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueApexCharts);

app.component("card", Card);
app.component("card-container", CardContainer);
app.component("line-chart", LineChart);

app.mount("#app");
