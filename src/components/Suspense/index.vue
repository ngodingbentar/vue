<template>
  <div>
    <div v-if="error">error = {{error}}</div>
    <Suspense v-else>
      <template #default>
        <div>
          <User />
          <User2 />
        </div>
      </template>
      <template #fallback>
        <span>Loading . . .</span>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { onErrorCaptured, ref } from 'vue';
import User from './UserComp.vue';
import User2 from './UserComp2.vue';

export default {
  name: 'SuspenseComp',
  components: {
    User,
    User2,
  },
  setup(){
    const error = ref(null)

    onErrorCaptured((e) => {
      error.value = e
      return true
    })

    return {error}
  }
}
</script>