<template>
    <section>
      <div>Todos os nossos cursos:</div>
      <nav>
        <router-link :to="{name: 'course', params: { course: 'Javascript'}}">Javascript</router-link>
        <router-link :to="{name: 'course', params: { course: 'Ruby on Rails'}}">Ruby on Rails</router-link>
        <router-link :to="{name: 'course', params: { course: 'Phyton'}}">Phyton</router-link>
      </nav>
      <router-view></router-view>
    </section>
</template>

<script>
export default {
  name: "CoursesPage",

  computed:{
    courseName(){
      return this.$route.params.namecourse
    }
  },

  created(){
    console.log("Esse componente foi criado.");
  },

  beforeRouteUpdate(to, from, next){
    console.log(to, from, next)
    console.log("Router atualizado.")
    next();
  }
}
</script>

<style>

</style>