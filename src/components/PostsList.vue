<template>
  <ul v-for="(list, index) in lists" :key="index">
    <li>
      <router-link :to="`/post/${list.id}`">{{list.title}}</router-link>
    </li>
  </ul>
</template>

<script>
import { reactive, toRefs } from 'vue'

  export default {
    async setup() {
      const data = reactive({
        lists: [],
      })

      const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      // console.log('result', result.json())
      data.lists = await result.json()
      console.log('lists', data)

      return { ...toRefs(data)}
    }
  }
</script>