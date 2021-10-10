import {RoutineCycleApi} from "../../../API/RoutineCycle"

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
        getRoutine(state) {
            return state.items
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
        async create({getters, commit}, info) {
            const result = await RoutineCycleApi.add(info)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, info) {
            const result = await RoutineCycleApi.modify(info)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, info) {
            await RoutineCycleApi.delete(info)
            const index = getters.findIndex(info)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, info) {
            const index = getters.findIndex(info)
            if (index >= 0)
                return state.items[index]

            const result = await RoutineCycleApi.get(info)
            commit('push', result)
            return result
        },
        async getAll({commit}, controller,info) {
            const result = await RoutineCycleApi.getAll(info,controller)
            commit('replaceAll', result.content)
            return result.content
        },
    },


}