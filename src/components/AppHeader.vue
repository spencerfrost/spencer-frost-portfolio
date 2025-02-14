<template>
  <div class="fixed w-full z-10 flex justify-center mt-3">
    <header class="w-2/3 rounded-full bg-crust shadow-md backdrop-blur">
      <nav class="px-5 py-3 flex justify-between items-center">
        <div class="w-1/3">
          <ul class="flex space-x-6">
            <li v-for="item in navLinks" :key="item.target">
              <a
                :href="`#${item.target}`"
                @click.prevent="scrollToSection(item.target)"
                :class="`text-${item.color} hover:text-lavender transition-colors duration-200`"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="w-1/3 flex justify-center">
          <div
            class="text-2xl font-bold transition-opacity duration-500"
            :class="{ 'opacity-0': isH1Visible, 'opacity-100': !isH1Visible }"
          >
            <span class="text-text">Spencer&nbsp;</span>
            <span class="text-mauve">Frost</span>
          </div>
        </div>

        <div class="w-1/3 flex justify-end">
          <router-link
            to="/spencer-plus"
            class="bg-mauve text-base font-bold px-4 py-2 rounded-full hover:bg-lavender transition-all duration-200"
          >
            Spencer+
          </router-link>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const isH1Visible = ref(true);
const observer = ref(null);

const navLinks = [
  { name: 'About', target: 'about', color: 'teal' },
  { name: 'Work', target: 'work', color: 'maroon' },
  { name: 'Contact', target: 'contact', color: 'pink'},
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
</script>
