<template>
  <div>
    <v-card hover class="card">
      <v-container fluid grid-list-md row xs12 sm6 md3>
        <v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="todo.title"></v-list-tile-title>
            <v-list-tile-sub-title v-text="todo.text"></v-list-tile-sub-title>
            <v-list-tile-sub-title v-text="todo.date"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile-action>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["todo"]
};
</script>

<style scoped>
.card {
  border: 2px solid lightseagreen;
  color: gray;
  background-color: transparent;
  margin: 10px 20px;
}
</style>