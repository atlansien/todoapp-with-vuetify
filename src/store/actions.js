import todos from "../data/todos";

export default {
  initDummyTodos: ({ commit }) => {
    commit("SET_DUMMY_TODOS", todos);
  }
};
