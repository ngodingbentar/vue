<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link :to="{name: 'Contact'}">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'DashboardPage',
  setup() {
    return {}
  },
}
</script>
