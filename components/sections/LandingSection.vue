<template>
  <section id="landing" class="flex flex-col items-center justify-center">
    <div class="text-center">
      <h1 id="landing-title" class="mb-4 text-5xl font-bold text-heading">
        Spencer
        <span class="text-primary">Frost</span>
      </h1>

      <div class="mb-6 flex justify-center">
        <img
          src="/images/spencer/headshot.jpg"
          class="h-80 w-80 rounded-full border-8 border-bg shadow-lg"
          alt="Spencer Frost"
        />
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
      <ThemeSwitcher class="mt-8" />
    </div>
  </section>
</template>

<script setup>
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

</script>