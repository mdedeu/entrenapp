import Vue from 'vue'
import Vuex from 'vuex'
import security from '@/store/modules/security';
import sport from '@/store/modules/sport';
import routine from '@/store/modules/routine'
import favouriteRoutine from '@/store/modules/favouriteRoutine'
<<<<<<< HEAD
import routineCycle from '@/store/modules/routineCycle'
=======
import exercise from "./modules/exercise";
>>>>>>> 6a301570bdeda7cda4f55db62b7a82952b5b58b7

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    security:security,
    sport:sport,
    routine:routine,
    favouriteRoutine:favouriteRoutine,
<<<<<<< HEAD
    routineCycle : routineCycle
=======
    exercise:exercise
>>>>>>> 6a301570bdeda7cda4f55db62b7a82952b5b58b7
  }
})
