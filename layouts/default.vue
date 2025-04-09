<template>
  <div class="min-h-screen flex flex-col bg-bg font-body">
    <AppHeader />
    <main class="flex-1">
      <slot />  <!-- This is where page content will be rendered -->
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>
