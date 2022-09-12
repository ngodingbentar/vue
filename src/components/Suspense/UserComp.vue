<template>
  <div>
    <div>user com</div>
    <div>data = {{data}}</div>
  </div>
</template>

<script>
import { ref } from 'vue';


export default{
  async setup() {
    const data = ref(null)

    const getUser = () => new Promise(resolve => {
      return setTimeout(() => resolve(data.value = 'dewa'), 1000)
    })

    await getUser()

    return {data}
  },
}
</script>
