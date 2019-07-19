import actions from "@/store/actions";
import todos from "@/data/todos";

import moment from "moment";
moment.locale("ja");

describe("test actions.js", () => {
  // TODO: async/awaitは不要なので削除する(別ブランチで対応)
  it("actions.fetchTodosはmutations.setTodosにdata.todosを渡す", async () => {
    const commit = jest.fn();
    await actions.fetchTodos({ commit });
    expect(commit).toHaveBeenCalledWith("setTodos", todos.findAll());
  });
  it("actions.postTodoはmutations.addTodoにtodoデータを渡す", () => {
    const commit = jest.fn();
    const title = "test title";
    const text = "test text";
    actions.postTodo({ commit }, { title, text });

    expect(commit).toHaveBeenCalledWith("addTodo", {
      id: 6,
      title: "test title",
      text: "test text",
      date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
      completed: false
    });
  });
  it("actions.putTodoはmutation.updateTodoにtodoデータを渡す、渡されたデータはidが合致した配列内のtodoを変更している", () => {
    const commit = jest.fn();
    const editTodo = {
      id: 3,
      title: "update title",
      text: "update text"
    };

    const oldTodos = todos.findAll();
    const oldTodo = oldTodos.find(todo => todo.id === editTodo.id);

    actions.putTodo({ commit }, editTodo);

    expect(commit).toHaveBeenCalledWith("updateTodo", {
      id: editTodo.id,
      title: editTodo.title,
      text: editTodo.text,
      date: oldTodo.date,
      completed: oldTodo.completed
    });
  });
  it("配列内のTodoに合致するIDがない場合、エラーを返す", () => {
    const commit = jest.fn();
    const missingTodo = {
      id: 999999999999999999,
      title: "missing title",
      text: "missing text"
    };

    expect(() => {
      actions.putTodo({commit}, missingTodo);
    }).toThrow("idと合致するTodoはありません");
  });
});
