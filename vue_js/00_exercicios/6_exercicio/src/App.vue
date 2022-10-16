<template>
  <div id="app">
    <StudentView></StudentView>
    <CoursesView></CoursesView>
  </div>
</template>

<script>
import StudentView from '@/components/StudentView.vue';
import CoursesView from '@/components/CourseView.vue';

export default {
  name: 'App',
  components:{
    StudentView,
    CoursesView
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
