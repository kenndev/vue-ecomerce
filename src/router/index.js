import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
];

const router = createRouter({
    history: createWebHistory(),
    mode: history,
    routes,
})

export default router
