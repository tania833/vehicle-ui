import { createItem } from '../../api/api'

export const createData = {
    state: {
    },
    actions: {
        createItem(state, item) {
            return createItem(item).catch((error) => {
                console.error(error)
            });
        }
    },
    mutations: {
    },
    getters: {
    },
}