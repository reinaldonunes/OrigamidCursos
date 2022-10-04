<template>
  <div id="app">
    <button @click="componentActived = 'DescriptionLesson'">Descrição</button>
    <button @click="componentActived = 'DownloadLesson'">Download</button>
    <component :is="componentActived"></component>
  </div>  
</template>
<script>
  import DownloadLesson from "./components/DescriptionLesson.vue";
  import DescriptionLesson from "./components/DescriptionLesson.vue";

  export default{
    name: 'AboutView',
    components:{
      DescriptionLesson,
      DownloadLesson
    },
    data(){
      return{
        componentActived: DescriptionLesson
      }
    }
  }
</script>
