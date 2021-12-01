import { removeItem } from '../../api/api'

export const removeData = {
    state: {
    },
    actions: {
        removeItem(state, id) {
            return removeItem(id).catch((error) => {
                console.error(error)
            });
        }
    },
    mutations: {
    },
    getters: {
    },
}