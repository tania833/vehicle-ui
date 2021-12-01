<template>
  <div class="empty-card-container">
    <div class="empty-card-button" @click="updateView">
      <component :is="IconAdd" />
    </div>
  </div>
</template>

<script>
import IconAdd from "../../../assets/spriteSvg/IconAdd.vue";
export default {
  name: "EmptyCard",
  data: () => ({
    IconAdd,
  }),
  methods: {
    updateView: function () {
      this.$emit("input", "create");
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 320px;
  background: #ffffff;
  border-radius: 10px;

  .empty-card-button {
    svg {
      fill: $primary-black;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.2, 1.2);
        opacity: 0.85;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .empty-card {
    &-container {
      height: 340px;
    }
  }
}

@media screen and (max-width: 425px) {
  .empty-card {
    &-container {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
