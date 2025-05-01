<template>
  <section id="work">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 p-2 text-center text-rounded">
        My Work
      </h2>
      <Carousel class="relative w-full max-w-2xl mx-auto">
        <CarouselContent>
          <CarouselItem v-for="project in projects" :key="project.slug">
            <div class="p-2">
              <Card class="bg-raised-bg text-foreground rounded-lg shadow-md overflow-hidden border border-border">
                <CardContent>
                  <a :href="project.liveUrl || project.repoUrl" target="_blank" rel="noopener noreferrer" class="block">
                    <img :src="project.coverImage" :alt="project.title" class="project-image" />
                  </a>
                  <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2 text-heading">{{ project.title }}</h3>
                    <p class="text-muted-foreground mb-4">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span v-for="tag in project.tech" :key="tag"
                        class="bg-overlay-bg text-foreground px-2 py-1 rounded text-sm">
                        {{ tag }}
                      </span>
                    </div>
                    <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                      View Project
                    </a>
                    <a v-else-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                      View Repo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
</template>

<script setup>
const { data: projects } = await useAsyncData('projects-list', () => 
  queryCollection('projects')
    .order('title', 'ASC')
    .all()
)
</script>

<style scoped>
.project-image {
  aspect-ratio: 1200 / 630;
  width: 100%;
  object-fit: cover;
}
</style>