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

const findTodo = id => {
  // state.todosをコピーして渡している
  const copiedTodos = state.todos.slice();
  const todo = copiedTodos.find(todo => id === todo.id);
  return todo;
};

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
    const addingTodoID = nextID;

    const todo = new Todo({
      title: "タイトル" + nextID,
      text: "詳細分" + nextID
    });

    mutations.addTodo(state, { ...todo });

    const addedTodo = findTodo(addingTodoID);

    expect(addedTodo).toEqual(todo);
  });
  it("mutations.updateTodoは指定したidと紐つく配列内のtodoを内容を変更する", async () => {
    const updatingTodoID = 3;

    const oldTodo = findTodo(updatingTodoID);
    console.log("mutations.updateTodo前: ", oldTodo);

    const todo = {
      id: updatingTodoID,
      title: "update title",
      text: "update text"
    };
    mutations.updateTodo(state, todo);
    console.log("mutations.updateTodo後: ", oldTodo);

    const updatedTodo = findTodo(updatingTodoID);

    expect(oldTodo).not.toEqual(updatedTodo);
  });
  it("mutations.removeTodoは指定したidと紐つく配列内のtodoを一件削除する", () => {
    const oldTodos = state.todos.slice();

    const removingTodoID = 1;

    mutations.removeTodo(state, removingTodoID);

    expect(state.todos).not.toEqual(oldTodos);
  });
});
