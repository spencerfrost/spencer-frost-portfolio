<template>
  <img
    :src="src"
    :alt="alt"
    :class="[`rounded-full aspect-square border-${color}`, sizeClasses, className]"
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
      return 'border-2 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28'
    case 'sm':
      return 'border-2 w-24 sm:w-28 md:w-36 lg:w-42 xl:w-48'
    case 'md':
      return 'border-4 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64'
    case 'lg':
      return 'border-8 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96'
  }
  // border-rosewater border-flamingo border-pink border-mauve border-red 
  // border-maroon border-peach border-yellow border-green border-teal 
  // border-sky border-sapphire border-blue border-lavender
})
</script>
