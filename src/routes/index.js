import { createWebHistory, createRouter } from "vue-router";

import HomeVue from "@/pages/Home.vue";
import AboutVue from "@/pages/About.vue";
import ContactVue from "@/pages/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue
  },
  {
    path: "/about",
    name: "About",
    component: AboutVue
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router