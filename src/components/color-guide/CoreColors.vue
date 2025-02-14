<template>
  <div>
    <h2 class="text-2xl font-bold text-text mb-6">Core UI Colors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Background Colors -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Background Colors</h3>
        <div class="space-y-4">
          <ColorSwatch 
            v-for="color in backgroundColors" 
            :key="color.name"
            :color="color"
          />
        </div>
      </div>

      <!-- Surface Colors -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Surface Colors</h3>
        <div class="space-y-4">
          <ColorSwatch 
            v-for="color in surfaceColors" 
            :key="color.name"
            :color="color"
          />
        </div>
      </div>

      <!-- Overlay Colors -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Overlay Colors</h3>
        <div class="space-y-4">
          <ColorSwatch 
            v-for="color in overlayColors" 
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

const backgroundColors = [
  {
    name: 'Base',
    class: 'bg-base',
    description: 'Primary background color',
    usage: 'Main background for your application'
  },
  {
    name: 'Crust',
    class: 'bg-crust',
    description: 'Lowest background color',
    usage: 'Footer sections, lowest background layer'
  },
  {
    name: 'Mantle',
    class: 'bg-mantle',
    description: 'Alternative background',
    usage: 'Alternative sections, secondary background'
  }
]

const surfaceColors = [
  {
    name: 'Surface 0',
    class: 'bg-surface0',
    description: 'Base surface color',
    usage: 'Cards, containers, primary surface elements'
  },
  {
    name: 'Surface 1',
    class: 'bg-surface1',
    description: 'Higher surface color',
    usage: 'Hovered elements, secondary surfaces'
  },
  {
    name: 'Surface 2',
    class: 'bg-surface2',
    description: 'Highest surface color',
    usage: 'Active elements, highlights'
  }
]

const overlayColors = [
  {
    name: 'Overlay 0',
    class: 'bg-overlay0',
    description: 'Base overlay',
    usage: 'Subtle overlays, borders'
  },
  {
    name: 'Overlay 1',
    class: 'bg-overlay1',
    description: 'Medium overlay',
    usage: 'Medium emphasis overlays'
  },
  {
    name: 'Overlay 2',
    class: 'bg-overlay2',
    description: 'High contrast overlay',
    usage: 'High emphasis overlays'
  }
]
</script>