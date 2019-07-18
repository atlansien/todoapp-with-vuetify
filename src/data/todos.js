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
    const index = todos.findIndex(todo => todo.id === editTodo.id);
    todos[index].todo.title = editTodo.title;
    todos[index].todo.text = editTodo.text;

    return todos[index].todo;
  }
};
