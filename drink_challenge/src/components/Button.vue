<template>
<div class="btn-group btn-group-toggle" data-toggle="buttons" id="button">
  <label class="btn btn-light active">
    <input type="radio" name="options" id="option1" autocomplete="off" checked> XS
  </label>
  <label class="btn btn-light">
    <input type="radio" name="options" id="option2" autocomplete="off"> S
  </label>
  <label class="btn btn-light">
    <input type="radio" name="options" id="option3" autocomplete="off"> M
  </label>
  <label class="btn btn-light">
    <input type="radio" name="options" id="option3" autocomplete="off"> L
  </label>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
    
}
</script>

<style>
  #button{
    margin-top: 10%;
  }
</style>