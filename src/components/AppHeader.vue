<template>
  <div class="fixed w-full z-10 flex justify-center mt-3">
    <header class="w-2/3 rounded-full bg-background bg-opacity-90 shadow-md">
      <nav class="px-5 py-3 flex justify-between items-center">
        <div class="w-1/3">
          <ul class="flex space-x-6">
            <li v-for="item in navLinks" :key="item.target">
              <a
                :href="`#${item.target}`"
                @click.prevent="scrollToSection(item.target)"
                class="text-white hover:text-secondary transition-colors duration-200 text-opacity-100"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="w-1/3 flex justify-center">
          <div
            class="text-2xl font-bold text-white transition-opacity duration-300"
            :class="{ 'opacity-0': isH1Visible, 'opacity-100': !isH1Visible }"
          >
            Spencer
            <span class="text-secondary">Frost</span>
          </div>
        </div>

        <div class="w-1/3 flex justify-end">
          <!-- <button class="bg-secondary font-bold px-4 py-2 rounded-full hover:bg-secondary-dark transition-colors duration-200">
            Spencer +
          </button> -->
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
  data() {
    return {
      isH1Visible: true,
      navLinks: [
        { name: 'About', target: 'about' },
        { name: 'Work', target: 'work' },
        { name: 'Contact', target: 'contact' },
      ],
      observer: null,
    }
  },
  methods: {
    scrollToSection(target) {
      const element = document.getElementById(target)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '-64px',
        threshold: 0.1,
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          nextTick(() => {
            console.log(entry.isIntersecting)
            this.isH1Visible = entry.isIntersecting
          })
        })
      }, options)

      const h1Element = document.querySelector('#landing-title')
      if (h1Element) {
        this.observer.observe(h1Element)
      } else {
        console.error('Landing title element not found')
      }
    },
  },
  mounted() {
    nextTick(() => {
      this.setupIntersectionObserver()
    })
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/style.scss';
</style>
