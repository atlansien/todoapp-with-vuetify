import mutations from "@/store/mutations";

const state = {
  todos: []
};

describe("test mutations.js", () => {
  it("mutations.setTodosはstate.todosに第二引数を渡す", () => {
    const todos = [
      { id: 1, title: "test title1", text: "test text1" },
      { id: 2, title: "test title2", text: "test text2", completed: false}
    ];
    mutations.setTodos(state, todos);
    expect(state.todos).toEqual(todos);
  });
  it("mutations.addTodoはstate.todosの末尾に第二引数をpushする", () => {
    const todo = { id: 3, title: "test title3", text: "test text3" };

    mutations.addTodo(state, todo);
    expect(state.todos[2]).toEqual(todo);
  });
  it("mutations.updateTodoは指定したidと紐つく配列内のtodoを内容を変更する", () => {
    const todo = { id: 3, title: "update title", text: "update text" };

    mutations.updateTodo(state, todo);
    expect(state.todos[2]).toEqual(todo);
  });
  it("mutations.removeTodoは指定したidと紐つく配列内のtodoを一件削除する", () => {
    const oldTodos = state.todos.slice();

    const id = 1;

    mutations.removeTodo(state, id);
    expect(state.todos).not.toEqual(oldTodos);
  });
  it("mutations.switchCompletedは指定したidと紐つく配列内のtodo.completedの真偽値を反転させる", () => {
    const i = 2;

    mutations.switchCompleted(state, i);

    expect(state.todos[i].completed).toBe(true);
  });
});
