import todos from "../data/todos";
import moment from "moment";
moment.locale("ja");

let nextID = todos.nextID;

export default {
  fetchTodos: ({ commit }) => {
    commit("setTodos", todos.todos);
  },
  postTodo: ({ commit }, { title, text }) => {
    const todo = {
      id: nextID++,
      title: title,
      text: text,
      date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
      endOfTodo: false
    };
    todos.todos.push(todo);
    console.log(todos.todos);

    commit("addTodo", todo);
  }
};
