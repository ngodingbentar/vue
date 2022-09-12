<template>
  <div>
    <SuspenseComp />
    <VmodelComp />
  </div>
</template>

<script>
import SuspenseComp from './components/Suspense/index.vue';
import VmodelComp from './components/Vmodel/index.vue';

export default {
  name: 'App',
  components: {SuspenseComp, VmodelComp},
  setup(){}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
