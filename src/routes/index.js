import { createWebHistory, createRouter } from "vue-router";

import HomeVue from "@/pages/Home.vue";
import AboutVue from "@/pages/About.vue";
import ContactVue from "@/pages/Contact.vue";
import PostsVue from "@/pages/Posts.vue";
import PostVue from "@/pages/Post.vue";

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
  },
  {
    path: "/posts",
    name: "Posts",
    component: PostsVue
  },
  {
    path: "/post/:id",
    name: "Post",
    component: PostVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router