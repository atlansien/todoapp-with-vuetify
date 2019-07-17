import actions from "@/store/actions";
import todos from "@/data/todos"

describe("test actions.js", () => {
  it("acrionts.fetchTodosはmutations.setTodosにdata.todosを渡す", async () => {
    const commit = jest.fn();
    await actions.fetchTodos({ commit });
    expect(commit).toHaveBeenCalledWith("setTodos", todos);
  });
});
