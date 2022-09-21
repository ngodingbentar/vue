<template>
  <div>
    Contact
    <button @click="doLike">Love</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'ContactPage',
  setup() {
    const store = useStore()
    const doLike = () => {
      store.commit('incrementLikes')
    }

    return { doLike}
  },
}
</script>
