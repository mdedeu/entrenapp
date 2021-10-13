
export default {
    namespaced: true,
    state: {
        propsData: {
            routine:null,
            routineID:null,
            routineCycle:null,
            routinesCycle:null,
            stage:null,
            Section:null,
            routines:null,
            exerciseDes:null,
            routineDes:null,
            exercise:null,
            exerciseID:null,
            slug:null,
            title:null,
            user:null,}
    },
    getters: {
       get(state){
           return (element)=> {
               return state.propsData[element]
           }
       },
    },
    mutations: {
        replace(state,element) {
            state.propsData[element.key] = element.value
        },
    },
    actions: {
        set({commit},element){
            commit('replace',element)
        },

    }
}