import actions from "@/store/actions";
import todos from "@/data/todos";

import moment from "moment";
moment.locale("ja");

describe("test actions.js", () => {
  it("actions.fetchTodosはmutations.setTodosにdata.todosを渡す", async () => {
    const commit = jest.fn();
    await actions.fetchTodos({ commit });
    let id = todos.length;
    expect(commit).toHaveBeenCalledWith("setTodos", todos.todos);
  });
  it("actions.postTodoはmutations.addTodoにtodoデータを渡す", () => {
    const commit = jest.fn();
    const title = "test title";
    const text = "test text";
    actions.postTodo({ commit }, { title, text });

    expect(commit).toHaveBeenCalledWith("addTodo", {
			ID: 6,
      title: "test title",
      text: "test text",
      date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
      completed: false
    });
  });
});
