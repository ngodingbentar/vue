<template>
  <div>
    <div v-if="error">error = {{error}}</div>
    <Suspense v-else>
      <template #default>
        <div>
          <User />
          <User2 />
        </div>
      </template>
      <template #fallback>
        <span>Loading . . .</span>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { onErrorCaptured, ref } from 'vue';
import User from './components/UserComp.vue';
import User2 from './components/UserComp2.vue';

export default {
  name: 'App',
  components: {
    User,
    User2,
  },
  setup(){
    const error = ref(null)

    onErrorCaptured((e) => {
      error.value = e
      return true
    })

    return {error}
  }
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
