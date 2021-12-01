<template>
  <button class="common-button" @click="clickMethod">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name: "CommonButton",
  props: {
    text: String,
    clickMethod: Function,
  },
};
</script>

<style lang="scss" scoped>
.common-button {
  width: 160px;
  height: 40px;
  border-radius: 10px;
  background-color: $secondary-black;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  color: $primary-white;
  text-transform: uppercase;
}
</style>
