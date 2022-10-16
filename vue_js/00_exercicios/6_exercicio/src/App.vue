<template>
  <div id="app">
    <StudentView></StudentView>
    <CoursesView></CoursesView>
    <h2>Livros</h2>
    <ul>
      <li v-for="book in $store.state.books" :key="book.name">
        <p>
          <strong>{{ book.name }}</strong>
        </p>
      </li>
    </ul>

    <h2>Livros lidos</h2>
    <ul>
      <li v-for="book in $store.getters.booksReaded" :key="book.name">
        <p>
          <strong>{{ book.name }}</strong>
        </p>
      </li>
    </ul>

    <h2>Livros lidos [ com maping ]</h2>
    <ul>
      <li v-for="book in booksReaded(false)" :key="book.name">
        <p>
          <strong>{{ book.name }}</strong>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import StudentView from '@/components/StudentView.vue';
import CoursesView from '@/components/CourseView.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components:{
    StudentView,
    CoursesView
  },
  computed:{
    ...mapGetters(["booksReaded"]) 
  },
  created(){
    this.$store.dispatch("getAction")
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
