import todos from "../data/todos";
import moment from "moment";
moment.locale("ja");

export default {
  fetchTodos: ({ commit }) => {
    commit("setTodos", todos);
  },
  postTodo: ({ commit }, { title, text }) => {
    const todo = {
      id: todos.length + 1,
      title: title,
      text: text,
      date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
      endOfTodo: false
    };
    todos.push(todo);
    commit("addTodo", todo)
  }
};
