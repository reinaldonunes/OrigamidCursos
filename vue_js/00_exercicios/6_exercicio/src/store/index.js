import Vue from 'vue'
import Vuex from 'vuex'
import Action from '@/store/action.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    completeLessons: [],
    books: [
      {
        name: "Babel-17",
        readed: true
      },
      {
        name: "Estrela Imperial",
        readed: true
      },
      {
        name: "Conto de Fadas",
        readed: false
      },
    ]
  },
  getters: {
    booksReaded(state){
      return function(status){
        return state.books.filter(book => book.readed == status)
      }
    }
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
    Action
  }
})
