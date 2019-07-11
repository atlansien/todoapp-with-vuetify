<template>
  <div>
    <v-form>
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm6 md5>
            <v-text-field label="タイトルを入力してください" v-model="title"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md5>
            <v-text-field label="内容を入力してください" v-model="text"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md2>
            <v-btn outline align-center color="primary" dark>送信</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: ""
    };
  }
};
</script>