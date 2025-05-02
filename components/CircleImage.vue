<template>
  <img
    :src="src"
    :alt="alt"
    :class="[`rounded-full border-${color}`, sizeClasses, className]"
  />

</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'medium',
    validator(value: string) {
      return [
        'xs',
        'sm',
        'md',
        'lg',
      ].includes(value)
    },
  },
  color: {
    type: String,
    default: 'rosewater',
    validator(value: string) {
      return [
        'rosewater',
        'flamingo',
        'pink',
        'mauve',
        'red',
        'maroon',
        'peach',
        'yellow',
        'green',
        'teal',
        'sky',
        'sapphire',
        'blue',
        'lavender',
      ].includes(value)
    },
  },
  className: {
    type: String,
    default: '',
  },
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'border-2 h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28'
    case 'sm':
      return 'border-2 h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-42 lg:w-42 xl:h-48 xl:w-48'
    case 'md':
      return 'border-4 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64'
    case 'lg':
      return 'border-8 h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96'
  }
  // border-rosewater border-flamingo border-pink border-mauve border-red 
  // border-maroon border-peach border-yellow border-green border-teal 
  // border-sky border-sapphire border-blue border-lavender
})
</script>
