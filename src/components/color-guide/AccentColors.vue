<template>
  <div>
    <h2 class="text-2xl font-bold text-text mb-6">Accent Colors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Primary Accents</h3>
        <div class="space-y-4">
          <ColorSwatch 
            v-for="color in primaryAccents" 
            :key="color.name"
            :color="color"
          />
        </div>
      </div>

      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Secondary Accents</h3>
        <div class="space-y-4">
          <ColorSwatch 
            v-for="color in secondaryAccents" 
            :key="color.name"
            :color="color"
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Status Colors</h3>
        <div class="space-y-4">
          <ColorSwatch 
            v-for="color in statusColors" 
            :key="color.name"
            :color="color"
          />
        </div>
      </div>

      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Special Accents</h3>
        <div class="space-y-4">
          <ColorSwatch 
            v-for="color in specialAccents" 
            :key="color.name"
            :color="color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorSwatch from './ColorSwatch.vue';

const primaryAccents = [
  {
    name: 'Mauve',
    class: 'bg-mauve',
    description: 'Primary accent color',
    usage: 'Primary buttons, key interactive elements'
  },
  {
    name: 'Pink',
    class: 'bg-pink',
    description: 'Secondary accent color',
    usage: 'Secondary actions, highlighting'
  },
  {
    name: 'Lavender',
    class: 'bg-lavender',
    description: 'Tertiary accent color',
    usage: 'Alternative actions, active states'
  }
]

const secondaryAccents = [
  {
    name: 'Blue',
    class: 'bg-blue',
    description: 'Information color',
    usage: 'Links, information, help text'
  },
  {
    name: 'Sky',
    class: 'bg-sky',
    description: 'Light accent color',
    usage: 'Subtle accents, hover states'
  },
  {
    name: 'Sapphire',
    class: 'bg-sapphire',
    description: 'Deep accent color',
    usage: 'Focus states, deep accents'
  }
]

const statusColors = [
  {
    name: 'Red',
    class: 'bg-red',
    description: 'Error color',
    usage: 'Error messages, destructive actions'
  },
  {
    name: 'Green',
    class: 'bg-green',
    description: 'Success color',
    usage: 'Success states, confirmations'
  },
  {
    name: 'Yellow',
    class: 'bg-yellow',
    description: 'Warning color',
    usage: 'Warning messages, important notes'
  }
]

const specialAccents = [
  {
    name: 'Peach',
    class: 'bg-peach',
    description: 'Special accent',
    usage: 'Special states, unique highlights'
  },
  {
    name: 'Maroon',
    class: 'bg-maroon',
    description: 'Deep accent',
    usage: 'Alternative to red, deep accents'
  },
  {
    name: 'Teal',
    class: 'bg-teal',
    description: 'Cool accent',
    usage: 'Alternative to blue, cool accents'
  }
]
</script>