<template>
  <v-dialog v-model="isOpen" scrollable max-width="50%">
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
      isOpen: false
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
};
</script>