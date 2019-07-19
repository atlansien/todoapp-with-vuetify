<template>
  <div>
    <v-form>
      <v-container>
        <v-layout>
          <v-flex md12>
            <v-alert
              v-model="isError"
              color="error"
              icon="warning"
              outline
              dismissible
            >{{ errorMsg }}</v-alert>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-flex xs12 sm4 md5>
            <v-text-field label="タイトルを入力してください" v-model="title"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4 md5>
            <v-text-field label="内容を入力してください" v-model="text"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <v-btn outline align-center color="primary" dark @click="postTodoButton()">送信</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      text: "",
      isError: false,
      errorMsg: ""
    };
  },
  methods: {
    ...mapActions(["postTodo"]),
    postTodoButton() {
      if (!this.title && !this.text) {
        this.isError = true;
        this.errorMsg = "タイトルと内容を入力してください";
      } else if (!this.title) {
        this.isError = true;
        this.errorMsg = "タイトルを入力してください";
      } else if (!this.text) {
        this.isError = true;
        this.errorMsg = "内容を入力してください";
      } else {
        this.postTodo({ title: this.title, text: this.text });
        this.title = "";
        this.text = "";
        this.isError = false;
      }
    }
  }
};
</script>