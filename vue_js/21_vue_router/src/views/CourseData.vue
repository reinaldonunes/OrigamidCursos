<template>
  <div>
    <h1>{{ curso }}</h1>
    <router-link :to="{name:'lessons'}">Aulas</router-link>
    <router-link :to="{name:'description'}">Descrição</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CursoData",
  props: ["curso"],

  beforeRouteUpdate(to, from, next){
    console.log(to, from, next)
    console.log("Router atualizado.")
    next();
  }
}
</script>

<style>

</style>