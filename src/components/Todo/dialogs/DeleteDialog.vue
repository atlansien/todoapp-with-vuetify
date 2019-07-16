<template>
  <v-dialog v-model="dialog" scrollable max-width="50%">
    <v-card>
      <v-card-title>
        <strong>"{{ todo.title }}"</strong>を削除しますか？
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" flat>はい</v-btn>
        <v-btn color="gray" flat @click="close()">いいえ</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      dialog: false
    };
  },
	methods: {
		open() {
			this.dialog = true;
		},
		close() {
			this.dialog = false;
		}
	}
};
</script>