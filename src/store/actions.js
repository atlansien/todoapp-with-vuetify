import todos from "../data/todos";

export default {
  initDummyStocks: ({ commit }) => {
    commit("SET_DUMMY_TODOS", todos);
  }
};
