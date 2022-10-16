export default {
  namespaced: true,
  state() {
    return {
      username  : '',
      user      : null,
    };
  },
  mutations: {
    setUsername(state, value) {
      state.username = value;
    },
    setUser(state, value) {
      state.user = value;
    }
  },
  actions: {
    async getUser({ commit }) {
      const id = Math.floor(Math.random() * 10);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      commit('setUser', data);
    }
  }
}