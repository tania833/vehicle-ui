import { updateItem } from '../../api/api';

export const updateData = {
  state: {},
  actions: {
    updateItem(state, item) {
      return updateItem(item);
    },
  },
  mutations: {},
  getters: {},
};
