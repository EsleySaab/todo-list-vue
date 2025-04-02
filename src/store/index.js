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
      const index = state.todos.findIndex((todo) => todo.id === data.id)
      if (index >= 0) {
        state.todos.splice(index, 1, data)
      } else {
        state.todos.push(data)
      }
    },

    deleteTodo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id)

      if (index >= 0) {
        state.todos.splice(index, 1)
      }
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

    updateTodo({ commit }, { id, data }) {
      return axios
        .put(`http://localhost:3000/todos/${id}`, data)
        .then((response) => {
          commit("storeTodo", response.data)
        })
    },

    deleteTodo({ commit }, id) {
      return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        commit("deleteTodo", id)
      })
    },
  },
})

export default store
