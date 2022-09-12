<template>
  <div>
    <pre>{{name}}</pre>
    <pre>{{age}}</pre>
    <UserComp v-model:name="name" v-model:age="age" />
  </div>
</template>

<script>
import { ref } from 'vue'
import UserComp from './UserComp.vue'
export default {
  name: 'VmodelComp',
  components: { UserComp },
  setup() {
    const name = ref('')

    const age = ref(0)

    return { name, age }
  },
}
</script>
