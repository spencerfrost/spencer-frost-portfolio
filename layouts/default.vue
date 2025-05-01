<template>
  <div class="min-h-screen flex flex-col font-body">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';
</script>
