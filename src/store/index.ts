import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { collectData } from './modules/collectData';
import { updateData } from './modules/updateData';
import { removeData } from './modules/removeData';
import { createData } from './modules/createData';

Vue.use(Vuex);

export function createStore(): Store<any> {
  return new Vuex.Store({
    state: {
      pageIndex: 1,
      showSnackBar: false,
      snackBarProperties: {
        text: '',
        color: '',
      },
    },
    modules: {
      collectData,
      updateData,
      removeData,
      createData,
    },
    mutations: {
      INCREMENT_PAGE_INDEX(state) {
        state.pageIndex++;
      },
      SET_SNACK_BAR_STATE(state, payload) {
        state.showSnackBar = payload;
      },
      SET_SNACK_BAR_PROPERTIES(state, payload) {
        state.snackBarProperties = payload;
      },
    },
    getters: {
      getPageIndex(state) {
        return state.pageIndex;
      },
      getSnackBarState(state) {
        return state.showSnackBar;
      },
      getSnackBarProperties(state) {
        return state.snackBarProperties;
      },
    },
  });
}
