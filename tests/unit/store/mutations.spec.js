import mutations from "@/store/mutations";
import moment from "moment";

const state = {
  todos: [
    {
      id: 1,
      title: "test title",
      text: "test text",
      date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
      endOfTodo: false
    },
    {
      id: 2,
      title: "test title2",
      text: "test text3",
      date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
      endOfTodo: false
    }
  ]
};

describe("TEST store/mutations.js", () => {
  it("test SET_DUMMY_TODOS", () => {
    const datas = [
      {
        id: 1,
        title: "test title",
        text: "test text",
        date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
        endOfTodo: false
      },
      {
        id: 2,
        title: "test title2",
        text: "test text2",
        date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
        endOfTodo: false
      }
    ];

    mutations.SET_DUMMY_TODOS(state, datas);
    expect(state.todos).toEqual([
      {
        id: 1,
        title: "test title",
        text: "test text",
        date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
        endOfTodo: false
      },
      {
        id: 2,
        title: "test title2",
        text: "test text2",
        date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
        endOfTodo: false
      }
    ]);
  });
});
