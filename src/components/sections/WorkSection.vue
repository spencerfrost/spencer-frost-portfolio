<template>
  <section id="work" class="min-h-screen py-16">
    <div class="container mx-auto px-4">
      <h2
        class="text-3xl font-bold mb-8 p-2 text-white bg-background bg-opacity-50 text-center"
      >
        My Work
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-background text-white rounded-lg shadow-md overflow-hidden"
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
            <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
              >
                {{ tag }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import afterFunkImage from '@/assets/afterfunk.png'
import minecraftSkinMergerImage from '@/assets/minecraft-skin-merger.png'
import portfolioImage from '@/assets/portfolio.png'
import movieRatingsImage from '@/assets/quick-critic.png'
import taskMasterImage from '@/assets/taskmaster.png'

export default {
  name: 'WorkSection',
  data() {
    return {
      projects: [
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
            'SCSS/Sass',
            'Tailwind CSS',
            'CircleCI'
          ],
          link: 'https://mrspinn.ca',
        },
      ],
    }
  },
}
</script>

<style scoped>
.project-image {
  aspect-ratio: 1200 / 630;
  width: 100%;
  object-fit: cover;
}
</style>
