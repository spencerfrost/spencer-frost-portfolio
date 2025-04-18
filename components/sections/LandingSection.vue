<template>
  <section id="landing" class="flex flex-col items-center justify-center">
    <div class="text-center">
      <h1 class="text-7xl font-black font-rounded text-rosewater mb-4">
        Spencer<span class="text-mauve">Frost</span>
      </h1>

      <div class="mb-6 flex justify-center">
        <div @mouseenter="fingerGuns = true" @mouseleave="fingerGuns = false">
          <img
            src="/images/spencer/kawaii.png"
            class="h-80 w-80 rounded-full border-8 border-green shadow-lg"
            alt="Spencer Frost"
            v-if="!fingerGuns"
          />
          <img
            src="/images/spencer/finger-guns.png"
            class="h-80 w-80 rounded-full border-8 border-maroon shadow-lg"
            alt="Spencer Frost"
            v-if="fingerGuns"
          />
        </div>
      </div>

      <h2 class="mb-8 rounded-md bg-card p-3 text-2xl font-medium text-card-foreground">
        Front-end Developer / DevOps Tinkerer
      </h2>

      <div class="mt-6 flex justify-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href="https://github.com/spencerfrost" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center"
              >
                <Icon name="uil:github" class="h-8 w-8" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href="https://www.linkedin.com/in/spencer-frost-40405463/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center"
              >
              <Icon name="uil:linkedin" class="h-8 w-8" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const fingerGuns = ref(false);

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

</script>