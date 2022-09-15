<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link :to="{name: 'Contact'}">Contact</router-link>
      <button @click="logout">logout</button>
    </nav>

    <router-view />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'DashboardPage',
  setup() {
    const router = useRouter()
    const logout = () => {
      localStorage.removeItem('isAuth')
      router.push({ name: 'Login' })
    }
    return { logout }
  },
}
</script>
