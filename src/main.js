import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Card from "./ui/Card.vue";
import CardContainer from "./ui/CardContainer.vue";

const app = createApp(App)
  .use(store)
  .use(router);

app.component("card", Card);
app.component("card-container", CardContainer);

app.mount("#app");
