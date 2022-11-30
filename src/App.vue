<template>
  <div id="app">
    <TheIndex gm="Good Morning"/>
  </div>
</template>

<script>
import TheIndex from './components/TheIndex.vue'

export default {
  name: 'App',
  components: {
    TheIndex
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
