import { createRouter, createWebHistory } from "vue-router";
import Hero from "../views/Hero.vue";

const routes = [
  {
    path: "/",
    name: "Hero",
    component: Hero,
    meta: {
      title: "To Do List",
    },
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () =>
      import(/* webpackChunkName: "calculator" */ "@/views/Calculator.vue"),
    meta: {
      title: "Calculator",
    },
  },
  {
    path: "/objector",
    name: "Object Dector",
    component: () =>
      import(
        /* webpackChunkName: "object dector" */ "@/views/ObjectDector.vue"
      ),
    meta: {
      title: "Object Dector",
    },
  },
  {
    path: "/check_weather",
    name: "Check Weather",
    component: () =>
      import(/* webpackChunkName: "check weather" */ "@/views/Weather.vue"),
    meta: {
      title: "Check Weather",
    },
  },
  {
    path: "/live_stream_video",
    name: "Live Stream",
    component: () =>
      import(
        /* webpackChunkName: "check weather" */ "@/views/LiveStreamVideo.vue"
      ),
    meta: {
      title: "Live Stream",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
