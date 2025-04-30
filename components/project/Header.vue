<template>
  <div class="mb-12">
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
      {{ title }}
    </h1>

    <p v-if="longDescription" class="text-lg text-muted-foreground mb-6">
      {{ longDescription }}
    </p>
    <p v-else-if="description" class="text-lg text-muted-foreground mb-6">
      {{ description }}
    </p>

    <div class="flex flex-wrap gap-3 mb-6">
      <Button v-if="liveUrl" as-child variant="outline">
        <a :href="liveUrl" target="_blank" rel="noopener noreferrer">
          <ExternalLink class="w-4 h-4 mr-2" />
          Live Demo
        </a>
      </Button>
      <Button v-if="repoUrl" as-child variant="outline">
        <a :href="repoUrl" target="_blank" rel="noopener noreferrer">
          <Code class="w-4 h-4 mr-2" />
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
import { ExternalLink, Code } from 'lucide-vue-next';

interface Props {
  title: string;
  description?: string;
  longDescription?: string;
  liveUrl?: string;
  repoUrl?: string;
  tech?: string[];
}

// Define props with defaults or make them optional
defineProps<Props>();
</script>