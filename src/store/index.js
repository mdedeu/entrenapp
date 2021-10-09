import Vue from 'vue'
import Vuex from 'vuex'
import security from '@/store/modules/security';
import sport from '@/store/modules/sport';
import routine from '@/store/modules/routine'
import favouriteRoutine from '@/store/modules/favouriteRoutine'

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
    favouriteRoutine:favouriteRoutine
  }
})
