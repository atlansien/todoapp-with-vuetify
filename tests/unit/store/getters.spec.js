import getters from '@/store/getters';
import moment from "moment";

const state = {
	todos:   {
    id: 1,
    title: "test title",
    text: "test text",
    date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
    endOfTodo: false
  },
};

describe('store getters.js', () => {
  it('returns todos', () => {
    const result = getters.todos(state);
    expect(result).toEqual({
    id: 1,
    title: "test title",
    text: "test text",
    date: moment().format("YYYY年 MM月 Do(ddd), kk時mm分 "),
    endOfTodo: false
  },);
  });
});