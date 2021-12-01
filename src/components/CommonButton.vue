<template>
  <button class="common-button" @click="clickMethod">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name: 'CommonButton',
  props: {
    text: String,
    clickMethod: Function,
  },
};
</script>

<style lang="scss" scoped>
.common-button {
  width: 160px;
  height: px(40);
  border-radius: 10px;
  background-color: $secondary-black;
  font-weight: 900;
  font-size: px(12);
  line-height: px(14);
  letter-spacing: 0.05em;
  color: $primary-white;
  text-transform: uppercase;
}
.disabled {
  background-color: grey;
  cursor: initial;
}
</style>
