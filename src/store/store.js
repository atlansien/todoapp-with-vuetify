import Vue from "vue";
import Vuex from "Vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data() {
      return {
        todos: []
      };
    },
    mutations: {},
    actions: {},
    getters: {
      todos(state) {
        return state.todos;
      }
    }
  }
});
