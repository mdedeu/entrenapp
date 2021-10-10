import {ExerciseApi} from "../../../API/exercise"

export default{
    namespaced:true,
    state:{
        items: []
    },
    getters:{
        findIndex(state) {
            return () => {
                return state.items
            }
        },
        getMine(state){
            return state.items
        },
        getOther(state){
            return state.items
        },
        getMuscle(state){
            return (muscle)=>{
                return state.items.filter( (item) => item.metadata.musculos.includes(muscle))
            }
        },
        getEquipacion(state){
            return state.items.filter( (item) => item.metadata.equipacion )
        },
        getDeporte(state){
            return (sport)=>{
                return state.items.filter((item)=>item.metadata.deportes.includes(sport))

            }
        }
    },
    mutations:{
        push(state, exercise) {
            state.items.push(exercise)
        },
        replace(state, index, exercise) {
            state.items[index] = exercise
        },
        splice(state, index) {
            state.items.splice(index, 1)
        },
        replaceAll(state, exercise) {
            state.items = exercise
        }
    },
    actions:{
        async create({getters, commit}, exercise) {
            const result = await ExerciseApi.add(exercise)
            if (!getters.findIndex(result))
                commit('push', result)
            return result
        },
        async modify({getters, commit}, exercise) {
            const result = await ExerciseApi.modify(exercise)
            const index = getters.findIndex(result)
            if (index >= 0)
                commit('replace', index, result)
            return result
        },
        async delete({getters, commit}, exercise) {
            await ExerciseApi.delete(exercise.id)
            const index = getters.findIndex(exercise)
            if (index >= 0)
                commit('splice', index)
        },
        async get({state, getters, commit}, exercise) {
            const index = getters.findIndex(exercise)
            if (index >= 0)
                return state.items[index]

            const result = await ExerciseApi.get()
            commit('push', result)
            return result
        },
        async getAll({commit}, controller) {
            const result = await ExerciseApi.getAll(controller)
            commit('replaceAll', result.content)
            return result.content
        }
    },


}