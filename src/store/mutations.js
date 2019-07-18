export default {
  setTodos(state, todos) {
    state.todos = todos;
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  updateTodo(state, editTodo) {
    const index = state.todos.findIndex(todo => todo.id = editTodo.id)
    state.todos[index].title = editTodo.title;
    state.todos[index].text = editTodo.text
  }
};
