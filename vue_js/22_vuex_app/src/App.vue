<template>
  <div id="app">
    <UserInfo></UserInfo>
   <CursoApp></CursoApp>
  </div>
</template>

<script>
  import CursoApp from '@/components/CursoApp.vue'
  import UserInfo from '@/components/UserInfo.vue'

export default {
  name: 'App',
  components: {
    CursoApp,
    UserInfo
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
