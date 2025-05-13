<template>
  <div class="flex min-h-screen flex-col font-body">
    <AppHeader />
    <main class="flex-1 h-full">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
</script>
