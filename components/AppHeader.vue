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
            class="text-2xl font-bold text-white transition-opacity duration-500"
            :class="{ 'opacity-0': isH1Visible, 'opacity-100': !isH1Visible }"
          >
            Spencer
            <span class="text-secondary">Frost</span>
          </div>
        </div>

        <div class="w-1/3 flex justify-end">
          <!-- Placeholder for future content -->
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue';

export default {
  setup() {
    const isH1Visible = ref(true);
    const observer = ref(null);

    const navLinks = [
      { name: 'About', target: 'about' },
      { name: 'Work', target: 'work' },
      { name: 'Contact', target: 'contact' },
    ];

    const scrollToSection = (target) => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const setupIntersectionObserver = () => {
      console.log('Setting up IntersectionObserver');
      const options = {
        root: null,
        rootMargin: '-64px',
        threshold: 0.5,
      };

      observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log('Intersection detected:', entry.isIntersecting);
          isH1Visible.value = entry.isIntersecting;
        });
      }, options);

      const h1Element = document.querySelector('#landing-title');
      if (h1Element) {
        console.log('Landing title element found, observing');
        observer.value.observe(h1Element);
      } else {
        console.error('Landing title element not found');
      }
    };

    onMounted(() => {
      console.log('Component mounted');
      // Use a small delay to ensure the DOM is fully rendered
      setTimeout(setupIntersectionObserver, 100);
    });

    onBeforeUnmount(() => {
      if (observer.value) {
        console.log('Disconnecting observer');
        observer.value.disconnect();
      }
    });

    return {
      isH1Visible,
      navLinks,
      scrollToSection,
    };
  },
};
</script>

<style scoped>
</style>