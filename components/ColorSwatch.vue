<template>
  <div class="flex flex-col gap-2">
    <div
      :class="`flex h-16 w-16 items-center justify-center rounded-full ${backgroundClass}`"
    />
    <!-- bg-rosewater bg-flamingo bg-pink bg-mauve bg-red bg-maroon bg-peach
    bg-yellow bg-green bg-teal bg-sky bg-sapphire bg-blue bg-lavender -->
    <div class="flex items-center gap-2">
      <span class="text-xs">{{ color }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'ColorSwatch',
})

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
})

const backgroundClass = computed(() => `bg-${props.color}`)
</script>
