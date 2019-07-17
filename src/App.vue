<template>
  <div>
    <v-app>
      <app-header />
      <v-content>
        <app-input />
        <app-index />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Input from "./components/Input.vue";
import Index from "./pages/todos/Index.vue";
export default {
  components: {
    appHeader: Header,
    appInput: Input,
    appIndex: Index
  },
};
</script>

