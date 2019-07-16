<template>
  <v-dialog v-model="dialog" scrollable max-width="50%">
    <v-card>
      <v-card-title class="modal-todo-title">
        <div>{{ todo.title }}</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="modal-todo-text">{{ todo.text }}</v-card-text>
      <v-card-text class="modal-todo-date">作成日: {{ todo.date }}</v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-checkbox class="modal-checkbox" v-model="todo.endOfTodo"></v-checkbox>
        <v-btn color="red" flat @click="todo.deleteDialog=true">削除</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["todo"],
	data() {
		return {
			dialog: false
		};
	},
	methods: {
		open() {
			this.dialog = true;
		},
		close() {
			this.dialog = false;
		}
	}
};
</script>

<style scoped>
.modal-todo-title {
  font-size: 20px;
}
.modal-todo-text {
  font-size: 16px;
}
.modal-todo-date {
  color: gray;
  font-size: 13px;
  text-align: right;
}
.modal-checkbox {
  height: 34px;
  margin: 10px 0 0px 0;
  padding: 0 0 0 10px;
}
</style>
