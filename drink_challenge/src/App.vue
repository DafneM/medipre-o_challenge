<template>
  <div id="app">

    <Navbar />
    <router-view path="$router.key" />

  </div>
</template>

<script>
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
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
}
</style>
