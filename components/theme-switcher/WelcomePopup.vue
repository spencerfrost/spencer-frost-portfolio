<template>
  <Dialog v-model:open="isOpen" class="w-200">
    <DialogContent class="p-0 border-none w-200">
      <ThemeSwitcher
        welcome
        dialog
        class="flex flex-col gap-4 p-4 min-w-200"
        @close="isOpen = false"
      />
    </DialogContent>
  </Dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const isOpen = ref(false);

onMounted(() => {
  const hasVisited = localStorage.getItem("hasVisited");
  if (!hasVisited) {
    localStorage.setItem("hasVisited", "true");
  }
  isOpen.value = true;
});

</script>

<style>

</style>