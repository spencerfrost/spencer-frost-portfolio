<template>
  <ThemeSwitcherDialog v-model="isOpen" :trigger="false" class="flex items-center justify-center p-4">
    <img src="/images/spencer/barista.webp" class="w-64 h-64 rounded-full border-4 border-peach mx-auto mb-4"
      alt="Barista" />
    <CardTitle>Welcome to Spencer's Code Café!</CardTitle>
    <CardDescription>
      Hey there! I'm Spencer, your code barista today. Ready to serve up the perfect theme for your browsing
      experience!
    </CardDescription>
    <CardDescription>
      What's your flavour preference? Each brew has its own unique palette that'll transform how you experience my
      digital space!
    </CardDescription>
  </ThemeSwitcherDialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const isOpen = ref(false);

onMounted(() => {
  const hasVisited = localStorage.getItem("hasVisited");
  if (!hasVisited) {
    localStorage.setItem("hasVisited", "true");
    isOpen.value = true;
  }
});

</script>
