<template>
  <div>
    <button @click="ativo = !ativo">Ativar</button>
    <transition
      name="fade"
      enter-active-class="showing"
      enter-to-class="animated"
    >
      <h1 v-if="ativo">Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ativo: false
    }
  }
}
</script>

<style>
  .v-enter-active,
  .v-leave-active{
    transition: opacity .3s;
  }

  .showing{
    transition: opacity .3s;
  }
  .animated{
    color:rgb(150, 0, 0);
  }

  .v-enter,
  .v-leave-to{
    opacity: 0;
  }
</style>