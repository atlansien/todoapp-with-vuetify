<template>
  <div>
    <v-card hover class="card" @click.stop="todo.dialog=true" width="200px">
      <v-container fluid grid-list-md row xs12 sm6 md3>
        <v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title  v-text="todo.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile-action>
      </v-container>
    </v-card>
    <v-dialog v-model="todo.dialog" scrollable max-width="80%" color="primary">
      <v-card>
        <v-card-title style="font-size: 15px">{{ todo.title }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>{{ todo.text }}</v-card-text>
				<v-card-text>
					{{ todo.date }}
				</v-card-text>
      </v-card>
    </v-dialog>
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