import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import DefaultLayout from "@/components/DefaultPage";
import ShopPage from "@/views/ShopPage";
import AboutPage from "@/views/AboutPage";
import ProductPage from "@/views/ProductPage";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: DefaultLayout,
    children: [
      {
        path: "/home",
        component: HomePage,
        name: "Home",
      },
      {
        path: "/shop",
        component: ShopPage,
        name: "Shop",
      },
      {
        path: "/about",
        component: AboutPage,
        name: "About",
      },
      {
        path: "/product",
        component: ProductPage,
        name: "Product",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
