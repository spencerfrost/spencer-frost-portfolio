<template>
  <section id="work" class="min-h-screen py-16 bg-bg">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 p-2 text-center text-rounded">
        My Work
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-raised-bg text-foreground rounded-lg shadow-md overflow-hidden border border-border"
        >
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="project-image"
            />
          </a>
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2 text-heading">{{ project.title }}</h3>
            <p class="text-muted-foreground mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="bg-overlay-bg text-foreground px-2 py-1 rounded text-sm"
              >
                {{ tag }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import afterFunkImage from '/images/projects/afterfunk.png'
import minecraftSkinMergerImage from '/images/projects/minecraft-skin-merger.png'
import portfolioImage from '/images/projects/portfolio.png'
import movieRatingsImage from '/images/projects/quick-critic.png'
import taskMasterImage from '/images/projects/taskmaster.png'

const projects = [
  {
    title: 'Blueprint',
    image: '/images/projects/blueprint.png',
    description: "A modern web platform serving as the central hub for Create Mod content in the Minecraft ecosystem. I built this platform to bring together community-made addons and player-designed schematics in one place, making Create Mod content more discoverable and manageable for the community.",
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Shadcn/UI",
      "Appwrite",
      "Meilisearch",
      "OAuth"
    ],
  },
  {
    title: 'TaskMaster',
    image: taskMasterImage,
    description:
      'A React application for managing tasks and to-do lists.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'RESTful API design',
      'JWT authentication',
      'CircleCI',
    ],
    link: 'https://taskmaster.mrspinn.ca/',
  },
  {
    title: 'Minecraft Skin Merger',
    image: minecraftSkinMergerImage,
    description: 'A React application for merging Minecraft skins.',
    tags: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'RESTful API Development',
      'Rollup',
      'Babel',
      'CircleCI',
    ],
    link: 'https://mcskinmerger.mrspinn.ca/',
  },
  {
    title: 'QuickCritic',
    image: movieRatingsImage,
    description:
      'A React application that fetches movie and TV show ratings from an API.',
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'RESTful API Integration',
      'CircleCI',
      'Nginx',
    ],
    link: 'https://tmdb.mrspinn.ca/',
  },
  {
    title: 'After Funk',
    image: afterFunkImage,
    description: 'A custom WordPress theme for a funk band.',
    tags: ['WordPress', 'PHP', 'CSS', 'Custom Theme'],
    link: 'https://afterfunk.ca/',
  },
  {
    title: 'Portfolio Website',
    image: portfolioImage,
    description:
      'A Vue.js application for showcasing my work and skills.',
    tags: [
      'Vue.js 3',
      'Vite',
      'Vue Router',
      'Tailwind CSS',
      'CircleCI'
    ],
    link: 'https://mrspinn.ca',
  },
];
</script>

<style scoped>
.project-image {
  aspect-ratio: 1200 / 630;
  width: 100%;
  object-fit: cover;
}
</style>
