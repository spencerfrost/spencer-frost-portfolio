<template>
  <div class="theme-switcher p-4 bg-raised-bg rounded-lg shadow-md">
    <h2 class="text-heading text-xl mb-4">Catppuccin Theme Selector</h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
      <button 
        v-for="theme in themes" 
        :key="theme"
        @click="setTheme(theme)"
        :class="[
          'p-3 rounded border transition-all',
          theme === preferred ? 'border-blue bg-blue/20' : 'border-border hover:border-blue'
        ]"
      >
        {{ formatThemeName(theme) }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { $theme } = useNuxtApp();
const preferred = computed(() => $theme.preferred.value);
// Define themes as a simple array
const themes = ["latte", "frappe", "macchiato", "mocha", "system"] as const;

function setTheme(theme: typeof themes[number]) {
  $theme.setPreferredTheme(theme);
}

function formatThemeName(theme: string): string {
  if (theme === 'system') return 'System';
  
  // Format Catppuccin flavor names
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}
</script>
