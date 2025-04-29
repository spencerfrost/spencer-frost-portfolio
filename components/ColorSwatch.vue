<template>
  <div class="flex flex-col gap-2">
    <div
      class="flex items-center justify-center w-16 h-16 rounded-full"
      :class="backgroundClass"
    />
    <div class="flex items-center gap-2">
      <span class="text-xs">{{ color }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({
  name: 'ColorSwatch',
});


const props = defineProps({
  color: {
    type: String,
    required: true,
  },
});

const backgroundClass = computed(() => `bg-${props.color}`);
</script>
