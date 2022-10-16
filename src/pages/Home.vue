<template>
  <div>
    <SuspenseComp />
    <VmodelComp />
    <p>likes : {{likes}}</p>
    <p>fake likes : {{fakeTotalLikes}}</p>
    <p>usernmae : {{username}}</p>

    <div>
      <button @click="incrementLikes">incrementLikes</button>
      <button @click="setUsername('dew')">setUsername</button>
      <button @click="getUser">getUser</button>
    </div>
    <pre> user : {{user}}</pre>
  </div>
</template>

<script>
// import { computed } from 'vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
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
    },
    methods: {
      ...mapMutations(['incrementLikes', 'setUsername', 'setUser']),
      ...mapActions(['getUser'])
    }
  }
</script>
  