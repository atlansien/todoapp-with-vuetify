export default {
  setTodos(state, todos) {
    state.todos = todos;
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  updateTodo(state, editTodo) {
    const index = state.todos.findIndex(todo => editTodo.id === todo.id);
    state.todos[index].title = editTodo.title;
    state.todos[index].text = editTodo.text;
  },
  removeTodo(state, id) {
    const index = state.todos.findIndex(todo => id === todo.id);
    state.todos.splice(index, 1);
  },
  switchCompleted(state, i) {
    state.todos[i].completed = !state.todos[i].completed;
  }
};
