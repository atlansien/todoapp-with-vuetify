<template>
  <v-dialog v-model="todo.dialog" scrollable max-width="50%" color="primary">
    <v-card>
      <v-card-title class="modal-todo-title">
        <div>{{ todo.title }}</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="modal-todo-text">{{ todo.text }}</v-card-text>
      <v-card-text class="modal-todo-date">作成日: {{ todo.date }}</v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-checkbox class="modal-checkbox" v-model="todo.endOfTodo"></v-checkbox>
        <v-btn color="error">削除</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
	props:['todo']
}
</script>
