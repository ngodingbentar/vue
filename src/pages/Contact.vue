<template>
  <div>
    Contact
    <button @click="doLike">Love</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const doLike = () => {
  store.commit('incrementLikes')
}
</script>
