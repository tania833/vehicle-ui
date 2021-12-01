<template>
  <div class="edit-view-container">
    <form method="post" @submit.prevent="submitForm">
      <div class="edit-view-header">
        <div class="edit-view-row">
          <span>Year</span>
          <input
            type="number"
            placeholder="number"
            v-model="itemUpdated.year"
            required
          />
        </div>
        <div class="edit-view-row">
          <span>Brand</span>
          <input
            type="text"
            placeholder="string"
            v-model="itemUpdated.brand"
            required
          />
        </div>
        <div class="edit-view-row">
          <span>Model</span>
          <input
            type="text"
            placeholder="string"
            v-model="itemUpdated.model"
            required
          />
        </div>
        <div class="edit-view-row">
          <span>Image Url</span>
          <input
            type="text"
            placeholder="string"
            v-model="itemUpdated.imageUrl"
            required
          />
        </div>
      </div>
      <div class="edit-view-main">
        <div class="edit-view-row">
          <span>Location</span>
          <input
            type="text"
            placeholder="string"
            v-model="itemUpdated.location"
            required
          />
        </div>
        <div class="edit-view-row">
          <span>Status</span>
          <input
            type="text"
            placeholder="string"
            v-model="itemUpdated.status"
            required
          />
        </div>
        <div class="edit-view-row">
          <span>Mileage</span>
          <input
            type="number"
            placeholder="number"
            v-model="itemUpdated.mileage"
            required
          />
        </div>
      </div>
      <div class="edit-view-footer">
        <div class="edit-view-row">
          <span>Price</span>
          <input
            class="edit-view-footer-input"
            type="text"
            placeholder="number"
            v-model="itemUpdated.price"
            required
          />
        </div>
      </div>
      <div class="edit-view-action-buttons">
        <button v-if="this.view === 'edit'" @click="updateView">
          <component :is="IconCancel" />
          Cancel
        </button>
        <button type="submit">
          <component :is="SubmitIcon" />
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import SubmitIcon from "../../../assets/spriteSvg/SubmitIcon.vue";
import IconCancel from "../../../assets/spriteSvg/IconCancel.vue";
export default {
  name: "EditView",
  props: {
    itemId: Number,
    view: String,
  },
  data: () => ({
    itemUpdated: {
      id: "",
      year: "",
      brand: "",
      model: "",
      imageUrl: "",
      location: "",
      status: "",
      mileage: "",
      price: "",
    },
    SubmitIcon,
    IconCancel,
  }),
  methods: {
    updateView: function () {
      this.$emit("input", "main");
    },
    updateEmptyView: function () {
      this.$emit("input", "empty");
    },
    submitForm() {
      const { itemUpdated } = this;

      if (this.view === "edit") {
        this.$store
          .dispatch("updateItem", itemUpdated)
          .then((res) => {
            if (res.status === 200) {
              this.$emit("showSnackBar", {
                text: "Successfully edited!",
                color: "green",
              });
              this.updateView();
            }
          })
          .catch((error) => {
            this.$emit("showSnackBar", {
              text: "Error during edition",
              color: "red",
            });
            console.error(error);
            this.updateView();
          });
      }
      if (this.view === "create") {
        this.$store
          .dispatch("createItem", itemUpdated)
          .then((res) => {
            if (res.status === 201) {
              this.$emit("showSnackBar", {
                text: "Successfully created!",
                color: "green",
              });
              this.updateEmptyView();
              this.resetForm();
            }
          })
          .catch((error) => {
            this.$emit("showSnackBar", {
              text: "Error during creation",
              color: "red",
            });
            console.error(error);
            this.updateEmptyView();
            this.resetForm();
          });
      }
    },
    resetForm() {
      this.itemUpdated = {
        id: "",
        year: "",
        brand: "",
        model: "",
        imageUrl: "",
        location: "",
        status: "",
        mileage: "",
        price: "",
      };
    },
  },
  watch: {
    view() {
      if (this.view === "edit") {
        this.$store.dispatch("getItemById", `${this.itemId}`).then((res) => {
          this.itemUpdated = res[0];
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-view {
  &-container {
    padding: 20px 20px 5px;
  }
  &-row {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    :first-child {
      font-weight: 900;
      font-size: 10px;
      line-height: 12px;
      color: $secondary-black;
      text-transform: uppercase;
    }
    input {
      border: none;
      font-style: italic;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      text-align: right;
      color: $primary-grey;
      &:valid {
        font-style: normal;
        color: $secondary-black;
      }
    }
  }
  &-header {
    border-bottom: 1px solid #ebebeb;

    .edit-view-row:last-of-type {
      margin-bottom: 20px;
    }
  }
  &-main {
    padding: 15px 0 5px;
    border-bottom: 1px solid #ebebeb;
  }
  &-footer {
    height: 54px;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    align-items: center;
    .edit-view-row {
      margin: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      letter-spacing: 0.05em;

      :first-child {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
  &-action-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 900;
      font-size: 10px;
      line-height: 12px;
      text-transform: uppercase;

      svg {
        margin-right: 10px;
      }
    }
    :first-child {
      color: $primary-black;
    }
    :last-child {
      margin-left: auto;
      color: $submit-color;
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
