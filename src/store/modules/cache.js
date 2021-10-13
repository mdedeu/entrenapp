
export default {
    namespaced: true,
    state: {
        propsData: {}
    },
    getters: {
        getRoutine() {
            return this.state.propsData.routine
        },
        getRoutineID() {
            return this.state.propsData.routineID
        },
        getRoutineCycle() {
            return this.state.propsData.routineCycle
        },
        getRoutinesCycle() {
            return this.state.propsData.routinesCycle
        },
        getStage() {
            return this.state.propsData.stage
        },
        getSection() {
            return this.state.propsData.Section
        },
        getRoutines() {
            return this.state.propsData.routines
        },
        getExerciseDes() {
            return this.state.propsData.exerciseDes
        },
        getRoutineDes() {
            return this.state.propsData.routineDes
        },
        getExercise() {
            return this.state.propsData.exercise
        },
        getExerciseID() {
            return this.state.propsData.exerciseID
        },
        getSlug() {
            return this.state.propsData.slug
        },
        getTitle() {
            return this.state.propsData.title
        },
        getUser() {
            return this.state.propsData.user
        }
    },
    mutations: {
        push(state, element) {
            state.propsData.replace(element)
        },
        replace(state, index, element) {
            state.propsData[index] = element
        },
        splice(state, index) {
            state.propsData.splice(index, 1)
        },
        replaceAll(state, element) {
            state.propsData = element
        }
    },
    actions: {
        setRoutine({commit}, routine) {
            commit('replace', 'routine', routine)
        },
        setRoutineID({commit}, routineID) {
            commit('replace','routineID', routineID)
        },
        setRoutineCycle({commit}, routineCycle) {
            commit('replace', 'routineCycle',routineCycle)
        },
        setRoutinesCycle({commit}, routinesCycle) {
            commit('replace','routinesCycle', routinesCycle)
        },
        setStage({commit}, stage) {
            commit('replace', 'stage',stage)
        },
        setSection({commit}, Section) {
            commit('replace','Section', Section)
        },
        setRoutines({commit}, routines) {
            commit('replace', 'routines',routines)
        },
        setExerciseDes({commit}, exerciseDes) {
            commit('replace', 'exerciseDes', exerciseDes)
        },
        setRoutineDes({commit}, routineDes) {
            commit('replace', 'routineDes', routineDes)
        },
        setExercise({commit}, exercise) {
            commit('replace', 'exercise', exercise)
        },
        setExercises({commit}, exercises) {
            commit('replace', 'exercises', exercises)
        },
        setExerciseID({commit}, exerciseID) {
            commit('replace', 'exerciseID', exerciseID)
        },
        setSlug({commit}, slug) {
            commit('replace', 'slug', slug)
        },
        setTitle({commit}, title) {
            commit('replace','title', title)
        },
        setUser({commit}, user) {
            commit('replace', 'user', user)
        }
    }
}