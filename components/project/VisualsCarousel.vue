<template>
  <div v-if="screenshots?.length" class="mb-12 relative">
    <Carousel class="rounded-lg overflow-hidden border bg-muted/30">
      <CarouselContent>
        <CarouselItem v-for="(screenshotUrl, index) in screenshots" :key="index">
          <div class="p-1"> <img :src="screenshotUrl" :alt="`${title} screenshot ${index + 1}`"
              class="w-full h-auto object-contain rounded aspect-video bg-muted/10" loading="lazy"
              :fetchpriority="index === 0 ? 'high' : 'auto'" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious v-if="screenshots.length > 1"
        class="absolute left-[-8px] sm:left-4 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext v-if="screenshots.length > 1"
        class="absolute right-[-8px] sm:right-4 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  </div>
  <div v-else class="mb-12 p-6 bg-muted/30 rounded-lg border aspect-video flex items-center justify-center">
    <p class="text-muted-foreground">[No screenshots available for this project]</p>
  </div>
</template>

<script setup lang="ts">
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
  } from '@/components/ui/carousel';

interface Props {
  screenshots?: string[]; // Array of image URLs
  title: string; // Project title for alt text
}

defineProps<Props>();
</script>

<style scoped>
/* Ensure carousel items fill the space */
.aspect-video {
  aspect-ratio: 16 / 9;
}

/* You might need additional styling adjustments based on your global styles */
</style>