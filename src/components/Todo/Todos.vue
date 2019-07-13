<template>
  <div>
    <v-layout row wrap justify-center>
      <app-todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </v-layout>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  components: {
    appTodo: Todo
  },computed: {
		todos() {
			return this.$store.getters.todos
		}
	}
};
</script>
