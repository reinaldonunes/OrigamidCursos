import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    completeLessons: []
  },
  getters: {
  },
  mutations: {
    COMPLETE_LESSON(state,payload){
      state.completeLessons.push(payload)
    }
  },
  actions: {
    completeLessons(context, payload){
      context.commit("COMPLETE_LESSON",payload)

    }
  },
  modules: {
  }
})
