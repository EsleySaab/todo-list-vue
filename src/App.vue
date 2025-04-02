<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner v-if="loading" />

      <div v-else>
        <TodoFormAdd />

        <TodoItems v-if="$store.state.todos.length > 0" />

        <TodoEmpty v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex"
import TodoEmpty from "./components/TodoEmpty.vue"
import TodoFormAdd from "./components/TodoFormAdd.vue"
import TodoItems from "./components/TodoItems.vue"
import TodoSpinner from "./components/TodoSpinner.vue"

export default {
  components: {
    TodoEmpty,
    TodoFormAdd,
    TodoItems,
    TodoSpinner,
  },

  setup() {
    const loading = ref(false)
    const store = useStore()

    loading.value = true
    store.dispatch("getTodos").finally(() => {
      loading.value = false
    })

    return {
      loading,
    }
  },
}
</script>
