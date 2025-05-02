<template>
  <div class="container mx-auto py-8" v-if="data">
    <WipBanner />
    <AboutIntroduction :data="data" />
    <!-- <AboutJourney :data="data" />
    <AboutSkillsPassions :data="data" />
    <AboutPersonal :data="data" />
    <AboutOutro :data="data" /> -->
  </div>
  <Alert v-else variant="destructive" class="mt-4">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      There was an error loading the data for this page. Please try again later.
    </AlertDescription>
  </Alert>
  <BackgroundBubbles />
</template>

<script setup lang="ts">
const route = useRoute()
const { data, error } = await useAsyncData(route.path, () => {
  return queryCollection('about').first()
})

useHead({
  title: 'About Spencer Frost',
  meta: [
    {
      name: 'description',
      content:
        "Learn about Spencer Frost's web development career, skills, experience, and philosophy.",
    },
  ],
})
</script>

<style scoped>
/* Scoped styles can be added here if needed, but Tailwind utilities should suffice */
</style>
