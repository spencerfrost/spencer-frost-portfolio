<template>
  <section id="about" class="full-height d-flex">
    <div class="image-container">
      <img src="../assets/spencer_standing.jpg" alt="Spencer standing"/>
    </div>
    <div class="content-container d-flex flex-column justify-center p-4">
      <h2 class="text-3xl font-bold mb-4 font-white">About Me</h2>
      <p class="text-xl font-white">
        As a passionate front-end developer and WordPress enthusiast, I bring
        creativity and technical expertise to every project. With a keen eye for
        design and a love for clean, efficient code, I strive to create web
        experiences that are both beautiful and functional.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style lang="scss" scoped>
.image-container {
  flex: 1;
  background-size: cover; /* Cover the entire area of the div */
  background-repeat: no-repeat;
  background-position: center center; /* Center the background image */
  overflow: hidden; /* Ensures any excess image does not bleed outside the div */

  img {
    // Set the image to take up the entire width of div but overflow vertically
    width: auto;
    height: 100vh;

  }
}
.content-container {
  flex: 2;
  background-color: #333;
}
</style>
