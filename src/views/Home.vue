<template>
  <div class="home">
    
    <div class="heading">
      <h1>Spencer  <strong class="yellow">Frost</strong></h1>
      <div style="display: inline-block;" @mouseover="hovered = true" @mouseout="hovered = false">
        <transition name="flip" mode="out-in">
          <img src="../assets/spencer.png" class="pic mb-3" v-if="!hovered">
          <img src="../assets/spenceroutline.png" class="pic mb-3" v-else>
        </transition>
      </div>
      <br>
      <h2 class="yellow">Front-end Developer / Wordpress Dabbler</h2>
      <br>
      <div class="btn-group mt-3">
        <img src="../assets/linkedin.png" class="logos mr-3">
          <img src="../assets/github.png" class="logos">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      hovered: false
    }
  }
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
  .heading h2 {
    background-color: rgba(50, 50, 50, 0.3);
    display: inline-block;
    padding: 4px;
  }
  .yellow {
    color: #FFC636 !important;
  }
  .logos {

  }

  /************ ANIMATIONS *******************/

  .flip-enter-active{
      animation: width-in .5s ease-in forwards;
  }
  .flip-leave-active {
      animation: width-out .5s ease-out forwards;
  }
  @keyframes width-out {
      0%   {transform: scaleX(1)}
      100% {transform: scaleX(0)}
  }
  @keyframes width-in {
      0%   {transform: scaleX(0)}
      100% {transform: scaleX(1)}
  }
</style>
