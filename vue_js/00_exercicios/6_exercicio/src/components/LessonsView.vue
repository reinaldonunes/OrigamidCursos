<template>
    <div>
      <p>Aulas</p>
      <ul>
        <li v-for="aula in lessons" :key="aula.name">
          <h5>{{ aula.name }}</h5>
          <span>{{ aula.duration }}</span>
          <br />
          <button @click="completeLessons(aula)">Completar aula</button>
        </li>
      </ul>
    </div>
  </template>


  <script>
    import { mapActions } from 'vuex';

  export default {
      name: "LessonsView",
      data(){
        return{
          lessons: [
            {
              name: "HTML e CSS",
              duration: 15
            },
            {
              name: "Javascript",
              duration: 30
            },
            {
              name: "UX Design",
              duration: 20
            },
          ]
        }
      },

      methods:{
        completeCurrentLesson(aula){
          this.$store.commit("COMPLETE_LESSON",aula)
        },

        handleClick(aula){
          this.$store.dispatch("completeLesson", aula)
        },
        ...mapActions(["completeLessons"]),
      }
  }
  </script>
  
  <style>
    ul{
      margin:0;
      padding:0;
    }
    ul li{
      list-style:none;
      text-align:center;
    }
    h5{
      margin-bottom:0;
    }
    button{
      margin-top:12px;
      border:0px;
      background:#39f;
      border-radius:6px;
      padding:8px 16px;
      cursor: pointer;
    }
    button:hover{
      background:#0F9;
    }
  </style>