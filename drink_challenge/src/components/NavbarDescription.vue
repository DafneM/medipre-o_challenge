<template>
  <b-navbar toggleable type="light" variant="white">
    
    <b-collapse id="navbar-toggle-collapse" is-nav >
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"></b-nav-item>
        <b-nav-item href="#"></b-nav-item>
        <b-nav-item href="#" disabled></b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="justify"></b-icon>
      </template>
    </b-navbar-toggle>

     <div class="mx-auto order-0">
       <b-navbar-brand href="#"><span style="color:#4094F7; fontWeight:600">Medi</span><span style="fontWeight:600">Drinks</span></b-navbar-brand>
    </div>

  </b-navbar>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
    
}
</script>

<style>

</style>