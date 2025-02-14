<template>
  <div>
    <h2 class="text-2xl font-bold text-text mb-6">Typography Colors</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Main Text Colors -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Primary Text</h3>
        <div class="space-y-4">
          <TextSwatch 
            v-for="color in mainTextColors" 
            :key="color.name"
            :color="color"
          />
        </div>
      </div>

      <!-- Subtle Text Colors -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Subtle Text</h3>
        <div class="space-y-4">
          <TextSwatch 
            v-for="color in subtleTextColors" 
            :key="color.name"
            :color="color"
          />
        </div>
      </div>

      <!-- Example Typography -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Typography Example</h3>
        <div class="space-y-6">
          <div>
            <h4 class="text-text font-medium mb-1">Heading</h4>
            <p class="text-subtext0">Main content text</p>
            <p class="text-subtext1 text-sm">Supporting information</p>
            <p class="text-overlay0 text-xs">Meta information</p>
          </div>
          <div>
            <p class="text-text">
              This is a sample paragraph showing how different text colors can be combined.
              <span class="text-subtext0">Additional context can use subtext0</span>, while
              <span class="text-subtext1">less important information uses subtext1</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextSwatch from './TextSwatch.vue';

const mainTextColors = [
  {
    name: 'Text',
    class: 'text-text',
    description: 'Primary text color',
    usage: 'Main content, headings, important text'
  },
  {
    name: 'Subtext 0',
    class: 'text-subtext0',
    description: 'Secondary text color',
    usage: 'Supporting text, descriptions'
  },
  {
    name: 'Subtext 1',
    class: 'text-subtext1',
    description: 'Tertiary text color',
    usage: 'Less important text, subtle information'
  }
]

const subtleTextColors = [
  {
    name: 'Overlay 0',
    class: 'text-overlay0',
    description: 'Subtle text color',
    usage: 'Placeholder text, disabled states'
  },
  {
    name: 'Overlay 1',
    class: 'text-overlay1',
    description: 'Very subtle text',
    usage: 'Timestamps, version numbers'
  },
  {
    name: 'Overlay 2',
    class: 'text-overlay2',
    description: 'Extremely subtle text',
    usage: 'Borders, dividers when used as text'
  }
]
</script>