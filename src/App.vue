<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
   /* 高度是继承的，这个盒子是body下的第一个子容器 */
    height: 100%;
}
</style>
