<template>
  <div class="min-h-screen bg-crust">
    <!-- Header with navigation -->
    <header class="bg-base/90 fixed top-0 w-full z-50 shadow-md backdrop-blur">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/spencer-plus" class="text-3xl font-bold text-text group">
            Spencer<span class="text-mauve group-hover:text-lavender transition-colors duration-200">+</span>
          </router-link>
          <div class="flex space-x-8">
            <router-link 
              v-for="route in routes" 
              :key="route.path"
              :to="`/spencer-plus/${route.path}`"
              class="text-text hover:text-lavender transition-colors duration-200"
            >
              {{ route.name }}
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main content area -->
    <main class="pt-24 container mx-auto px-6">
      <!-- Show welcome and categories if on main spencer+ page -->
      <template v-if="$route.path === '/spencer-plus'">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-text mb-6">
            Welcome to Spencer<span class="text-mauve">+</span>
          </h1>
          <p class="text-xl text-subtext0 max-w-3xl mx-auto mb-12">
            Explore my comprehensive DevOps homelab featuring 40+ Docker containers,
            custom infrastructure, and various self-hosted services.
          </p>
        </div>

        <!-- Category tiles -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="`/spencer-plus/${route.path}`"
            class="group relative overflow-hidden rounded-lg aspect-video bg-surface0 hover:bg-surface1 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div class="absolute inset-0 bg-gradient-to-t from-overlay0/70 to-transparent group-hover:from-overlay0/90 transition-all duration-300"></div>
            <div class="absolute bottom-0 left-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
              <h3 class="text-2xl font-bold text-text mb-2 group-hover:text-mauve transition-colors duration-300">
                {{ route.name }}
              </h3>
              <p class="text-subtext1 group-hover:text-text transition-colors duration-300">
                {{ route.description }}
              </p>
            </div>
          </router-link>
        </div>
      </template>

      <!-- Show section content for other routes -->
      <router-view v-else></router-view>
    </main>
  </div>
</template>

<script setup>
const routes = [
  {
    path: 'infrastructure',
    name: 'Infrastructure',
    description: 'Explore the core system architecture and storage management.'
  },
  {
    path: 'services',
    name: 'Services',
    description: 'Discover the variety of self-hosted services and applications.'
  },
  {
    path: 'monitoring',
    name: 'Monitoring',
    description: 'View real-time metrics and system monitoring solutions.'
  },
  {
    path: 'technical',
    name: 'Technical',
    description: 'Deep dive into the technical achievements and implementations.'
  }
];
</script>

<style scoped>
.router-link-active {
  @apply text-mauve hover:text-lavender;
}
</style>
