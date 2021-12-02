import { updateItem } from '../../api/api';

export const updateData = {
  namespaced: true,
  state: {},
  actions: {
    updateItem({ commit }, item) {
      return updateItem(item)
        .then((res) => {
          if (res.status === 200) {
            commit(
              'SET_SNACK_BAR_PROPERTIES',
              {
                text: 'Successfully edited!',
                color: 'green',
              },
              { root: true },
            );
            commit('SET_SNACK_BAR_STATE', true, { root: true });
          }
        })
        .catch((error) => {
          commit(
            'SET_SNACK_BAR_PROPERTIES',
            {
              text: 'Error during edition',
              color: 'red',
            },
            { root: true },
          );
          commit('SET_SNACK_BAR_STATE', true, { root: true });
          console.error(error);
        });
    },
  },
  mutations: {},
  getters: {},
};
