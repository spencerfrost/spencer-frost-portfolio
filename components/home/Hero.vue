<template>
  <section class="flex flex-col items-center justify-center px-4 py-8">
    <div class="text-center">
      <h1
        class="mb-4 font-rounded font-black text-rosewater"
      >
        Spencer<span class="text-mauve">Frost</span>
      </h1>

      <div class="mb-6 flex justify-center">
        <div @mouseenter="fingerGuns = true" @mouseleave="fingerGuns = false">
          <CircleImage
            :src="
              fingerGuns
                ? '/images/spencer/finger-guns.png'
                : '/images/spencer/kawaii.png'
            "
            :color="fingerGuns ? 'maroon' : 'green'"
            size="lg"
            alt="Spencer Frost"
          />
        </div>
      </div>

      <h4 class="rounded-md bg-card/80 p-2 font-medium sm:p-3 md:p-4">
        Mindful Modern Development
      </h4>

      <div class="mt-6 flex justify-center gap-4">
        <a
          href="https://github.com/spencerfrost"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center"
        >
          <Icon name="uil:github" class="h-8 w-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/spencer-frost-40405463/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center"
        >
          <Icon name="uil:linkedin" class="h-8 w-8" />
        </a>
      </div>

      <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <NuxtLink to="/about" as="div">
          <Button variant="rosewater" class="w-3/4 sm:w-auto">
            More about me
          </Button>
        </NuxtLink>
        <NuxtLink to="/projects" as="div">
          <Button variant="mauve" class="w-3/4 sm:w-auto">
            Check out my work
          </Button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const fingerGuns = ref(false)
</script>
