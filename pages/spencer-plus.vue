<template>
  <div
    class="bg-bg container mx-auto flex min-h-screen flex-col items-center p-4"
  >
    <WipBanner />
    <h1 class="text-heading mb-6 text-3xl font-bold">Home Server Portal</h1>
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <Card
        v-for="service in services"
        :key="service.name"
        class="bg-raised-bg border-border m-2 flex w-48 flex-col items-center rounded-lg border p-4 shadow-md"
      >
        <CardHeader>
          <CardTitle class="text-heading text-lg font-semibold">
            {{ service.name }}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-center text-sm text-muted-foreground">
            {{ service.description }}
          </p>
        </CardContent>
        <CardFooter class="flex flex-grow items-end">
          <img :src="service.image" alt="" class="mb-2 h-16 w-16" >
        </CardFooter>
        <CardFooter v-if="service.url">
          <a
            :href="service.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            Go to {{ service.name }}
          </a>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data, error } = await useAsyncData(route.path, () => {
  return queryCollection('spencerPlus').first()
})
if (error.value) {
  console.error('Error fetching services:', error.value)
}
console.log('Fetched services:', data.value)
const services = data.value?.services || []
</script>
