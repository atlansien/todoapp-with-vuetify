import moment from "moment";
moment.locale("ja");

const todos = [];

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

for (let i = 0; i < 5; i++) {
  const todo = new Todo({
    title: "タイトル" + i,
    text: `詳細分` + i
  });
  todos.push({ ...todo });
}

export default {
  findAll: () => {
    return todos.slice();
  },
  createTodo: ({ title, text }) => {
    const todo = new Todo({
      title: title,
      text: text
    });
    todos.push({ ...todo });
    return { ...todo };
  },
  updateTodo: editTodo => {
    const todo = todos.find(todo => editTodo.id === todo.id);
    if (!todo) {
      throw new Error("idと合致するTodoはありません");
    }
    todo.title = editTodo.title;
    todo.text = editTodo.text;

    return todo;
  },
  removeTodo: id => {
    const index = todos.findIndex(todo => id === todo.id);
    if (index === -1) {
      throw new Error("idと合致するTodoはありません");
    }
    const todo = todos.splice(index, 1)[0];
    return todo;
  }
};
