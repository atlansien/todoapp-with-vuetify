import todos from "../data/todos";

export default {
  fetchTodos: ({ commit }) => {
    commit("setTodos", todos.findAll());
  },
  postTodo: ({ commit }, { title, text }) => {
    const todo = todos.createTodo({ title, text });
    commit("addTodo", todo);
  },
  putTodo: ({ commit }, editTodo) => {
    try {
      const todo = todos.updateTodo(editTodo);
      commit("updateTodo", todo);
    } catch (e) {
      throw e;
    }
  },
  deleteTodo: ({ commit }, id) => {
    try {
      const todo = todos.removeTodo(id);
      commit("removeTodo", todo);
    } catch (e) {
      throw e;
    }
  }
};
