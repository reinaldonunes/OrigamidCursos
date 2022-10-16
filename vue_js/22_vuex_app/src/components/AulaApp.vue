<template>
    <div>
        <p>Usuário => {{ user }}</p>
        <p>Total de Aulas => {{ totalAulas }}</p>
        <p>Aulas Completadas => {{ aulasCompletas }}</p>
        <button @click="handleClick">Toggle User</button>
        <button @click="completarAulas">Finalizar aulas</button>
    </div>
  </template>
  
  <script>
import { mapState, mapMutations } from "vuex";

  export default {
    name: 'AulaApp',
    data(){
        return{
            totalAulas: 25,
        }
    },
    computed:{
        ...mapState(["user" , "aulasCompletas"]) ,

        user(){
            return this.$store.state.user
        },
        aulasCompletas(){
            return this.$store.state.aulasCompletas
        },
    },
    methods:{
        handleClick(){
            this.$store.commit("changeUser","Reinaldo José Nunes");
            this.$store.commit("aulasCompletas")
        },
        completarAulas(){
            this.completarAulas();
        },
        ...mapMutations(["completarAulas"])
        
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  