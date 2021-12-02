import { createItem } from '../../api/api';

export const createData = {
  namespaced: true,
  state: {},
  actions: {
    createItem({ commit }, item) {
      return createItem(item)
        .then((res) => {
          if (res.status === 201) {
            commit(
              'SET_SNACK_BAR_PROPERTIES',
              {
                text: 'Successfully created!',
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
              text: 'Error during creation',
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
