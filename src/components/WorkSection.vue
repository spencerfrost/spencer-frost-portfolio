<template>
    <section id="work" class="full-height d-flex flex-column justify-center align-center">
      <h2 class="text-3xl font-bold mb-4 font-white">My Work</h2>
      <div class="carousel-container" style="width: 80%; max-width: 1000px;">
        <div class="carousel d-flex overflow-hidden">
          <div v-for="(project, index) in projects" :key="index" class="carousel-item flex-shrink-0 w-100 p-4">
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="mb-4">{{ project.description }}</p>
              <a :href="project.link" class="bg-accent py-2 px-4 font-white font-bold rounded" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </div>
        <div class="carousel-controls mt-4 d-flex justify-center">
          <button @click="prevProject" class="mx-2 bg-accent py-1 px-3 font-white font-bold rounded">&lt;</button>
          <button @click="nextProject" class="mx-2 bg-accent py-1 px-3 font-white font-bold rounded">&gt;</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'WorkSection',
    data() {
      return {
        currentProject: 0,
        projects: [
          { title: 'E-commerce Website', description: 'A fully responsive online store built with Vue.js and Shopify.', link: '#' },
          { title: 'Portfolio Site', description: 'A sleek, modern portfolio showcasing web development projects.', link: '#' },
          { title: 'Blog Platform', description: 'A custom WordPress theme with advanced features and optimizations.', link: '#' },
          { title: 'Task Management App', description: 'A Vue.js application for efficient task organization and tracking.', link: '#' },
          { title: 'Restaurant Booking System', description: 'An intuitive booking system for a high-end restaurant chain.', link: '#' },
        ]
      }
    },
    methods: {
      nextProject() {
        this.currentProject = (this.currentProject + 1) % this.projects.length;
        this.scrollCarousel();
      },
      prevProject() {
        this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
        this.scrollCarousel();
      },
      scrollCarousel() {
        const carousel = this.$el.querySelector('.carousel');
        carousel.scrollTo({
          left: this.currentProject * carousel.offsetWidth,
          behavior: 'smooth'
        });
      }
    }
  }
  </script>
  
  <style scoped>
  .carousel {
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }
  .carousel-item {
    scroll-snap-align: start;
  }
  </style>