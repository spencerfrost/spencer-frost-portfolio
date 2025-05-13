<template>
  <div class="flex flex-col justify-center gap-y-16 md:gap-y-0">
    <HomeHero ref="homeHero" class="min-h-screen" />
    <HomeAbout ref="homeAbout" class="md:min-h-screen" />
    <HomeProjects ref="homeProjects" class="min-h-screen" />
    <HomeContact ref="homeContact" class="md:min-h-screen" />
    <BackgroundBubbles />
    <ScrollPrompt
      :sections="[homeHero, homeAbout, homeProjects, homeContact]"
      promptText="Discover More"
      iconName="uil:angle-double-down"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Define the type for the component refs
type ComponentRef = { $el: HTMLElement } | HTMLElement | null

const homeHero = ref<ComponentRef>(null)
const homeAbout = ref<ComponentRef>(null)
const homeProjects = ref<ComponentRef>(null)
const homeContact = ref<ComponentRef>(null)
</script>
