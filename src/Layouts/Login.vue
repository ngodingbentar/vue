<template>
  <div>
    <div>
      Username <input v-model="username" />
    </div>
    <div>
      Password <input />
    </div>
    <div>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'LoginPage',
  setup() {
    const router = useRouter()
    const store = useStore()
    const username = ref('')
    const login = () => {
      localStorage.setItem('isAuth', true)
      store.commit('user/setUsername', username.value)
      store.dispatch('user/getUser')
      router.push({ name: 'Home' })
    }

    return { username, login }
  },
}
</script>
