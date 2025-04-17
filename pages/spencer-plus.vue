<template>
  <div class="flex flex-col items-center p-4 bg-bg min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-heading">Home Server Portal</h1>
    <div class="flex flex-row flex-wrap justify-center">
      <div 
        v-for="service in services" 
        :key="service.name" 
        class="bg-raised-bg m-2 p-4 flex flex-col items-center w-48 border border-border rounded-lg shadow-md"
      >
        <h2 class="text-xl font-bold mb-2 text-center text-heading">{{ service.name }}</h2>
        <p class="text-sm mb-4 text-center text-muted-foreground">{{ service.description }}</p>
        <a 
          :href="service.url" 
          target="_blank" 
          class="bg-primary text-primary-foreground font-bold py-2 px-4 rounded hover:bg-primary/90 transition-colors duration-200 no-underline"
        >
          Open {{ service.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    name: 'Plex',
    description: 'Stream your media collection.',
    url: 'http://your-plex-url:32400'
  },
  {
    name: 'Overseerr',
    description: 'Request and manage media.',
    url: 'http://your-overseerr-url:5055'
  },
  {
    name: 'Tautulli',
    description: 'Monitor Plex Media Server.',
    url: 'http://your-tautulli-url:8181'
  },
  {
    name: 'qBittorrent',
    description: 'Torrent client.',
    url: 'http://your-qbittorrent-url:8080'
  },
  {
    name: 'SABnzbd',
    description: 'Usenet downloader.',
    url: 'http://your-sabnzbd-url:8080'
  },
  {
    name: 'Sonarr',
    description: 'TV show management.',
    url: 'http://your-sonarr-url:8989'
  },
  {
    name: 'Radarr',
    description: 'Movie management.',
    url: 'http://your-radarr-url:7878'
  },
  {
    name: 'Lidarr',
    description: 'Music management.',
    url: 'http://your-lidarr-url:8686'
  },
  {
    name: 'Prowlarr',
    description: 'Indexer management.',
    url: 'http://your-prowlarr-url:9696'
  },
  {
    name: 'Bazarr',
    description: 'Subtitle management.',
    url: 'http://your-bazarr-url:6767'
  }
];
</script>