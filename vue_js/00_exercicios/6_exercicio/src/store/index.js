import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    completeLessons: [],
    action: null,
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
    },
    UPDATE_ACTION(state, payload){
      state.action = payload
    }
  },
  actions: {
    completeLessons(context, payload){
      context.commit("COMPLETE_LESSON",payload)

    },
    getAction(context){
      fetch("https://type.fit/api/quotes")
        .then(response => response.json)
        .then(response => {
          context.commit("UPDATE_ACTION", response)
        })
    }
  },
  modules: {
  }
})
