<template>
  <div>
    <v-layout row wrap justify-center>
      <v-list-tile v-for="todo in todos" :key="todo.id">
        <v-card hover class="card">
          <v-container fluid grid-list-md row xs12 sm6 md3>
            <v-list-tile-action>
              <v-list-tile-title v-text="todo.text"></v-list-tile-title>
              <v-list-tile-sub-title v-text="todo.date"></v-list-tile-sub-title>
            </v-list-tile-action>
          </v-container>
        </v-card>
      </v-list-tile>
    </v-layout>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "課題を行う",
          date: moment().format("MMMM Do YYYY, h:mm:ss a")
        },
        {
          id: 2,
          text: "ご飯を買いに行く",
          date: moment().format("MMMM Do YYYY, h:mm:ss a")
        },
        {
          id: 3,
          text: "友達と遊ぶ",
          date: moment().format("MMMM Do YYYY, h:mm:ss a")
        }
      ]
    };
  }
};
</script>

<style scoped>
.card {
	border: 2px solid lightseagreen;
	color: gray;
	background-color: transparent;
}
</style>
