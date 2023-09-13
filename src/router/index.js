import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/footer",
      name: "footer",
      component: () => import("../components/footerss.vue"),
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () => import("../components/TimeLine.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../components/Gallery.vue"),
    },
  ],
});

export default router;
