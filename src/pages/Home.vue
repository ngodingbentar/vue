<template>
  <div>
    <SuspenseComp />
    <VmodelComp />
  </div>
</template>

<script>
import SuspenseComp from '../components/Suspense/index.vue';
import VmodelComp from '../components/Vmodel/index.vue';
  export default {
    name: 'HomePage',
    components: { SuspenseComp, VmodelComp},
    setup() {
      
    },
  }
</script>
  