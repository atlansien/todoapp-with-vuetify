import mutations from "@/store/mutations";

const state = {
  todos: []
};

describe("test mutations.js", () => {
  it("mutations.setTodosはstate.todosに第二引数を渡す", () => {
    const datas = [
      { id: 1, data: "test data 1" },
      { id: 2, data: "test data 2" }
    ];
    mutations.setTodos(state, datas);
    expect(state.todos).toEqual([
      { id: 1, data: "test data 1" },
      { id: 2, data: "test data 2" }
    ]);
  });
});