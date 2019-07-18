import todos from "../data/todos";

export default {
  fetchTodos: ({ commit }) => {
    commit("setTodos", todos.todos);
  },
  postTodo: ({ commit }, { title, text }) => {
    const todo = todos.createTodo({ title, text });

    todos.todos.push(todo);
    commit("addTodo", todo);
  }
};
