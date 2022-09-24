<template>
  <div>
    <SuspenseComp />
    <VmodelComp />
    <p>likes : {{likes}}</p>
    <p>fake likes : {{fakeTotalLikes}}</p>
    <p>usernmae : {{username}}</p>
    <pre> user : {{user}}</pre>
  </div>
</template>

<script>
// import { computed } from 'vue'
import { mapGetters, mapState } from 'vuex'
import SuspenseComp from '../components/Suspense/index.vue';
import VmodelComp from '../components/Vmodel/index.vue';
  export default {
    name: 'HomePage',
    components: { SuspenseComp, VmodelComp},
    // setup() {
    //   const store = useStore()
    //   const likes = computed(() => {
    //     return store.state.totalLikes
    //   })
    //   const fakeLikes = computed(() => {
    //     return store.getters.fakeTotalLikes
    //   })
    //   const username = computed(() => {
    //     return store.state.username
    //   })

    //   const user = computed(() => {
    //     return store.state.user
    //   })

    //   return { likes, fakeLikes, username, user}
    // },
    computed: {
      ...mapState(["username", "user"]),
      ...mapState({ likes: 'totalLikes' }),
      ...mapGetters(["fakeTotalLikes"])
    }
  }
</script>
  