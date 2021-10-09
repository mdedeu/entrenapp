import {FavouriteRoutine} from "../../../API/FavouriteRoutines";

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        findIndex(state) {
            return (routineID) => {
                return state.items.findIndex(item => item === routineID)
            }
        },
        getFavouritesId(state){
            return state.items
        }

    },
    mutations: {
        push(state, routineId) {
            state.items.push(routineId)
        },
        replace(state, index, routineId) {
            state.items[index] = routineId
        },
        splice(state, index) {
            state.items.splice(index, 1)
        },
        replaceAll(state, routineId) {
            state.items = routineId
        }
    },
    actions: {
        async create({getters, commit}, routineId) {
            await FavouriteRoutine.add(routineId)
            if (!getters.findIndex(routineId))
                commit('push', routineId)
            return routineId
        },
        async delete({getters, commit}, routineId) {
            await FavouriteRoutine.delete(routineId)
            const index = getters.findIndex(routineId)
            if (index >= 0)
                commit('splice', index)
        },
        async getAll({commit}, controller) {
            const result = await FavouriteRoutine.getAll(controller)
            commit('replaceAll', result.content)
            return result.content
        }
    },
}