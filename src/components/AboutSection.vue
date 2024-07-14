<template>
  <section id="about" class="full-height d-flex">
    <div class="image-container">
      <img src="../assets/spencer_standing.jpg" alt="Spencer standing" />
    </div>
    <div class="content-container d-flex flex-column justify-center">
      <div>
        <h2 class="text-3xl font-bold mb-4 font-white">About Me</h2>
        <p class="text-xl font-white">
          Hello! I’m Spencer, a passionate front-end developer with a keen eye
          for detail and a strong belief in the power of component-driven
          development. I specialize in using Vue.js to create dynamic user
          interfaces, supplemented by my skills in JavaScript and SCSS to ensure
          top-notch functionality and aesthetics. My experience with
          Storybook.js also allows me to manage a comprehensive component
          library, enhancing consistency and efficiency across projects.
        </p>
        <p class="text-xl font-white">
          In addition to my front-end expertise, I have a growing interest in
          DevOps, sparked by my endeavors in setting up and managing a home
          Linux server. This unique perspective enriches my understanding of the
          full software lifecycle and allows me to handle more technical aspects
          of deployment and operations. Whether it’s developing sleek,
          responsive websites or delving into server-side configurations, I am
          dedicated to merging design with technical execution. Let’s connect if
          you need a developer who is as enthusiastic about technology as they
          are committed to quality.
        </p>
      </div>
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
  overflow: hidden;

  img {
    width: auto;
    height: 100vh;
    min-width: 100%;
    object-fit: cover;
  }
}
.content-container {
  flex: 2;
  background-color: #333;

  div {
    padding-left: 20%;
    max-width: 800px;
  }
}
</style>
