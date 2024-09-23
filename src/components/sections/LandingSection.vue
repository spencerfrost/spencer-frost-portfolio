<template>
  <section id="landing" class="h-screen flex flex-col justify-center items-center">
    <div class="text-center">
      <h1 id="landing-title" class="text-5xl mb-4 font-bold">
        Spencer
        <span class="text-secondary">Frost</span>
      </h1>
      <div class="mb-3 flex justify-center">
        <img
          src="@assets/spencer.jpg"
          class="rounded-full w-80 h-80 border-8 border-background"
          alt="Spencer Frost"
        />
      </div>
      <h2 class="text-2xl text-secondary bg-opacity-40 bg-background p-2 mb-4">
        Front-end Developer / DevOps Tinkerer
      </h2>
      <div class="mt-3 space-x-3">
        <a href="https://www.linkedin.com/in/spencer-frost-40405463/" class="inline-block">
          <img src="@assets/linkedin.png" class="w-10 h-10" alt="LinkedIn" />
        </a>
        <a href="https://github.com/spencerfrost" class="inline-block">
          <img src="@assets/github.png" class="w-10 h-10" alt="GitHub" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingSection',
  methods: {
    handleScoll() {
      const element = document.getElementById('landing')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>