<template>
  <div class="container mx-auto px-4 py-8" v-if="project">
    <WipBanner />
    <ProjectHeader :title="project.title" :longDescription="project.longDescription" :liveUrl="project.liveUrl"
      :repoUrl="project.repoUrl" :tech="project.tech" />

    <ProjectVisualsCarousel :screenshots="project.screenshots" :title="project.title" class="mb-12" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card class="lg:col-span-1 md:col-span-1">
        <CardHeader>
          <CardTitle>Project Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground">{{ project.goals }}</p>
        </CardContent>
      </Card>

      <Card class="lg:col-span-1 md:col-span-1">
        <CardHeader>
          <CardTitle>My Role</CardTitle>
        </CardHeader>
        <CardContent>
          <ul v-if="Array.isArray(project.role)" class="list-disc list-inside space-y-1 text-muted-foreground">
            <li v-for="(item, index) in project.role" :key="index">{{ item }}</li>
          </ul>
          <p v-else class="text-muted-foreground">{{ project.role }}</p>
        </CardContent>
      </Card>

      <Card class="lg:col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle>Tech Choices</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground">{{ project.techStack }}</p>
        </CardContent>
      </Card>

      <Card class="lg:col-span-2 md:col-span-2">
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-3">
            <li v-for="(feature, index) in project.features" :key="index">
              <h4 class="font-semibold text-foreground">{{ feature.title }}</h4>
              <p v-if="feature.description" class="text-sm text-muted-foreground">{{ feature.description }}</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card class="lg:col-span-1 md:col-span-1">
        <CardHeader>
          <CardTitle>Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-3">
            <li v-for="(item, index) in project.challenges" :key="index">
              <p class="text-foreground">{{ item.challenge }}</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card class="lg:col-span-1 md:col-span-1">
        <CardHeader>
          <CardTitle>Key Takeaways</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground">{{ project.learnings }}</p>
        </CardContent>
      </Card>

      <Card v-if="project.openSource" class="lg:col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle>Open Source</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-muted-foreground">This project involved open source aspects.</p>
        </CardContent>
      </Card>
    </div>
  </div>
  <div v-else class="container mx-auto px-4 py-8">
    <p>Loading...</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: project, error } = await useAsyncData(route.path, () => {

  return queryCollection('projects').where('slug', '=', route.params.id).first()
})
</script>

<style scoped>
/* Add any page-specific styles if necessary */
</style>