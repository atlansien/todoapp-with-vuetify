<template>
  <div>
    <v-layout row wrap justify-center>
      <app-todo v-for="todo in todos" :key="todo.id" :todo="todo">
        <v-list-tile v-for="todo in todos" :key="todo.id"></v-list-tile>
      </app-todo>
    </v-layout>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import moment from "moment";
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "課題を行う",
          date: moment().format("MMMM Do YYYY, h:mm:ss a")
        },
        {
          id: 2,
          text: "ご飯を買いに行く",
          date: moment().format("MMMM Do YYYY, h:mm:ss a")
        },
        {
          id: 3,
          text: "友達と遊ぶ",
          date: moment().format("MMMM Do YYYY, h:mm:ss a")
        },
        {
          id: 4,
          text: "風呂を入れる",
          date: moment().format("MMMM Do YYYY, h:mm:ss a")
        }
      ]
    };
  },
  components: {
    appTodo: Todo
  }
};
</script>
