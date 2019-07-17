<template>
  <app-todos />
</template>

<script>
import Todos from "../../components/Todo/Todos.vue";
export default {
  components: {
    appTodos: Todos
  },
  created() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>
