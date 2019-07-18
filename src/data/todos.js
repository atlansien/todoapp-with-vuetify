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
  //TODO:todosの参照を返さずコピーを返すようにする(別ブランチで対応する)
  todos,
  createTodo: ({ title, text }) => {
    const todo = new Todo({
      title: title,
      text: text
    });
    todos.push({ ...todo });
    return { ...todo };
  }
};
