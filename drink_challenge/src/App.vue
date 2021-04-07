<template>
  <div id="app">

    <router-view path="$router.key" />

  </div>
</template>

<script>
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
