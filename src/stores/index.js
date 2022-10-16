import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      totalLikes: 1,
      username  : '',
      user      : null,
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
    setUsername(state, value) {
      state.username = value;
    },
    setUser(state, value) {
      state.user = value;
    }
  },
  actions: {
    async getUser({ commit }) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.state.totalLikes}`);
      const data = await response.json();
      commit('setUser', data);
    }
  }
})