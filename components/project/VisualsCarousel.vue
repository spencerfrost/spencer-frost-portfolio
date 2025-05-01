<template>
  <div v-if="screenshots?.length" class="relative mb-12">
    <Carousel class="overflow-hidden rounded-lg border bg-muted/30">
      <CarouselContent>
        <CarouselItem
          v-for="(screenshotUrl, index) in screenshots"
          :key="index"
        >
          <div class="p-1">
            <img
              :src="screenshotUrl"
              :alt="`${title} screenshot ${index + 1}`"
              class="aspect-video h-auto w-full rounded bg-muted/10 object-contain"
              loading="lazy"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
            >
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        v-if="screenshots.length > 1"
        class="absolute left-[-8px] top-1/2 z-10 -translate-y-1/2 sm:left-4"
      />
      <CarouselNext
        v-if="screenshots.length > 1"
        class="absolute right-[-8px] top-1/2 z-10 -translate-y-1/2 sm:right-4"
      />
    </Carousel>
  </div>
  <div
    v-else
    class="mb-12 flex aspect-video items-center justify-center rounded-lg border bg-muted/30 p-6"
  >
    <p class="text-muted-foreground">
      [No screenshots available for this project]
    </p>
  </div>
</template>

<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

interface Props {
  screenshots?: string[] // Array of image URLs
  title: string // Project title for alt text
}

defineProps<Props>()
</script>

<style scoped>
/* Ensure carousel items fill the space */
.aspect-video {
  aspect-ratio: 16 / 9;
}

/* You might need additional styling adjustments based on your global styles */
</style>
