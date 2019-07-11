<template>
  <div>
    <v-app>
      <app-header />
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  }
};
</script>

