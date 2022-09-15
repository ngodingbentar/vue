<template>
  <div>
    <div>
      Username <input />
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
import { useRouter } from 'vue-router'
export default {
  name: 'LoginPage',
  setup() {
    const router = useRouter()
    const login = () => {
      localStorage.setItem('isAuth', true)
      router.push({ name: 'Home' })
    }

    return { login }
  },
}
</script>
