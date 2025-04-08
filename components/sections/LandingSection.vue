<template>
  <section
    id="landing"
    class="flex h-screen flex-col items-center justify-center bg-[var(--background)]"
  >
    <div class="text-center">
      <h1 id="landing-title" class="mb-4 text-5xl font-bold text-[var(--foreground)]">
        Spencer
        <span class="text-[var(--primary)]">Frost</span>
      </h1>

      <div class="mb-6 flex justify-center">
        <img
          src="/images/spencer.jpg"
          class="h-80 w-80 rounded-full border-8 border-[var(--background)] shadow-lg"
          alt="Spencer Frost"
        />
      </div>

      <h2 class="mb-8 rounded-md bg-[var(--card)] p-3 text-2xl font-medium text-[var(--card-foreground)]">
        Front-end Developer / DevOps Tinkerer
      </h2>

      <div class="mb-6 flex justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          asChild
          class="h-12 w-12 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] transition-colors hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
        >
          <a href="https://www.linkedin.com/in/spencer-frost-40405463/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon class="h-6 w-6" />
          </a>
        </Button>

        <Button
          variant="outline"
          size="icon"
          asChild
          class="h-12 w-12 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] transition-colors hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
        >
          <a href="https://github.com/spencerfrost" target="_blank" rel="noopener noreferrer">
            <GithubIcon class="h-6 w-6" />
          </a>
        </Button>
      </div>

      <div class="mt-4">
        <ThemeSwitcher />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { LinkedinIcon, GithubIcon } from 'lucide-vue-next'

const scrollToLanding = () => {
  const element = document.getElementById('landing')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>