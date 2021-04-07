<template>
   <div>
  <b-navbar toggleable="sm" type="light" variant="white" class="navbar" >
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <ul class="nav flex-column">
      <li class="nav-item">
        <b-navbar-brand class="medidrinks">Medi<span style="color:#4094F7">Drinks</span></b-navbar-brand>
      </li>
      <li class="nav-item">
        <img src="../assets/Locationmarker.png" class="d-inline-block align-top" alt="Location">
        <b-button id="link-location" variant="link" href="https://www.google.com.br/maps/place/Bras%C3%ADlia+-+DF/@-15.7092701,-48.2414571,11z/data=!4m5!3m4!1s0x935a3d18e45b91a3:0x24e8d3620bd85d7f!8m2!3d-15.826691!4d-47.9218204">Brasília, DF</b-button>
      </li>
    </ul>

    <b-navbar-nav class="ml-auto">

          <b-button variant="white">
            <img src="../assets/image32.png" class="d-inline-block align-top" alt="email">
            @luizfrombrasil
            </b-button>
      </b-navbar-nav>
  </b-navbar>
  <hr>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default{
    name: "NavbarList",
};
</script>

<style scoped>
.medidrinks{
  font-weight: 600;
  margin-top: 20%;
}
.navbar{
  height: 8vh;
}
  #location{
    text-decoration: none;
    color: black;
  }
</style>