<template>
  <div class="flex flex-col items-center p-4 bg-bg min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-heading">Home Server Portal</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <UiCard
        v-for="service in services" 
        :key="service.name" 
        class="bg-raised-bg m-2 p-4 flex flex-col items-center w-48 border border-border rounded-lg shadow-md"
      >
        <UiCardHeader>
          <UiCardTitle class="text-lg font-semibold text-heading">
            {{ service.name }}
          </UiCardTitle>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-muted-foreground text-sm text-center">
            {{ service.description }}
          </p>
        </UiCardContent>
        <UiCardFooter class="flex-grow flex items-end">
          <img
            :src="service.image"
            alt=""
            class="w-16 h-16 mb-2"
          />
        </UiCardFooter>
        <UiCardFooter v-if="service.url">
          <a
            :href="service.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary hover:underline"
          >
            Go to {{ service.name }}
          </a>
        </UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    name: 'Plex',
    description: 'Stream your media collection.',
    url: 'https://plex.mrspinn.ca',
    image: '/images/brand-logos/Plex/icon.jpeg'
  },
  {
    name: 'Overseerr',
    description: 'Request and manage media.',
    url: 'https://overseerr.mrspinn.ca',
    image: '/images/brand-logos/Overseerr/icon.png'
  },
  {
    name: 'Tautulli',
    description: 'Monitor Plex Media Server.',
    url: 'https://tautulli.mrspinn.ca',
    image: '/images/brand-logos/Tautulli/icon.png'
  },
  {
    name: 'qBittorrent',
    description: 'Torrent client.',
    url: 'https://torrents.mrspinn.ca',
    image: '/images/brand-logos/qBittorrent/icon.png'
  },
  {
    name: 'SABnzbd',
    description: 'Usenet downloader.',
    url: 'https://downloads.mrspinn.ca',
    image: '/images/brand-logos/SABnzbd/icon.jpeg'
  },
  {
    name: 'Sonarr',
    description: 'TV show management.',
    url: 'https://sonarr.mrspinn.ca',
    image: '/images/brand-logos/Sonarr/icon.svg'
  },
  {
    name: 'Radarr',
    description: 'Movie management.',
    url: 'https://radarr.mrspinn.ca',
    image: '/images/brand-logos/Radarr/icon.png'
  },
  {
    name: 'Lidarr',
    description: 'Music management.',
    url: 'https://lidarr.mrspinn.ca',
    image: '/images/brand-logos/Lidarr/icon.png'
  },
  {
    name: 'Prowlarr',
    description: 'Indexer management.',
    url: 'https://prowlarr.mrspinn.ca',
    image: '/images/brand-logos/Prowlarr/icon.png'
  },
  {
    name: 'Bazarr',
    description: 'Subtitle management.',
    url: 'https://bazarr.mrspinn.ca',
    image: '/images/brand-logos/Bazarr/icon.png'
  },
  {
    name: 'Docker',
    description: 'Container management.',
    image: '/images/brand-logos/Docker/icon.png'
  },
  {
    name: 'Portainer',
    description: 'Docker management.',
    url: 'https://portainer.mrspinn.ca',
    image: '/images/brand-logos/Portainer/icon.png'
  },
  {
    name: 'Pi-hole',
    description: 'Network-wide ad blocker and DNS sinkhole.',
    url: 'https://pihole.mrspinn.ca',
    image: '/images/brand-logos/Pi-hole/icon.png'
  },
  {
    name: 'Overseerr',
    description: 'Request and manage media.',
    url: 'https://overseerr.mrspinn.ca',
    image: '/images/brand-logos/Overseerr/icon.png'
  },
];
</script>