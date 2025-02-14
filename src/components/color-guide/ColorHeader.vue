<template>
  <header class="mb-12 text-center">
    <h1 class="text-4xl font-bold text-text mb-4">Catppuccin Color System</h1>
    <div class="max-w-2xl mx-auto">
      <p class="text-subtext0 text-lg mb-4">
        A comprehensive guide to using the Catppuccin color palette in your application.
        This system provides a harmonious set of colors that work together to create
        consistent and aesthetically pleasing interfaces.
      </p>
      <p class="text-subtext1 text-sm mb-6">
        Switch between themes to see how colors adapt across different flavors.
      </p>
      <div class="inline-block">
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup>
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
</script>