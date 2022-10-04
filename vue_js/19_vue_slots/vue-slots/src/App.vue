<template>
  <div id="app">
    <modal-main>
      <p>O &lt;slot&gt; serve para passar conteúdos da view do componenente para dentro do componente (tipo texto personalizado, botão, item, etc...)</p>
      <template v-slot:header>
        Este aqui aparece só no slot do header
      </template>
    </modal-main>
  </div>  
</template>

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
