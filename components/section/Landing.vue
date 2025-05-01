<template>
  <section
    id="landing"
    class="flex flex-col items-center justify-center px-4 py-8"
  >
    <div class="text-center">
      <h1
        class="mb-4 font-rounded text-4xl font-black text-rosewater sm:text-7xl"
      >
        Spencer<span class="text-mauve">Frost</span>
      </h1>

      <div class="mb-6 flex justify-center">
        <div @mouseenter="fingerGuns = true" @mouseleave="fingerGuns = false">
          <img
            v-if="!fingerGuns"
            src="/images/spencer/kawaii.png"
            class="h-40 w-40 rounded-full border-4 border-green shadow-lg transition-all duration-200 sm:h-80 sm:w-80 sm:border-8"
            alt="Spencer Frost"
          />
          <img
            v-if="fingerGuns"
            src="/images/spencer/finger-guns.png"
            class="h-40 w-40 rounded-full border-4 border-maroon shadow-lg transition-all duration-200 sm:h-80 sm:w-80 sm:border-8"
            alt="Spencer Frost"
          />
        </div>
      </div>

      <h2
        class="mb-6 rounded-md bg-card p-2 text-lg font-medium text-card-foreground sm:mb-8 sm:p-3 sm:text-2xl"
      >
        Mindful Modern Development
      </h2>

      <div class="mt-6 flex justify-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
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
            <TooltipTrigger as-child>
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

      <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <Button href="/about" variant="rosewater"> More about me </Button>
        <Button href="/projects" variant="mauve"> Check out my work </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const fingerGuns = ref(false)
</script>
