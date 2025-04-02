import { createStore } from "vuex"
import axios from "axios"

const store = createStore({
  state: {
    todos: [],
  },

  mutations: {
    storeTodos(state, data) {
      state.todos = data
    },
    storeTodo(state, data) {
      state.todos.push(data)
    },
  },

  getters: {},

  actions: {
    getTodos({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          return axios.get("http://localhost:3000/todos").then((response) => {
            commit("storeTodos", response.data)
            resolve()
          })
        }, 1000)
      })
    },

    addTodo({ commit }, data) {
      return axios
        .post("http://localhost:3000/todos", data)
        .then((response) => {
          commit("storeTodo", response.data)
        })
    },
  },
})

export default store
