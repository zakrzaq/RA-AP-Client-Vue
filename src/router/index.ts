import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/log",
      name: "LogPage",
      component: () => import("@/pages/LogPage.vue"),
    },
    {
      path: "/history",
      name: "HistoryPage",
      component: () => import("@/pages/HistoryPage.vue"),
    },
  ],
});

export default router;
