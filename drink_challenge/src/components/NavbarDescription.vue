<template>
  <b-navbar toggleable type="light" variant="light">

    <ul class="nav navbar-nav navbar-center">
        <b-navbar-brand href="#"><span style="color:#4094F7">Medi</span>Drinks</b-navbar-brand>
    </ul>
    
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link 1</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="justify"></b-icon>
      </template>
    </b-navbar-toggle>
  </b-navbar>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
    
}
</script>

<style>

</style>