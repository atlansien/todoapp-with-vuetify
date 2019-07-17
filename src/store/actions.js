import todos from '../data/todos';

export default {
	fetchTodos:({commit}) => {
		commit("setTodos", todos);
	}
}