<template>
  <div>
    <button @click="estoque++">Adicionar Estoque</button>
    <button @click="estoque = 0">Deletar Estoque</button>

    <transition name="fade" mode="out-in">
      <p v-if="estoque > 0" key="estoque">{{ estoque }} itens em estoque.</p>
      <p v-else key="esgotado">Produto fora de estoque.</p>
    </transition>
  </div>
</template>

<script>
import transition from './transition.vue'
export default {
  data(){
    return{
      estoque: 0
    }
  },
  components: { transition },

}
</script>

<style>
.v-enter-active,
.v-leave-active{
  transition: opacity .3s;
}

.v-enter,
.v-leave-to{
  opacity: 0;
}

</style>