<template>
  <div>
    <h2 class="text-2xl font-bold text-text mb-6">Usage Guidelines</h2>
    
    <!-- Color Combinations -->
    <div class="bg-surface0 rounded-lg p-6 mb-8">
      <h3 class="text-xl font-semibold text-text mb-4">Recommended Color Combinations</h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-medium text-text mb-2">Background Layering</h4>
          <div class="space-y-2">
            <div class="p-4 bg-base rounded-lg">
              base
              <div class="p-4 bg-surface0 rounded-lg">
                surface0
                <div class="p-4 bg-surface1 rounded-lg">
                  surface1
                  <div class="p-4 bg-surface2 rounded-lg">
                    surface2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 class="font-medium text-text mb-2">Text Hierarchy</h4>
          <div class="p-4 bg-surface0 rounded-lg space-y-2">
            <p class="text-text">Primary Text (text)</p>
            <p class="text-subtext0">Secondary Text (subtext0)</p>
            <p class="text-subtext1">Tertiary Text (subtext1)</p>
            <p class="text-overlay0">Disabled Text (overlay0)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Best Practices -->
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Do's</h3>
        <ul class="space-y-4">
          <li v-for="(item, index) in dos" :key="index" class="flex gap-3">
            <span class="text-green">✓</span>
            <div>
              <p class="text-text">{{ item.title }}</p>
              <p class="text-subtext0 text-sm">{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Don'ts</h3>
        <ul class="space-y-4">
          <li v-for="(item, index) in donts" :key="index" class="flex gap-3">
            <span class="text-red">✕</span>
            <div>
              <p class="text-text">{{ item.title }}</p>
              <p class="text-subtext0 text-sm">{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const dos = [
  {
    title: 'Use proper background layering',
    description: 'Follow the layering hierarchy: base → surface0 → surface1 → surface2'
  },
  {
    title: 'Maintain text hierarchy',
    description: 'Use text for primary content, subtext0 for secondary, and subtext1 for tertiary information'
  },
  {
    title: 'Use accent colors sparingly',
    description: 'Reserve accent colors for interactive elements and important highlights'
  },
  {
    title: 'Consider color contrast',
    description: 'Ensure sufficient contrast between text and background colors'
  },
  {
    title: 'Use semantic colors consistently',
    description: 'Maintain consistent use of colors for similar actions and states'
  }
]

const donts = [
  {
    title: 'Don\'t mix too many accent colors',
    description: 'Avoid using multiple accent colors in close proximity'
  },
  {
    title: 'Don\'t use accent colors for large areas',
    description: 'Accent colors should be used for emphasis, not as primary backgrounds'
  },
  {
    title: 'Don\'t skip layers in background hierarchy',
    description: 'Avoid jumping from base directly to surface2'
  },
  {
    title: 'Don\'t rely solely on color',
    description: 'Always provide additional visual or textual cues besides color'
  },
  {
    title: 'Don\'t use inconsistent color meanings',
    description: 'Avoid using the same color for different purposes across your interface'
  }
]
</script>