<template>
  <p>
    Aluno {{ completeLessons }}
  </p>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "StudentView",
    computed:{
      ...mapState(["completeLessons"])
    }
}
</script>

<style>

</style>