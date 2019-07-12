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
moment.locale('ja')
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "課題を行う",
          text: "Todoリストのインプットフォーム",
          date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
          dialog: false,
          endOfTodo: false
        },
        {
          id: 2,
          title: "ご飯を買いに行く",
          text: "今日は中華",
          date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
          dialog: false,
          endOfTodo: false
        },
        {
          id: 3,
          title: "友達と遊ぶ",
          text: "ゲームセンターに集合",
          date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
          dialog: false,
          endOfTodo: false
        },
        {
          id: 4,
          title: "風呂を入れる",
          text: "温泉の素を入れる",
          date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
          dialog: false,
          endOfTodo: false
        },
        {
          id: 5,
          title: "課題を行う",
          text: "TodoリストのTodo部分",
          date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
          dialog: false,
          endOfTodo: false
        }
      ]
    };
  },
  components: {
    appTodo: Todo
  }
};
</script>
