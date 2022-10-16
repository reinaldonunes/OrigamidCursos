import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: "Reinaldo",
        aulasCompletas: 10
    },
    mutations:{
        changeUser(state, payload){
            state.user = payload
        },
        aulasCompletas(state){
            state.aulasCompletas++
        },
        completarAulas(state){
            state.aulasCompletas = "100%"
        }
    }
})