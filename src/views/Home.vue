<template>
  <div class="home">
    
    <div class="heading">
      <h1>Spencer <strong class="yellow">Frost</strong></h1>
      <img src="../assets/spencer.png" class="pic">
        <h2>Front-end Developer / Wordpress Dabbler</h2>
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
  }
  .pic {
    /* float: right; */
  }
</style>
