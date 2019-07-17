import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";

import todos from '../data/todos'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters
});
