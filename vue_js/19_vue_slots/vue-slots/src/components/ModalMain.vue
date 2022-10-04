<template>
  <div class="modal">
    <slot name="header"></slot>
    <h1>Este é um modal</h1>
    <slot></slot>
  </div>
</template>
<script>
export default{
  name: "ModalMain"
}
</script>
<style>

</style>
