import { createItem } from '../../api/api';

export const createData = {
  state: {},
  actions: {
    createItem(state, item) {
      return createItem(item);
    },
  },
  mutations: {},
  getters: {},
};
