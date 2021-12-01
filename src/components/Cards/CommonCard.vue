<template>
  <div class="common-card-container">
    <fade-transition>
      <div v-if="view === 'empty'">
        <EmptyView v-model="view" :view="view" />
      </div>
    </fade-transition>

    <fade-transition>
      <div v-if="view === 'main'">
        <MainView
          :view="view"
          :item="cardItem"
          v-model="view"
          v-on:removeItem="removeItem"
        />
      </div>
    </fade-transition>
    <div v-show="view === 'edit' || view === 'create'">
      <EditView :itemId="cardItem.id" v-model="view" :view="view" />
    </div>
  </div>
</template>

<script>
import EditView from "./Views/EditView.vue";
import MainView from "./Views/MainView.vue";
import EmptyView from "./Views/EmptyView.vue";

export default {
  name: "CommonCard",
  props: {
    cardItem: Object,
  },
  components: {
    EditView,
    MainView,
    EmptyView,
  },
  data: () => ({
    view: "",
  }),
  methods: {
    numberFormatter(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    removeItem(id) {
      this.$store.dispatch("removeItem", id.toString()).then((res) => {
        if (res.status === 204) {
          this.$store.dispatch("getAllItems");
        }
      });
    },
  },
  watch: {
    view() {
      if (this.view === "main" || this.view === "empty") {
        this.$store.dispatch("getAllItems");
      }
    },
  },
  created() {
    if (!Object.entries(this.cardItem).length) {
      this.view = "empty";
    } else {
      this.view = "main";
    }
  },
};
</script>

<style lang="scss" scoped>
.common-card {
  &-container {
    margin: 20px;
    width: 240px;
    height: 320px;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
  }
}

@media screen and (max-width: 1024px) {
  .common-card {
    &-container {
      height: 340px;
    }
  }
}

@media screen and (max-width: 425px) {
  .common-card {
    &-container {
      width: 80%;
      margin: 10px;
    }
  }
}
</style>
