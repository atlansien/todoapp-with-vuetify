import getters from "@/store/getters";

const state = {
  todos: [{ id: 1, data: "test data 1" }, { id: 2, data: "test data 2" }]
};

describe("test getters.js", () => {
  it("getters.todosはstate内のTodoを返す", () => {
    const result = getters.todos(state);
    expect(result).toEqual([
      { id: 1, data: "test data 1" },
      { id: 2, data: "test data 2" }
    ]);
  });
});
