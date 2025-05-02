<template>
  <div class="mb-12">
    <h1 class="mb-3 tracking-tight">
      {{ title }}
    </h1>

    <p v-if="longDescription" class="mb-6 text-lg text-muted-foreground">
      {{ longDescription }}
    </p>
    <p v-else-if="description" class="mb-6 text-lg text-muted-foreground">
      {{ description }}
    </p>

    <div class="mb-6 flex flex-wrap gap-3">
      <Button v-if="liveUrl" as-child variant="outline">
        <a :href="liveUrl" target="_blank" rel="noopener noreferrer">
          <ExternalLink class="mr-2 h-4 w-4" />
          Live Demo
        </a>
      </Button>
      <Button v-if="repoUrl" as-child variant="outline">
        <a :href="repoUrl" target="_blank" rel="noopener noreferrer">
          <Code class="mr-2 h-4 w-4" />
          Source Code
        </a>
      </Button>
    </div>

    <div v-if="tech?.length" class="flex flex-wrap gap-2">
      <Badge v-for="techName in tech" :key="techName" variant="secondary">
        {{ techName }}
      </Badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExternalLink, Code } from 'lucide-vue-next'

interface Props {
  title: string
  description?: string
  longDescription?: string
  liveUrl?: string
  repoUrl?: string
  tech?: string[]
}

// Define props with defaults or make them optional
defineProps<Props>()
</script>
