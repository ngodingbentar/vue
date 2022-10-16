export default {
  namespaced: true,
  state() {
    return {
      totalLikes: 1,
    };
  },
  getters: {
    fakeTotalLikes(state) {
      return state.totalLikes + 10;
    }
  },
  mutations: {
    incrementLikes(state) {
      state.totalLikes++;
    },
  },
}