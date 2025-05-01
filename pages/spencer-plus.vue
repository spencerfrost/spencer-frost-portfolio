<template>
  <div class="flex flex-col items-center p-4 bg-bg min-h-screen container mx-auto">
    <WipBanner />
    <h1 class="text-3xl font-bold mb-6 text-heading">Home Server Portal</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Card v-for="service in services" :key="service.name"
        class="bg-raised-bg m-2 p-4 flex flex-col items-center w-48 border border-border rounded-lg shadow-md">
        <CardHeader>
          <CardTitle class="text-lg font-semibold text-heading">
            {{ service.name }}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground text-sm text-center">
            {{ service.description }}
          </p>
        </CardContent>
        <CardFooter class="flex-grow flex items-end">
          <img :src="service.image" alt="" class="w-16 h-16 mb-2" />
        </CardFooter>
        <CardFooter v-if="service.url">
          <a :href="service.url" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
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