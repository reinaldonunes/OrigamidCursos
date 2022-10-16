export default{
    namespaced: true,
    state: {
        action: null
    },
    mutations:{
        UPDATE_ACTION(state, payload){
            state.action = payload
          }
    },
    actions:{
        getAction(context){
            fetch("https://type.fit/api/quotes")
              .then(response => response.json)
              .then(response => {
                context.commit("UPDATE_ACTION", response)
              })
          }
    }
}