import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { collectData } from './modules/collectData'
import { updateData } from './modules/updateData'
import { removeData } from './modules/removeData'
import { createData } from './modules/createData'

Vue.use(Vuex);

export function createStore(): Store<any> {
  return new Vuex.Store({
    state: {
      pageIndex: 1
    },
    modules: {
      collectData,
      updateData,
      removeData,
      createData
    },
    mutations: {
      INCREMENT_PAGE_INDEX(state) {
        state.pageIndex ++;
      },
    },
    getters: {
      getPageIndex(state) {
        return state.pageIndex;
      },
    },
  });
}

