<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/spencer.png" class="pic">
    <div class="heading">
      <h1>Spencer <strong class="yellow">Frost</strong></h1>
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
    float: left;
    text-align: left;
  }
  .heading h1 {
    font-size: 4rem;
    font-family: 'Chakra Petch', sans-serif;
  }
  .yellow {
    color: #FFC636;
  }
  .heading h2 {
    background-color: rgba(50, 50, 50, 0.3);
  }
</style>
