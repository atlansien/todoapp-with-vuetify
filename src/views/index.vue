<template>
  <div>
    <v-app>
      <app-header />
      <v-content>
        <v-form>
          <v-container>
            <v-layout justify-center>
              <v-flex xs12 sm4 md5>
                <v-text-field label="タイトルを入力してください" v-model="title"></v-text-field>
              </v-flex>
              <v-flex xs12 sm4 md5>
                <v-text-field label="内容を入力してください" v-model="text"></v-text-field>
              </v-flex>
              <v-flex xs12 sm4 md2>
                <v-btn outline align-center color="primary" dark>送信</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <app-todos />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from "../components/Grobal/Header";
import Todos from "../components/Todo/Todos.vue";
export default {
	data() {
    return {
      title: "",
      text: ""
    };
  },
  components: {
    appHeader: Header,
    appTodos: Todos
  },
  created() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>