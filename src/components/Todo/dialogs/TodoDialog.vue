<template>
  <v-dialog v-model="isOpen" scrollable max-width="50%">
    <v-card>
      <v-card-title v-if="!isUpdate" class="modal-todo-title">
        <div>{{ todo.title }}</div>
      </v-card-title>
      <v-card-actions class="update-title" v-if="isUpdate">
        <v-text-field v-model="title" label="title" required></v-text-field>
      </v-card-actions>

      <v-divider></v-divider>
      <v-card-text v-if="!isUpdate" class="modal-todo-text">{{ todo.text }}</v-card-text>
      <v-card-actions v-if="isUpdate">
        <v-text-field v-model="text" label="text" required></v-text-field>
      </v-card-actions>
      <v-card-text class="modal-todo-date">作成日: {{ todo.date }}</v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-checkbox class="modal-checkbox" v-model="todo.endOfTodo"></v-checkbox>
        <v-btn v-if="!isUpdate" color="success" @click="openUpdateForm()" outline>編集</v-btn>
        <v-btn v-if="isUpdate" color="error" @click="closeUpdateForm()">キャンセル</v-btn>
        <v-btn v-if="isUpdate" color="info" outline @click="putTodoButton(todo)" :disabled="!title || !text">変更</v-btn>

        <!-- メソッド作成後コメント外す -->
        <!-- <v-btn color="red" flat @click="todo.deleteDialog=true">削除</v-btn> -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
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
    ...mapActions(["putTodo"]),
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
    },
    closeUpdateForm() {
      this.isUpdate = false;
      this.title = "";
      this.text = "";
    },
    putTodoButton(todo) {
      const editTodo = {
        id: todo.id,
        title: this.title,
        text: this.text
      };
      this.putTodo(editTodo);
      this.closeUpdateForm();
    }
  },
  watch: {
    isOpen() {
      this.closeUpdateForm();
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

.update-title {
  padding-bottom: 0;
}
</style>
