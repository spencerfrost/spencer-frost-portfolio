<template>
  <section id="work">
    <div class="container mx-auto px-4">
      <h2 class="text-rounded mb-8 p-2 text-center text-3xl font-bold">
        My Work
      </h2>
      <Carousel class="relative mx-auto w-full max-w-2xl">
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
              <CardFooter
                class="flex flex-col justify-between gap-2 sm:flex-row"
              >
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
</template>

<script setup>
const { data: projects } = await useAsyncData('projects-list', () =>
  queryCollection('projects').order('title', 'ASC').all()
)
</script>
