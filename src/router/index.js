import { createRouter, createWebHistory } from "vue-router";
import Hero from "../views/Hero.vue";

const routes = [
  {
    path: "/",
    name: "Hero",
    component: Hero,
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () =>
      import(/* webpackChunkName: "calculator" */ "@/views/Calculator.vue"),
  },
  {
    path: "/objector",
    name: "Object Dector",
    component: () =>
      import(
        /* webpackChunkName: "object dector" */ "@/views/ObjectDector.vue"
      ),
  },
  {
    path: "/check_weather",
    name: "Check Weather",
    component: () =>
      import(/* webpackChunkName: "check weather" */ "@/views/Weather.vue"),
  },
  {
    path: "/live_stream_video",
    name: "Live Stream",
    component: () =>
      import(
        /* webpackChunkName: "check weather" */ "@/views/LiveStreamVideo.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
