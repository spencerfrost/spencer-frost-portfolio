<template>
  <section id="landing" class="h-screen flex flex-col justify-center items-center">
    <div class="text-center">
      <h1 id="landing-title" class="text-5xl mb-4 font-bold text-text">
        Spencer
        <span class="text-mauve">Frost</span>
      </h1>
      <div class="mb-3 flex justify-center">
        <img
          src="@assets/spencer.jpg"
          class="rounded-full w-64 h-64 border-8 border-surface0"
          alt="Spencer Frost"
        />
      </div>
      <h2 class="text-2xl text-mauve bg-surface0 p-2 mb-4">
        Front-end Developer / DevOps Tinkerer
      </h2>
      <div class="mt-3 space-x-3">
        <a href="https://www.linkedin.com/in/spencer-frost-40405463/"
           class="inline-block hover:opacity-80 transition-opacity">
          <img src="@assets/linkedin.png" class="w-10 h-10" alt="LinkedIn" />
        </a>
        <a href="https://github.com/spencerfrost"
           class="inline-block hover:opacity-80 transition-opacity">
          <img src="@assets/github.png" class="w-10 h-10" alt="GitHub" />
        </a>
      </div>
      <div class="mt-3 flex justify-center">
        <ThemeSwitcher />
      </div>
    </div>
  </section>
</template>

<script setup>
import ThemeSwitcher from '../ThemeSwitcher.vue';

const handleScroll = () => {
  const element = document.getElementById('landing')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>