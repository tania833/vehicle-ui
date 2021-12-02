<template>
  <div class="main-view-container">
    <div v-if="!isDataLoaded" class="main-view-loading">
      <Loading />
    </div>
    <div v-else class="main-view-container-inner">
      <div class="main-view-content">
        <CommonCard :cardItem="{}" />
        <CommonCard
          v-for="(item, index) in dataToRender"
          :key="index"
          :cardItem="item"
        />
      </div>
      <div class="main-view-button-container" v-if="responseData.length">
        <a href="#button">
          <CommonButton
            :text="'Show more'"
            :clickMethod="showMore"
            :class="{ disabled: !isAnythingToShow }"
          />
        </a>
        <a name="button"></a>
      </div>
    </div>

    <div class="main-view-utilities">
      <div class="snack-bar-container">
        <SnackBar />
      </div>

      <span
        class="scroll-button-container"
        v-if="scrollpx > 250"
        @click="scrollTop"
      >
        <v-btn class="mx-2" fab dark large color="black">
          <v-icon dark> mdi-chevron-up </v-icon>
        </v-btn>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import CommonCard from '../components/Cards/CommonCard.vue';
import CommonButton from '../components/CommonButton.vue';
import Loading from '../components/Loading.vue';
import SnackBar from '../components/SnackBar.vue';
export default {
  name: 'MainView',
  components: {
    CommonCard,
    CommonButton,
    Loading,
    SnackBar,
  },
  data() {
    return {
      scrollpx: 0,
      isDataLoaded: false,
    };
  },
  computed: {
    responseData() {
      return this.$store.getters['collectData/getCollectedData'];
    },
    pageIndex() {
      return this.$store.getters.getPageIndex;
    },
    itemsToShowNumber() {
      return this.pageIndex * 7;
    },
    reversedItems() {
      let items = this.responseData;
      items = items.reverse();
      return items;
    },
    dataToRender() {
      if (this.responseData.length) {
        let items = this.reversedItems;
        if (this.responseData.length < this.itemsToShowNumber) {
          items = items.slice(0, this.responseData.length);
        } else {
          items = items.slice(0, this.itemsToShowNumber);
        }
        return items;
      }
      return [];
    },
    isAnythingToShow() {
      return Math.ceil(this.responseData.length / 7) > this.pageIndex;
    },
  },
  methods: {
    showMore() {
      if (this.isAnythingToShow) {
        this.$store.commit('INCREMENT_PAGE_INDEX');
      }
    },
    handleScroll() {
      this.scrollpx = window.scrollY;
    },
    scrollTop() {
      window.scroll(0, 0);
    },
    showSnackBar({ text, color }) {
      this.$store.commit('SET_SNACK_BAR_PROPERTIES', {
        text,
        color,
      });
      this.$store.commit('SET_SNACK_BAR_STATE', true);
    },
  },
  created() {
    this.$store.dispatch('collectData/getAllItems').then(() => {
      this.isDataLoaded = true;
    });
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.onload = this.scrollTop;
  },
};
</script>

<style lang="scss" scoped>
.main-view {
  &-container {
    position: relative;
    padding: 80px 0 0;
    background-color: $base-background;
    font-family: $base_fontFamily;
    height: 100%;
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
    height: 5px;
    width: 100%;
    padding: 50px 0 76px;
    text-align: center;
  }
  &-loading {
    height: 100%;
  }
  &-utilities {
    .snack-bar-container {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .scroll-button-container {
      position: fixed;
      bottom: 30px;
      right: 30px;
    }
  }
}
</style>
