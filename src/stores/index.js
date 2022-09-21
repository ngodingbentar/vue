import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      totalLikes: 0,
      username  : '',
      user      : null,
    };
  },
  mutations: {
    incrementLikes(state) {
      state.totalLikes++;
    },
    setUsername(state, value) {
      state.username = value;
    },
    setUser(state, value) {
      state.user = value;
    }
  },
  actions: {
    async getUser({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      commit('setUser', data);
    }
  }
})