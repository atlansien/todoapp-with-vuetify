import todos from "../data/todos";

export default {
  fetchTodos: ({ commit }) => {
    commit("setTodos", todos.findAll());
  },
  postTodo: ({ commit }, { title, text }) => {
    const todo = todos.createTodo({ title, text });
    commit("addTodo", todo);
  },
  putTodo: ({ commit }) => {}
};
