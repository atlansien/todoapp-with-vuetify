<template>
  <div>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm6 md3>
          <v-text-field  label="Todoを入力してください" v-model="value"></v-text-field>
          <p>{{ value }}</p>
        </v-flex>
				<v-btn outline align-center color="primary" dark>送信</v-btn>
      </v-layout>
    </v-container>
		
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>