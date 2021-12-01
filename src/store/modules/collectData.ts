import { getAllItems, getItemById } from '../../api/api';

export const collectData = {
  state: {
    collectedData: {},
  },
  actions: {
    getAllItems({ commit }) {
      return getAllItems()
        .then((res) => {
          if (res.status === 200) {
            commit('SET_COLLECTED_DATA', res.data);
          }
        })
        .catch((error) => {
          commit('SET_SNACK_BAR_PROPERTIES', {
            text: 'Failed to Load Data',
            color: 'red',
          });
          commit('SET_SNACK_BAR_STATE', true);
          console.error(error);
        });
    },
    getItemById(state, payload) {
      return getItemById(payload)
        .then((res) => res.data)
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mutations: {
    SET_COLLECTED_DATA(state, payload) {
      state.collectedData = payload;
    },
  },
  getters: {
    getCollectedData(state) {
      return state.collectedData;
    },
  },
};
