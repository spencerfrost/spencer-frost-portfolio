<template>
  <section class="my-8 flex flex-col items-center justify-center px-4 h-full">
    <div class="container mx-auto">
      <h1 class="mb-4 text-center font-rounded font-black text-rosewater">
        My Work
      </h1>
      <div class="mx-auto w-full max-w-2xl">
        <Carousel class="mx-auto w-full max-w-2xl overflow-hidden md:overflow-visible" v-if="projects?.length" :key="projects?.length">
          <CarouselContent>
            <CarouselItem v-for="project in projects" :key="project.slug">
              <Card>
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
                <CardFooter class="flex flex-col sm:flex-row justify-between gap-2">
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
          <ClientOnly>
            <CarouselPrevious class="z-30" />
            <CarouselNext class="z-30" />
          </ClientOnly>
        </Carousel>
        <div v-else>
          <div class="mx-auto flex w-full max-w-2xl flex-col space-y-4">
            <Skeleton class="aspect-video rounded-xl" />
            <!-- CardHeader: Title & Description -->
            <div class="py-4">
              <Skeleton class="mb-2 h-8 w-2/3" />
              <!-- Title -->
              <Skeleton class="mb-4 h-4 w-1/2" />
              <!-- Description -->
              <!-- Tags -->
              <div class="mb-4 flex flex-wrap gap-2">
                <Skeleton class="h-6 w-24 rounded-full" />
                <Skeleton class="h-6 w-16 rounded-full" />
                <Skeleton class="h-6 w-20 rounded-full" />
                <Skeleton class="h-6 w-28 rounded-full" />
              </div>
            </div>

            <!-- CardFooter: Buttons -->
            <div class="mt-auto flex justify-between gap-2 p-4">
              <Skeleton class="h-8 w-32 rounded" />
              <Skeleton class="h-8 w-32 rounded" />
              <Skeleton class="h-8 w-32 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('projects-list', () =>
  queryCollection('projects').order('title', 'ASC').all()
)
</script>
