<template>
  <div class="flex items-center space-x-3">
    <div class="flex space-x-2 items-center bg-surface0 rounded-full p-1">
      <button
        v-for="theme in themes"
        :key="theme.value"
        @click="setTheme(theme.value)"
        :class="[
          'px-3 py-1 rounded-full transition-colors duration-200',
          currentTheme === theme.value ? 'bg-pink/50 text-text' : 'text-subtext0 hover:text-text'
        ]"
      >
        {{ theme.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const currentTheme = ref('latte')
const themes = [
  { name: 'Latte', value: 'latte', isDark: false },
  { name: 'Frappé', value: 'frappe', isDark: true },
  { name: 'Macchiato', value: 'macchiato', isDark: true },
  { name: 'Mocha', value: 'mocha', isDark: true }
]

const setTheme = (theme) => {
  // Remove all theme classes
  const themeClasses = ['latte', 'frappe', 'macchiato', 'mocha', 'dark']
  document.documentElement.classList.remove(...themeClasses)

  // Add new theme class
  document.documentElement.classList.add(theme)

  // Add dark class for shadcn components if using a dark theme
  const selectedTheme = themes.find(t => t.value === theme)
  if (selectedTheme?.isDark) {
    document.documentElement.classList.add('dark')
  }

  // Store theme preference
  localStorage.setItem('theme', theme)
  currentTheme.value = theme
}

// Initialize theme from localStorage or default to 'latte'
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'latte'
  setTheme(savedTheme)
}

// Call initTheme when component is mounted
onMounted(() => {
  initTheme()
})
</script>