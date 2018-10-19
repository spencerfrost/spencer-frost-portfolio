<template>
  <div id="app">
    <app-header></app-header>
    <br>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    appHeader: Header
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #00ADA9;
  background-image: url(./assets/3px-tile.png);
  height: 100vh;
  padding: 20px;
}
</style>
