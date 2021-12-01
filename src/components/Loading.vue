<template>
  <div class="data-loading">
    <div>
      <font-awesome-icon icon="spinner" class="loading-icon" />
      Loading
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style lang="scss" scoped>
.data-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: $secondary-black;
  font-size: 20px;
}
.loading-icon {
  color: $secondary-black;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
