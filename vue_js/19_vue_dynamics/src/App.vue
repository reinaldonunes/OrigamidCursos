<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li @click="abaAtiva = 'SobreEmpresa'">Sobre</li>
      <li @click="abaAtiva = 'ServicosEmpresa'">Serviços</li>
      <li @click="abaAtiva = 'ContatoEmpresa'">Contato</li>
    </ul>
    <keep-alive>
      <component :is="abaAtiva"></component>
    </keep-alive>
  </div>
</template>

<script>
import SobreEmpresa from './components/SobreEmpresa.vue'
import ServicosEmpresa from './components/ServicosEmpresa.vue'
import ContatoEmpresa from './components/ContatoEmpresa.vue'

export default {
  name: 'App',
  components: {
    SobreEmpresa,
    ServicosEmpresa,
    ContatoEmpresa
  },
  data(){
    return{
      abaAtiva: "SobreEmpresa"
    }
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
