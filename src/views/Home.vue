<template>
  <div class="home">
    
    <div class="heading">
      <h1>Call  <strong class="yellow">Mom</strong></h1>
      <img src="../assets/spencer.png" class="pic mb-3">
      <br>
      <h2>Front-end Developer / Wordpress Dabbler</h2>
      <br>
      <div class="btn-group mt-3">
        <button class="btn btn-info mr-3 border">My LinkedIn</button>
        <button class="btn btn-info">My GitHub</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style>
  .heading {
    text-align: center;
    margin: 0 auto;
  }
  .heading h1 {
    font-size: 4rem;
    font-family: 'Chakra Petch', sans-serif;
  }
  .yellow {
    color: #FFC636 !important;
  }
  .heading h2 {
    background-color: rgba(50, 50, 50, 0.3);
    display: inline-block;
    padding: 4px;
  }
  .pic {
    /* float: right; */
  }
</style>
