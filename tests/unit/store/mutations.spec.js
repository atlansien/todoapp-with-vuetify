import mutations from "@/store/mutations";

const state = {
  todos: []
};

describe("test mutations.js", () => {
  it("mutations.setTodosはstate.todosに第二引数を渡す", () => {
    const todos = [
      { id: 1, data: "test data 1" },
      { id: 2, data: "test data 2" }
    ];
    mutations.setTodos(state, todos);
    expect(state.todos).toEqual(todos);
  });
  it("mutations.addTodoはstate.todosの末尾に第二引数をpushする", () => {
    const todo = { id: 3, data: "test data 3" };

    mutations.addTodo(state, todo);
    expect(state.todos[2]).toEqual(todo);
  });
});
