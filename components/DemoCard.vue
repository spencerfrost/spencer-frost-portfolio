<template>
  <div class="demo-card p-6 bg-raised-bg rounded-lg shadow-md">
    <h3 class="text-heading text-lg font-bold mb-4">Catppuccin Theme Demo</h3>
    
    <div class="space-y-6">
      <div>
        <h4 class="text-secondary mb-2">Text Colors</h4>
        <p class="text-primary">Primary Text (--ctp-text)</p>
        <p class="text-secondary">Secondary Text (--ctp-subtext0)</p>
        <p class="text-heading">Heading Text (--ctp-text)</p>
        <p class="text-inactive">Inactive Text (--ctp-overlay1)</p>
      </div>
      
      <div>
        <h4 class="text-secondary mb-2">Background Colors</h4>
        <div class="flex flex-wrap gap-2">
          <div class="color-swatch bg-bg">Base</div>
          <div class="color-swatch bg-raised-bg">Surface0</div>
          <div class="color-swatch bg-overlay-bg">Surface1</div>
          <div class="color-swatch bg-hover-bg">Surface2</div>
        </div>
      </div>
      
      <div>
        <h4 class="text-secondary mb-2">Catppuccin Accents</h4>
        <div class="flex flex-wrap gap-2">
          <div class="color-swatch" style="background-color: rgb(var(--ctp-rosewater))">Rosewater</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-flamingo))">Flamingo</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-pink))">Pink</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-mauve))">Mauve</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-red))">Red</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-maroon))">Maroon</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-peach))">Peach</div>
        </div>
        <div class="flex flex-wrap gap-2 mt-2">
          <div class="color-swatch" style="background-color: rgb(var(--ctp-yellow))">Yellow</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-green))">Green</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-teal))">Teal</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-sky))">Sky</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-sapphire))">Sapphire</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-blue))">Blue</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-lavender))">Lavender</div>
        </div>
      </div>
      
      <div>
        <h4 class="text-secondary mb-2">UI Elements</h4>
        <div class="mb-2">
          <input type="text" class="block w-full p-2 bg-input-bg border border-input-border rounded" placeholder="Input field">
        </div>
        <div class="flex gap-2">
          <button class="px-4 py-2 bg-blue text-white rounded">Primary Button</button>
          <button class="px-4 py-2 border border-border rounded">Secondary Button</button>
        </div>
      </div>
      
      <div>
        <h4 class="text-secondary mb-2">Semantic Colors</h4>
        <div class="flex flex-wrap gap-2">
          <div class="color-swatch bg-red text-white">Error</div>
          <div class="color-swatch bg-yellow text-white">Warning</div>
          <div class="color-swatch bg-green text-white">Success</div>
          <div class="color-swatch bg-blue text-white">Info</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-swatch {
  @apply w-24 h-12 rounded flex items-center justify-center text-xs font-semibold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  color: white;
}
</style>
