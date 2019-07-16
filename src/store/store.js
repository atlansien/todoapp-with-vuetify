import todos from "../data/todos";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    SET_DUMMY_TODOS(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    initDummyStocks: ({ commit }) => {
      commit("SET_DUMMY_TODOS", todos);
    }
  },
  getters: {
    todos(state) {
      return state.todos;
    }
  }
});
