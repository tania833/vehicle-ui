<template>
  <div class="main-view-container">
    <div class="main-view-header">
      <span>{{ item.year }}</span>
      <span>{{ item.brand }}</span>
      <span>{{ item.model }}</span>
    </div>
    <div class="main-view-main">
      <div class="main-view-media">
        <div class="main-view-image">
          <img :src="item.imageUrl" :alt="item.model" />
        </div>
        <div class="main-view-action-buttons">
          <span class="edit-icon-container" @click="updateView">
            <component :is="IconEdit" />
          </span>
          <span class="remove-icon-container" @click="removeCardItem(item.id)">
            <component :is="IconRemove" />
          </span>
        </div>
      </div>
      <div class="main-view-content-container">
        <div class="main-view-content">
          <div class="main-view-content-row">
            <span>Location</span>
            <span>{{ item.location }}</span>
          </div>
          <div class="main-view-content-row">
            <span>Status</span>
            <span>{{ item.status }}</span>
          </div>
          <div class="main-view-content-row">
            <span>Mileage</span>
            <span>{{ numberFormatter(item.mileage) }}KM</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main-view-footer">
      <div class="main-view-footer-row">
        <span>PRICE</span>
        <span>{{ numberFormatter(item.price) }}$</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IconEdit from "../../../assets/spriteSvg/IconEdit.vue";
import IconRemove from "../../../assets/spriteSvg/IconRemove.vue";

export default {
  name: "MainView",
  props: {
    view: String,
    item: Object,
  },
  data: () => ({
    IconEdit,
    IconRemove,
  }),
  methods: {
    numberFormatter(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    removeCardItem(id) {
      this.$emit("removeItem", id);
    },
    updateView: function () {
      this.$emit("input", "edit");
    },
  },
};
</script>

<style lang="scss" scoped>
.main-view {

  &-header {
    padding: 0 20px 11px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 40px;
    background-color: $secondary-black;
    font-size: px(10);
    font-weight: 900;
    line-height: px(12);
    color: $primary-white;

    :nth-child(2) {
      font-size: px(14);
      line-height: px(16);
    }
    :last-child {
      font-weight: 500;
    }
  }
  &-media {
    position: relative;
  }
  &-image {
    height: 135px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &-action-buttons {
    position: absolute;
    right: 20px;
    bottom: 10px;
    display: flex;
    justify-content: space-between;
    width: 40px;
    span {
      height: 15px;
    }
    svg {
      fill: $primary-white;
      &:hover {
        transform: scale(1.2, 1.2);
        cursor: pointer;
      }
    }
  }
  &-content-container {
    padding: 0 20px;
  }
  &-content {
    padding: 15px 0;
    border-bottom: 1px solid #ebebeb;

    &-row {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-size: px(10);
      line-height: px(12);
      :first-child {
        font-weight: 900;
        color: $secondary-black;
        text-transform: uppercase;
      }
      :last-child {
        font-weight: 500;
        color: $primary-black;
        text-transform: capitalize;
      }
    }
    :last-child {
      margin-bottom: 0;
    }
  }
  &-footer {
    padding: 0 20px 5px;
    position: relative;
    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 54px;
      width: 100%;
      font-weight: 900;
      color: $secondary-black;
      letter-spacing: 0.05em;

      :first-child {
        font-size: px(12);
        line-height: px(14);
      }
      :last-child {
        font-style: italic;
        font-size: px(14);
        line-height: px(16);
      }
    }
  }
}
</style>
