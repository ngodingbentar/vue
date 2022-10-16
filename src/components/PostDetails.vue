<template>
  <div>
    <h3>{{data.title}}</h3>
    <p>{{data.body}}</p>

    <div>
      <button @click="doLike">Love</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

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
</script>
