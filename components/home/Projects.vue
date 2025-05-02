<template>
  <section id="work" class="flex flex-col items-center justify-center px-4">
    <div class="container mx-auto">
      <h1 class="mb-4 text-center font-rounded font-black text-rosewater">
        My Work
      </h1>
      <Carousel class="mx-auto w-full max-w-2xl">
        <CarouselContent>
          <CarouselItem v-for="project in projects" :key="project.slug">
            <Card class="h-full">
              <NuxtLink
                as="a"
                :href="`/projects/${project.slug}`"
                class="block"
              >
                <img
                  :src="project.coverImage"
                  :alt="project.title"
                  class="aspect-video w-full rounded-t-xl"
                />
              </NuxtLink>
              <CardHeader>
                <CardTitle>
                  {{ project.title }}
                </CardTitle>
                <CardDescription>
                  {{ project.description }}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-wrap gap-2">
                  <Badge
                    v-for="tag in project.tech"
                    :key="tag"
                    variant="primary"
                  >
                    {{ tag }}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter class="flex justify-between gap-2">
                <NuxtLink :href="`/projects/${project.slug}`">
                  <Button variant="link" class="w-full text-red">
                    Project Page
                  </Button>
                </NuxtLink>
                <NuxtLink :href="project.repoUrl" target="_blank">
                  <Button variant="link" class="w-full text-sapphire">
                    View Repo
                  </Button>
                </NuxtLink>
                <NuxtLink :href="project.liveUrl" target="_blank">
                  <Button variant="link" class="w-full text-green">
                    Live Demo
                  </Button>
                </NuxtLink>
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="hidden sm:absolute" />
        <CarouselNext class="hidden sm:absolute" />
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('projects-list', () =>
  queryCollection('projects').order('title', 'ASC').all()
)
</script>
