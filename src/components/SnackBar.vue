<template>
  <v-snackbar v-model="snackbar">
    {{ snackBarProperties.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        :color="snackBarProperties.color"
        text
        v-bind="attrs"
        @click="closeSnackBar"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
export default {
  name: 'SnackBar',
  props: {
    text: String,
    color: String,
  },
  data: () => ({}),
  computed: {
    snackbar() {
      return this.$store.getters.getSnackBarState;
    },
    snackBarProperties() {
      return this.$store.getters.getSnackBarProperties;
    },
  },
  methods: {
    closeSnackBar() {
      this.$store.commit('SET_SNACK_BAR_STATE', false);
    },
  },
};
</script>
