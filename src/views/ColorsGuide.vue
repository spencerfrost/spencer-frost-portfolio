<template>
  <div class="min-h-screen bg-base p-8">
    <div class="container mx-auto">
      <ColorHeader />

      <!-- Background Colors -->
      <section class="mb-16">
        <CoreColors />
      </section>

      <!-- Text Colors -->
      <section class="mb-16">
        <TextColors />
      </section>

      <!-- Accent Colors -->
      <section class="mb-16">
        <AccentColors />
      </section>

      <!-- Component Examples -->
      <section class="mb-16">
        <ComponentExamples />
      </section>

      <!-- Usage Guidelines -->
      <section class="mb-16">
        <ColorGuidelines />
      </section>
    </div>
  </div>
</template>

<script setup>
import AccentColors from '@/components/color-guide/AccentColors.vue';
import ColorGuidelines from '@/components/color-guide/ColorGuidelines.vue'; /* PartiallyEnd: #3632/scriptSetup.vue */
import ColorHeader from '@/components/color-guide/ColorHeader.vue';
import ComponentExamples from '@/components/color-guide/ComponentExamples.vue';
import CoreColors from '@/components/color-guide/CoreColors.vue';
import TextColors from '@/components/color-guide/TextColors.vue';
</script>