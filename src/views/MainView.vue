<template>
  <div class="main-view-container">
    <div class="main-view-container-inner">
      <div class="main-view-content">
        <CommonCard :cardItem="{}" />
        <CommonCard
          v-for="(item, index) in dataToRender"
          :key="index"
          :cardItem="item"
        />
      </div>
      <div class="main-view-button-container">
        <a href="#button">
          <CommonButton :text="'Show more'" :clickMethod="showMore" />
        </a>
        <a name="button"></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CommonCard from "../components/Cards/CommonCard.vue";
import CommonButton from "../components/CommonButton.vue";
export default {
  name: "MainView",
  components: {
    CommonCard,
    CommonButton,
  },
  computed: {
    responseData() {
      return this.$store.getters.getCollectedData;
    },
    pageIndex() {
      return this.$store.getters.getPageIndex;
    },
    itemsNumber() {
      return this.pageIndex * 7;
    },
    dataToRender() {
      if (this.responseData.length) {
        let items = this.responseData;
        if (this.responseData.length < this.itemsNumber) {
          items = items.reverse().slice(0, this.responseData.length);
        } else {
          items = items.reverse().slice(0, this.itemsNumber);
        }
        return items;
      }
      return [];
    },
  },
  methods: {
    showMore() {
      if (Math.ceil(this.responseData.length / 7) > this.pageIndex) {
        this.$store.commit("INCREMENT_PAGE_INDEX");
      }
    },
  },
  created() {
    this.$store.dispatch("getAllItems");
  },
};
</script>

<style lang="scss" scoped>
.main-view {
  &-container {
    padding: 80px 0 0;
    background-color: $base-background;
    font-family: $base_fontFamily;
    &-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    justify-items: flex-start;
    flex-wrap: wrap;
    max-width: 1120px;
  }
  &-button-container {
    padding: 50px 0 76px;
    text-align: center;
  }
}
</style>
