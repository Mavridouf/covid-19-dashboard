import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";

import CardContainer from "./ui/CardContainer.vue";
import Card from "./ui/Card.vue";
import CardContent from "./ui/CardContent.vue";

import LineChart from "./ui/LineChart.vue";
import BarChart from "./ui/BarChart.vue";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueApexCharts);

app.component("card-container", CardContainer);
app.component("card", Card);
app.component("card-content", CardContent);
app.component("line-chart", LineChart);
app.component("bar-chart", BarChart);

app.mount("#app");
