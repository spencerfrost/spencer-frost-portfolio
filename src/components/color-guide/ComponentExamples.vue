<template>
  <div>
    <h2 class="text-2xl font-bold text-text mb-6">Component Examples</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Buttons -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Buttons</h3>
        <div class="space-y-4">
          <div>
            <p class="text-subtext0 mb-2">Primary Actions</p>
            <div class="flex flex-wrap gap-2">
              <button class="bg-mauve text-base px-4 py-2 rounded-md hover:bg-mauve/90 transition-colors">
                Primary
              </button>
              <button class="bg-surface1 text-text px-4 py-2 rounded-md hover:bg-surface2 transition-colors">
                Secondary
              </button>
              <button class="bg-red text-base px-4 py-2 rounded-md hover:bg-red/90 transition-colors">
                Destructive
              </button>
            </div>
          </div>
          
          <div>
            <p class="text-subtext0 mb-2">Alternative Styles</p>
            <div class="flex flex-wrap gap-2">
              <button class="border border-mauve text-mauve px-4 py-2 rounded-md hover:bg-mauve hover:text-base transition-colors">
                Outline
              </button>
              <button class="bg-surface1 text-blue px-4 py-2 rounded-md hover:bg-surface2 transition-colors">
                Link Style
              </button>
              <button class="bg-peach/10 text-peach px-4 py-2 rounded-md hover:bg-peach/20 transition-colors">
                Subtle
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Cards</h3>
        <div class="space-y-4">
          <div class="bg-surface1 p-4 rounded-lg">
            <h4 class="text-text font-medium">Basic Card</h4>
            <p class="text-subtext0 text-sm">With secondary text</p>
          </div>
          <div class="bg-surface1 p-4 rounded-lg border border-mauve">
            <h4 class="text-text font-medium">Highlighted Card</h4>
            <p class="text-subtext0 text-sm">With accent border</p>
          </div>
          <div class="bg-surface2 p-4 rounded-lg">
            <h4 class="text-text font-medium">Active Card</h4>
            <p class="text-subtext0 text-sm">Using surface2 background</p>
          </div>
        </div>
      </div>

      <!-- Form Elements -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Form Elements</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-text mb-2">Input Field</label>
            <input 
              type="text" 
              class="w-full px-3 py-2 bg-surface1 text-text rounded-md border border-overlay0 focus:border-mauve focus:outline-none"
              placeholder="Placeholder text..."
            >
          </div>
          <div>
            <label class="block text-text mb-2">Select Menu</label>
            <select class="w-full px-3 py-2 bg-surface1 text-text rounded-md border border-overlay0 focus:border-mauve focus:outline-none">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div class="flex items-center gap-2">
            <input type="checkbox" class="text-mauve rounded border-overlay0">
            <label class="text-text">Checkbox example</label>
          </div>
        </div>
      </div>

      <!-- Alerts -->
      <div class="bg-surface0 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-text mb-4">Alerts</h3>
        <div class="space-y-4">
          <div class="bg-blue/10 border-l-4 border-blue p-4 rounded">
            <h4 class="text-blue font-medium">Information</h4>
            <p class="text-text text-sm">This is an information message.</p>
          </div>
          <div class="bg-green/10 border-l-4 border-green p-4 rounded">
            <h4 class="text-green font-medium">Success</h4>
            <p class="text-text text-sm">Operation completed successfully.</p>
          </div>
          <div class="bg-peach/10 border-l-4 border-peach p-4 rounded">
            <h4 class="text-peach font-medium">Warning</h4>
            <p class="text-text text-sm">Please review before proceeding.</p>
          </div>
          <div class="bg-red/10 border-l-4 border-red p-4 rounded">
            <h4 class="text-red font-medium">Error</h4>
            <p class="text-text text-sm">Something went wrong.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>