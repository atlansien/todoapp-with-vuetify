import todos from "../data/todos";

export default {
  fetchTodos: ({ commit }) => {
    commit("setTodos", todos.todos);
  },
  postTodo: ({ commit }, { title, text }) => {
    const todo = todos.createTodo({ title, text });
    commit("addTodo", todo);
  }
};
