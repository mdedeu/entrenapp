import {RoutineApi} from "../../../API/Routine"

export default{
    namespaced:true,
    state:{
      items: []
    },
    getters:{
        findIndex(state) {
            return (routine) => {
                return state.items.findIndex(item => item.id === routine.id)
            }
        },
        getMine(state){
            return (userID)=>{
                return state.items.filter( (item) => item.user.id === (userID))
            }
        },
        getOther(state){
            return (userID)=>{
                return state.items.filter( (item) => item.user.id != (userID))
            }
        },

    },
    mutations:{

        push(state, routine) {
            state.items.push(routine)
        },
        replace(state, index, routine) {
            state.items[index] = routine
        },
        splice(state, index) {
            state.items.splice(index, 1)
        },
        replaceAll(state, routine) {
            state.items = routine
        }
    },
    actions:{
        async create({getters, commit}, routine) {
            const result = await RoutineApi.add(routine)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, routine) {
            const result = await RoutineApi.modify(routine)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, routine) {
            await RoutineApi.delete(routine.id)
            const index = getters.findIndex(routine)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, routine) {
            const index = getters.findIndex(routine)
            if (index >= 0)
                return state.items[index]

            const result = await RoutineApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await RoutineApi.getAll(controller)
            commit('replaceAll', result.content)
            return result.content
        },
    },


}