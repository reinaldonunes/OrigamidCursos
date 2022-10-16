<template>
    <div>
        <p>
        Curso de Javascript
        </p>
        <LessonsView></LessonsView>
    </div>
  </template>


  <script>
    import LessonsView from '@/components/LessonsView.vue';

  export default {
      name: "CoursesView",
      components:{
        LessonsView
      }
  }
  </script>
  
  <style>
  
  </style>