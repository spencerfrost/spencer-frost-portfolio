<!-- layouts/default.vue -->
<template>
  <div class="app-container">
    <AppHeader :isScrolled="isScrolled" />
    <slot />  <!-- This is where page content will be rendered -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Scrolling logic (copied from your App.vue if present)
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Call once to initialize
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>