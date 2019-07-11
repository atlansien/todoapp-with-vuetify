<template>
  <div>
    <v-app>
      <app-header />
      <v-content>
        <app-input />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Input from "./components/Input.vue";
export default {
  components: {
    appHeader: Header,
    appInput: Input
  }
};
</script>

