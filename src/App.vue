<template>
  <div>
    <!-- <SuspenseComp />
    <VmodelComp /> -->
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
// import SuspenseComp from './components/Suspense/index.vue';
// import VmodelComp from './components/Vmodel/index.vue';

export default {
  name: 'App',
  // components: {SuspenseComp, VmodelComp},
  setup(){}
}
</script>