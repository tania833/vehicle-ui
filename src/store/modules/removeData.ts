import { removeItem } from '../../api/api';

export const removeData = {
  namespaced: true,
  state: {},
  actions: {
    removeItem({ commit, dispatch }, id) {
      return removeItem(id).then((res) => {
        if (res.status === 204) {
          dispatch("collectData/getAllItems", null, { root: true });
          commit('SET_SNACK_BAR_PROPERTIES', {
            text: 'Successfully deleted!',
            color: 'green',
          }, { root: true });
          commit('SET_SNACK_BAR_STATE', true, { root: true });
        }
      })
        .catch((error) => {
          commit('SET_SNACK_BAR_PROPERTIES', {
            text: 'Error durion deletion!',
            color: 'red',
          }, { root: true });
          commit('SET_SNACK_BAR_STATE', true, { root: true });
          console.error(error);
        });
    },
  },
  mutations: {},
  getters: {},
};
