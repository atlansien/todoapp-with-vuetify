import mutations from "@/store/mutations";
import moment from "moment";
moment.locale("ja");

const state = {
  todos: []
};

let nextID = 1;

class Todo {
  constructor({ title, text }) {
    this.id = nextID++;
    this.title = title;
    this.text = text;
    this.date = moment().format("YYYY年 MM月 Do(ddd), kk時mm分 ");
    this.completed = false;
  }
}

describe("test mutations.js", () => {
  it("mutations.setTodosはstate.todosに第二引数を渡す", () => {
    const todos = [];

    for (let i = 0; i < 5; i++) {
      const todo = new Todo({
        title: "タイトル" + i,
        text: `詳細分` + i
      });
      todos.push({ ...todo });
    }
    mutations.setTodos(state, todos);
    expect(state.todos).toEqual(todos);
  });
  it("mutations.addTodoはstate.todosの末尾に第二引数をpushする", () => {
    const todo = new Todo({
      title: "タイトル" + nextID,
      text: "詳細分" + nextID
    });

    const todoId = nextID - 2;

    mutations.addTodo(state, { ...todo });
    expect(state.todos[todoId]).toEqual(todo);
  });
  it("mutations.updateTodoは指定したidと紐つく配列内のtodoを内容を変更する", () => {
    const id = 3

    const oldTodo = state.todos.find(todo => id === todo.id)

    const todo = { id: id, title: "update title", text: "update text" };
    mutations.updateTodo(state, todo);

    const updatedTodo = state.todos.find(todo => id === todo.id)

    expect(oldTodo).toEqual(updatedTodo);
  });
  it("mutations.removeTodoは指定したidと紐つく配列内のtodoを一件削除する", () => {
    const oldTodos = state.todos.slice();

    const id = 1;

    mutations.removeTodo(state, id);
    expect(state.todos).not.toEqual(oldTodos);
  });
});
