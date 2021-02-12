import { createRouter, createWebHashHistory } from "vue-router";

import Daily from "../pages/DailyPage.vue";
import Overview from "../pages/OverviewPage.vue";
import Gender from "../pages/GenderPage.vue";
import About from "../pages/AboutPage.vue";
import NotFound from "../pages/NotFoundPage.vue";

const routes = [
  { path: "/", redirect: "/daily" },
  {
    path: "/daily",
    name: "DailyPage",
    component: Daily,
  },
  {
    path: "/overview",
    name: "OverviewPage",
    component: Overview,
  },
  {
    path: "/gender",
    name: "GenderPage",
    component: Gender,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
