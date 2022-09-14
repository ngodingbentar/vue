<template>
  <div>
    <h3>{{title}}</h3>
    <p>{{body}}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'PostDetails',
  async setup() {
    const data = reactive({
      title: '',
      body: '',
    })

    const route = useRoute()
    const id = route.params.id
    console.log('id', id)

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await result.json()
    data.title = post.title
    data.body = post.body

    return { ...toRefs(data)}
  }
}
</script>
