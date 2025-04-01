import { createStore } from "vuex"

const store = createStore({
  state: {
    todos: [],
  },

  mutations: {
    storeTodos(state, data) {
      state.todos = data
    },
  },

  getters: {},

  actions: {},
})

export default store
