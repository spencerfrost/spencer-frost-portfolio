<template>
  <footer class="bg-crust text-text py-4 mt-auto">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="w-1/3 text-sm text-subtext0">
        <div>© {{ currentYear }} Spencer Frost. All rights reserved.</div>
        <div>
          Built with Vue.js and
          <span class="text-red">❤️</span>
        </div>
      </div>
      <div class="w-1/3 flex space-x-6 justify-around">
        <div class="flex flex-col space-y-2 text-center">
          <a
            href="https://linkedin.com/in/spencer-frost-40405463"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text hover:text-mauve transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/spencerfrost"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text hover:text-mauve transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
        <div class="flex flex-col space-y-2 text-center">
          <router-link
            to="/spencer-plus"
            class="text-text hover:text-mauve transition-colors duration-200"
          >
            Spencer+
          </router-link>
          <router-link
            to="/colors"
            class="text-text hover:text-mauve transition-colors duration-200"
          >
            Colors
          </router-link>
        </div>
      </div>
      <div class="w-1/3 text-sm text-subtext0 text-right">
        <ThemeSwitcher />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

const currentYear = computed(() => new Date().getFullYear())
</script>
