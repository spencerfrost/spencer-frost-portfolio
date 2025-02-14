<template>
  <div class="relative">
    <button
      @click="toggleThemeMenu"
      class="flex items-center space-x-1 text-text hover:text-mauve transition-colors duration-200"
    >
      <span>Theme</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <!-- Theme Menu -->
    <div
      v-if="isMenuOpen"
      class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-surface ring-1 ring-overlay0 ring-opacity-5"
    >
      <div class="py-1" role="menu">
        <button
          v-for="theme in themes"
          :key="theme.name"
          @click="setTheme(theme.value)"
          class="block w-full text-left px-4 py-2 text-sm text-text hover:bg-overlay0"
          role="menuitem"
        >
          {{ theme.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isMenuOpen = ref(false)
const themes = [
  { name: 'Latte (Light)', value: 'latte' },
  { name: 'Frappe (Medium)', value: 'frappe' },
  { name: 'Macchiato (Dark)', value: 'macchiato' },
  { name: 'Mocha (Darker)', value: 'mocha' }
]

const toggleThemeMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const setTheme = (theme) => {
  // Remove all theme classes
  document.documentElement.classList.remove('latte', 'frappe', 'macchiato', 'mocha')
  // Add new theme class
  document.documentElement.classList.add(theme)
  // Store theme preference
  localStorage.setItem('theme', theme)
  // Close menu
  isMenuOpen.value = false
}

// Initialize theme from localStorage or default to 'mocha'
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'mocha'
  setTheme(savedTheme)
}

// Call initTheme when component is mounted
onMounted(() => {
  initTheme()
})
</script>