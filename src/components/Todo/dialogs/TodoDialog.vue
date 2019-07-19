<template>
  <v-dialog v-model="isOpen" scrollable max-width="50%">
    <v-card>
      <v-card-title class="modal-todo-title">
        <div v-if="!isUpdate">{{ todo.title }}</div>
      </v-card-title>
      <v-text-field v-if="isUpdate" v-model="title" label="title" required></v-text-field>

      <v-divider></v-divider>
      <v-card-text v-if="!isUpdate" class="modal-todo-text">{{ todo.text }}</v-card-text>
      <v-text-field v-if="isUpdate" v-model="text" label="text" required></v-text-field>
      <v-card-text class="modal-todo-date">作成日: {{ todo.date }}</v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-checkbox class="modal-checkbox" v-model="todo.endOfTodo"></v-checkbox>
        <v-btn color="success" @click="openUpdateForm()">text</v-btn>
        <!-- メソッド作成後コメント外す -->
        <!-- <v-btn color="red" flat @click="todo.deleteDialog=true">削除</v-btn> -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    todo: {
      id: Number,
      text: String,
      date: String,
      todoDialog: Boolean,
      endOfTodo: Boolean
    }
  },
  data() {
    return {
      text: "",
      isOpen: false,
      isUpdate: false
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    openUpdateForm() {
      this.isUpdate = true;
      this.title = this.todo.title;
      this.text = this.todo.text;
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
