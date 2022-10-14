<template>
  <div id="app">
    <h1>Navegação principal do site</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">Sobre</router-link>
      <router-link to="/courses">Cursos</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
nav{
  width:fit-content;
  margin:0 auto;
  display:flex;
  gap:2px;
  margin-bottom:24px;
}
nav a{
  text-decoration:none;
  font-weight:bold;
  padding:10px 16px;
  background:#eee;
  border-radius:6px;
}

.router-link-exact-active{
  background:#84e;
  color:#fff;
  font-weight:bold;


}
</style>
