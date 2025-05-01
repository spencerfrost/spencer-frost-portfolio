<template>
  <section id="work">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 p-2 text-center text-rounded">
        My Work
      </h2>
      <Carousel class="relative w-full max-w-2xl mx-auto">
        <CarouselContent>
          <CarouselItem v-for="project in projects" :key="project.slug">
            <Card>
              <NuxtLink as="a" :href="`/projects/${project.slug}`" class="block">
                <img :src="project.coverImage" :alt="project.title" class="w-full aspect-video rounded-t-xl" />
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
                  <Badge v-for="tag in project.tech" :key="tag" variant="primary">
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
