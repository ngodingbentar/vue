import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      totalLikes: 0,
      username  : ''
    };
  },
  mutations: {
    incrementLikes(state) {
      state.totalLikes++;
    },
    setUsername(state, value) {
      state.username = value;
    }
  }
})