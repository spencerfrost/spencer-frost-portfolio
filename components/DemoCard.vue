<template>
  <div class="p-6 bg-card rounded-lg shadow-md">
    <h3 class="text-lg font-bold mb-4 text-card-foreground">Catppuccin Theme Demo</h3>
    
    <div class="space-y-6">
      <div>
        <h4 class="text-secondary-foreground mb-2">Text Colors</h4>
        <p class="text-foreground">Foreground Text (text)</p>
        <p class="text-muted-foreground">Muted Text (subtext0)</p>
        <p class="text-primary">Primary Text (lavender)</p>
        <p class="text-secondary-foreground">Secondary Text (subtext1)</p>
      </div>
      
      <div>
        <h4 class="text-secondary-foreground mb-2">Background Colors</h4>
        <div class="flex flex-wrap gap-2">
          <div class="color-swatch bg-background text-foreground">Background</div>
          <div class="color-swatch bg-card text-card-foreground">Card</div>
          <div class="color-swatch bg-muted text-muted-foreground">Muted</div>
          <div class="color-swatch bg-secondary text-secondary-foreground">Secondary</div>
        </div>
      </div>
      
      <div>
        <h4 class="text-secondary-foreground mb-2">Catppuccin Accents</h4>
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
        <h4 class="text-secondary-foreground mb-2">UI Elements</h4>
        <div class="mb-2">
          <input
            type="text"
            class="block w-full p-2 bg-background border border-input rounded"
            placeholder="Input field"
          >
        </div>
        <div class="flex gap-2">
          <Button class="text-primary-foreground">Primary Button</Button>
          <Button class="text-secondary-foreground">Secondary Button</Button>
          <Button class="text-accent-foreground">Accent Button</Button>
        </div>
      </div>
      
      <div>
        <h4 class="text-secondary-foreground mb-2">Semantic Colors</h4>
        <div class="flex flex-wrap gap-2">
          <div class="color-swatch bg-destructive text-destructive-foreground">Destructive</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-yellow)); color: rgb(var(--ctp-base))">Warning</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-green)); color: rgb(var(--ctp-base))">Success</div>
          <div class="color-swatch" style="background-color: rgb(var(--ctp-blue)); color: rgb(var(--ctp-base))">Info</div>
        </div>
      </div>

      <div>
        <h4 class="text-secondary-foreground mb-2">ShadCN Mapped Colors</h4>
        <div class="flex flex-wrap gap-2">
          <div class="color-swatch bg-ring text-background">Ring</div>
          <div class="color-swatch bg-border text-foreground">Border</div>
          <div class="color-swatch bg-input text-foreground">Input</div>
          <div class="color-swatch bg-popover text-popover-foreground">Popover</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-swatch {
  @apply w-24 h-12 rounded flex items-center justify-center text-xs font-semibold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
</style>