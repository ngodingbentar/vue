<template>
  <div>
    <h3>{{title}}</h3>
    <p>{{body}}</p>

    <div>
      <button @click="doLike">Love</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: 'PostDetails',
  async setup() {
    const data = reactive({
      title: '',
      body: '',
    })

    const route = useRoute()
    const store = useStore()
    const id = route.params.id

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await result.json()
    data.title = post.title
    data.body = post.body

    const doLike = () => {
      store.commit('post/incrementLikes')
    }

    return { ...toRefs(data), doLike}
  }
}
</script>
