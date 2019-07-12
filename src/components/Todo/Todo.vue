<template>
  <div>
    <v-container xs12 sm6 md3>
      <v-card hover class="card" width="200px">
        <v-layout justify-end class="closeBox">
          <v-btn class="closeBtn" fab small depressed flat>
            <v-icon>far fa-times-circle</v-icon>
          </v-btn>
        </v-layout>

        <v-layout align-center justify-center class="card-inside">
          <v-flex xs2 grow class="height : 35px">
            <v-checkbox class="checkbox" v-model="todo.endOfTodo"></v-checkbox>
          </v-flex>
          <v-flex>
            <v-list-tile-action @click="todo.dialog=true">
              <v-list-tile-content>
                <v-list-tile-title v-text="todo.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile-action>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>

    <v-dialog v-model="todo.dialog" scrollable max-width="80%" color="primary">
      <v-card>
        <v-card-title style="font-size: 15px">{{ todo.title }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>{{ todo.text }}</v-card-text>
        <v-card-text>{{ todo.date }}</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.card {
  border: 2px solid lightseagreen;
  color: gray;
  background-color: transparent;
  padding: 0 10px;
}
.closeBox {
  height: 15px;
  width: 190px;
  text-align: center;
}

.closeBtn {
  height: 30px;
  width: 30px;
  color: gray;
}
.card-inside {
  height: 50px;
  box-sizing: content-box;
  vertical-align: middle;
}
</style>