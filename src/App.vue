<template>
  <v-app>
    <MainView />
  </v-app>
</template>

<script lang="ts">
import MainView from './views/MainView.vue';

export default {
  name: 'App',
  components: {
    MainView,
  },

  data: () => ({}),
};
</script>

<style lang="scss">
html {
  background-color: $base-background;
  scroll-behavior: smooth;

  @media screen and (max-width: 1200px) {
    font-size: 22px !important;
  }
  @media screen and (max-width: 900px) {
    font-size: 24px !important;
  }
}
</style>
