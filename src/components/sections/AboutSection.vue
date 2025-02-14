<template>
  <section id="about" class="h-screen flex bg-crust">
    <div class="w-1/3 relative overflow-hidden">
      <img 
        src="@/assets/spencer_standing.jpg" 
        alt="Spencer standing" 
        class="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-auto max-w-none object-cover"
      />
    </div>
    <div class="w-2/3 flex flex-col justify-center p-20 gap-y-4">
      <MorphingText :texts="texts" :morphTime="2" :cooldownTime="1" class="text-mauve" />
      <div class="max-w-4xl">
        <p class="text-xl text-text mb-4">
          Hello! I'm Spencer, a passionate front-end developer with a keen eye for detail and a strong belief in the power of component-driven development. I specialize in using Vue.js to create dynamic user interfaces, supplemented by my skills in JavaScript and SCSS to ensure top-notch functionality and aesthetics. My experience with Storybook.js also allows me to manage a comprehensive component library, enhancing consistency and efficiency across projects.
        </p>
        <p class="text-xl text-text">
          In addition to my front-end expertise, I have a growing interest in DevOps, sparked by my endeavors in setting up and managing a home Linux server. This unique perspective enriches my understanding of the full software lifecycle and allows me to handle more technical aspects of deployment and operations. Whether it's developing sleek, responsive websites or delving into server-side configurations, I am dedicated to merging design with technical execution. Let's connect if you need a developer who is as enthusiastic about technology as they are committed to quality.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import MorphingText from '../MorphingText.vue';

const texts = [
  'Front-end Developer',
  'DevOps Tinkerer',
  'Coffeeholic',
  'Media Hoarder',
  'Gamer',
  'Music Lover',
  'Rock Climber',
];
</script>

<style lang="css" scoped>
.image-container {
  flex: 1;
  overflow: hidden;
}

.image-container img {
  width: auto;
  height: 100vh;
  min-width: 100%;
  object-fit: cover;
}

.content-container {
  flex: 2;
  background-color: var(--ctp-crust);
}

.content {
  padding-left: 20%;
  max-width: 800px;
}
</style>