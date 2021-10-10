import {FavouriteExercise} from "../../../API/favouriteExercise";

export default {
    namespaced: true,
    state: {
        items: []
    },

    getters: {
        findIndex(state) {
            return (exerciseId) => {
                return state.items.findIndex(item => item === exerciseId)
            }
        },
        getFavouritesId(state){
            return state.items
        },
        isFavourite(state){
            return  state.items.map( (item) => { return item.id } )
        }

    },

    mutations: {
        push(state, exerciseId) {
            state.items.push(exerciseId)
        },
        replace(state, index, exerciseId) {
            state.items[index] = exerciseId
        },
        splice(state, index) {
            state.items.splice(index, 1)
        },
        replaceAll(state, exerciseId) {
            state.items = exerciseId
        }
    },
    actions: {
        async create({getters, commit}, exerciseId) {
            await FavouriteExercise.add(exerciseId)
            if (!getters.findIndex(exerciseId))
                commit('push', exerciseId)
            return exerciseId
        },
        async delete({getters, commit}, exerciseId) {
            await FavouriteExercise.delete(exerciseId)
            const index = getters.findIndex(exerciseId)
            if (index >= 0)
                commit('splice', index)
        },
        async getAll({commit}, controller) {
            const result = await FavouriteExercise.getAll(controller)
            commit('replaceAll', result.content)
            return result.content
        }
    },
}