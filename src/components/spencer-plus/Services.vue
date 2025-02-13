<template>
  <div class="text-white">
    <h1 class="text-4xl font-bold mb-8">Services & Container Management</h1>

    <!-- Docker Overview -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 text-secondary">Container Orchestration</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Docker Implementation</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>15+ orchestrated Docker networks for service isolation</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Custom bridge and macvlan network configurations</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Automated container updates via Watchtower</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Standardized volume management and naming conventions</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Service Organization</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Structured deployment strategy for container management</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Consistent naming conventions across services</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Automated health monitoring for all containers</span>
            </li>
            <li class="flex items-start">
              <span class="text-secondary mr-2">•</span>
              <span>Efficient resource allocation and management</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Service Categories -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 text-secondary">Service Categories</h2>
      
      <!-- Media Management -->
      <div class="bg-gray-800 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-semibold mb-4">Media Management Suite</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold mb-2">Core Services</h4>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Plex Media Server with hardware transcoding</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Sonarr, Radarr, and Lidarr for content management</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Bazarr for subtitle management</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Additional Features</h4>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Overseerr for request management</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Automated metadata management</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Integrated backup solution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Cloud Storage -->
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-xl font-semibold mb-4">Cloud Storage Solutions</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold mb-2">Nextcloud Implementation</h4>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>All-in-One deployment with office suite</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Integration with existing services</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Automated backup strategies</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">PhotoPrism Integration</h4>
            <ul class="space-y-2">
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Dual instance configuration</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Nextcloud photo integration</span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary mr-2">•</span>
                <span>Performance-optimized setup</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>