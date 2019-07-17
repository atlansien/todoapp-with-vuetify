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
  todos: todos,
  nextID: nextID
};
// [
//   {
//     id: 1,
//     title: "課題を行う",
//     text: "Todoリストのインプットフォーム",
//     date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
//     endOfTodo: false
//   },
//   {
//     id: 2,
//     title: "ご飯を買いに行く",
//     text: "今日は中華",
//     date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
//     endOfTodo: false
//   },
//   {
//     id: 3,
//     title: "友達と遊ぶ",
//     text: "ゲームセンターに集合",
//     date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
//     endOfTodo: false
//   },
//   {
//     id: 4,
//     title: "風呂を入れる",
//     text: "温泉の素を入れる",
//     date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
//     endOfTodo: false
//   },
//   {
//     id: 5,
//     title: "課題を行う",
//     text: "TodoリストのTodo部分",
//     date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
//     endOfTodo: false
//   }
// ];
