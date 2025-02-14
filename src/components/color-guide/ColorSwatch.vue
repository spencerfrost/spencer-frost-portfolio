<template>
  <div class="flex items-center gap-4">
    <div class="w-16 h-16 rounded" :class="color.class"></div>
    <div>
      <p class="font-medium text-text">{{ color.name }}</p>
      <p class="text-sm text-subtext0">{{ color.description }}</p>
      <p class="text-xs text-overlay0">{{ color.class }}</p>
      <p class="text-xs text-subtext1 mt-1">{{ color.usage }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: Object,
    required: true
  }
})
</script>