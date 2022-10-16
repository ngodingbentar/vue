<template>
  <div>
    <pre>{{props.text}}</pre>
    <button @click="emit('changeProps', 'ganti props')">change props</button>
    <ul v-for="(list, index) in lists" :key="index">
      <li>
        <router-link :to="`/post/${list.id}`">{{list.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from 'vue'
const data = reactive({
  lists: [],
})
const props = defineProps({
  text: {
    type: String,
    default: 'Hello World'
  },
})

const emit = defineEmits(['changeProps'])

const result = await fetch('https://jsonplaceholder.typicode.com/posts')
data.lists = await result.json()
const lists = data.lists
</script>