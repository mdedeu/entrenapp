import Vue from 'vue'
import Vuex from 'vuex'
import security from '@/store/modules/security';
import sport from '@/store/modules/sport';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    security,
    sport
  }
})
