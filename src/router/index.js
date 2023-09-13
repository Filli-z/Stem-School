import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomeView.vue";
import footerss from "../components/footerss.vue";
import TimeLine from "../components/TimeLine.vue";
import Gallery from "../components/Gallery.vue";

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
      component: footerss,
    },
    {
      path: "/timeline",
      name: "timeline",
      component: TimeLine,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery,
    },
  ],
});

export default router;
