<template>
  <div class="grid grid-cols-4 gap-2">
    <div
      v-for="theme in themes"
      :key="theme"
      class="flex flex-col items-center justify-center"
    >
      <img
        :src="`/images/catppuccin-icons/${theme}.webp`"
        class="w-12 cursor-pointer"
        :alt="`${theme} theme icon`"
        :class="{ 'opacity-30': theme !== preferred }"
        @click="setTheme(theme)"
      >
      <span class="mt-2 text-sm">
        {{ formatThemeName(theme) }}
      </span>
    </div>
  </div>
  <p class="text-center text-xs text-muted-foreground">
    Click on a flavour to appply it.
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  welcome?: boolean
  dialog?: boolean
}>()

const { $theme } = useNuxtApp()
const preferred = computed(() => $theme.preferred.value)
const themes = ['latte', 'frappe', 'macchiato', 'mocha'] as const

function setTheme(theme: (typeof themes)[number]) {
  $theme.setPreferredTheme(theme)
}

function formatThemeName(theme: string): string {
  return theme.charAt(0).toUpperCase() + theme.slice(1)
}
</script>
