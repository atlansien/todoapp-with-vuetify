<template>
  <div>
    <v-layout row wrap justify-center>
      <app-todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </v-layout>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import moment from "moment";
moment.locale("ja");
export default {
  components: {
    appTodo: Todo
  }
};
</script>
