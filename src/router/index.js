import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/daily" },
  {
    path: "/daily",
    name: "DailyPage",
    component: () =>
      import(/* webpackChunkName: "daily" */ "../pages/DailyPage.vue"),
  },
  {
    path: "/overview",
    name: "OverviewPage",
    component: () =>
      import(/* webpackChunkName: "overview" */ "../pages/OverviewPage.vue"),
  },
  {
    path: "/gender",
    name: "GenderPage",
    component: () =>
      import(/* webpackChunkName: "gender" */ "../pages/GenderPage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AboutPage.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../pages/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
