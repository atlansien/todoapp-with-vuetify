import todos from "../data/todos";
import moment from "moment";
moment.locale("ja");

export default {
  fetchTodos: ({ commit }) => {
    commit("setTodos", todos.todos);
  },
  postTodo: ({ commit }, { title, text }) => {
    console.log(todos.todos);
    const todo = todos.createTodo({ title, text });
    console.log(todos.todos);

    console.log(todo);
    todos.todos.push(todo);
    commit("addTodo", todo);
  }
};
