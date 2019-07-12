<template>
  <div>
    <v-container xs12 sm6 md3>
      <v-card hover class="card" width="200px" @click.prevent="todo.todoDialog=true">
        <v-layout justify-end class="closeBox">
          <v-btn @click.stop="todo.deleteDialog=true" class="closeBtn" fab small depressed flat>
            <v-icon>far fa-times-circle</v-icon>
          </v-btn>
        </v-layout>

        <v-layout align-center justify-center class="card-inside">
          <v-flex xs2 grow class="height : 35px">
            <v-checkbox
              class="checkbox"
              @click.stop="todo.endOfTodo = !todo.endOfTodo"
            ></v-checkbox>
          </v-flex>
          <v-flex>
            <v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="todo.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile-action>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <app-todo-dialog :todo="todo"></app-todo-dialog>
    <app-delete-dialog :todo="todo"></app-delete-dialog>
  </div>
</template>

<script>
import TodoDialog from "./dialogs/TodoDialog.vue";
import DeleteDialog from "./dialogs/DeleteDialog.vue";
export default {
  props: ["todo"],
  data() {
    return {};
  },
  components: {
    appTodoDialog: TodoDialog,
    appDeleteDialog: DeleteDialog
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