import { getAllItems, getItemById } from "../../api/api";

export const collectData = {
    state: {
        collectedData: {}
    },
    actions: {
        getAllItems({ commit }) {
            return getAllItems().then(res => {
                commit('SET_COLLECTED_DATA', res.data)
            }).catch((error) => {
                console.error(error)
            });
        },
        getItemById(state, payload) {
            return getItemById(payload).then(res => res.data).catch((error) => {
                console.error(error)
            });
        }
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
}