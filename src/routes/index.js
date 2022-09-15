import { createWebHistory, createRouter } from "vue-router";

import HomeVue from "@/pages/Home.vue";
import AboutVue from "@/pages/About.vue";
import ContactVue from "@/pages/Contact.vue";
import PostsVue from "@/pages/Posts.vue";
import PostVue from "@/pages/Post.vue";
import LoginVue from "@/Layouts/Login.vue";
import DashboardVue from "@/Layouts/Dashboard.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginVue
  },
  {
    path: "/",
    name: "Dashboard",
    component: DashboardVue,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeVue,
      },
      {
        path: "about",
        name: "About",
        component: AboutVue
      },
      {
        path: "contact",
        name: "Contact",
        component: ContactVue
      },
      {
        path: "posts",
        name: "Posts",
        component: PostsVue
      },
      {
        path: "post/:id",
        name: "Post",
        component: PostVue,
        beforeEnter: (to, from) => {
          console.log('beforeEnter', to, from);
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  const isAuth = JSON.parse(localStorage.getItem('isAuth'))
  if (to.name !== 'Login' && !isAuth) next({ name: 'Login' })
  if (to.name === 'Login' && isAuth) next({ name: 'Home' })
  else next()

})

export default router