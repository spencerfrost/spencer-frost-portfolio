<template>
  <section class="my-8 flex flex-col items-center justify-center px-4">
    <div class="container mx-auto">
      <h1 class="mb-4 text-center font-rounded font-black text-rosewater">
        My Work
      </h1>
      <div class="mx-auto w-full max-w-2xl">
        <VueCarousel
          :items-to-show="1"
          :wrap-around="true"
          :gap="24"
          :transition="500"
          v-if="projects && projects.length"
        >
          <VueSlide v-for="project in projects" :key="project.slug">
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
              <CardFooter class="flex justify-between gap-2 pb-5">
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
          </VueSlide>
          <template #addons>
            <VueNavigation>
              <template #prev>
                <Icon
                  name="uil:arrow-circle-left"
                  class="h-8 w-8 text-foreground"
                />
              </template>
              <template #next>
                <Icon
                  name="uil:arrow-circle-right"
                  class="h-8 w-8 text-foreground"
                />
              </template>
            </VueNavigation>
          </template>
        </VueCarousel>
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
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
const { data: projects } = useAsyncData('projects-list', () =>
  queryCollection('projects').order('title', 'ASC').all()
)
</script>

<style>
.carousel__prev {
  left: -4rem;
}
.carousel__next {
  right: -4rem;
}
</style>
