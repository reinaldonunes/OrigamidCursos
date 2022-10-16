<template>
    <div>
        <p>Curso</p>
        <AulaApp></AulaApp>
    </div>
</template>

<script>
import AulaApp from '@/components/AulaApp.vue';

export default {
  name: 'CursoApp',
  components:{
    AulaApp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
