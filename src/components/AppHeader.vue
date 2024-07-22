<template>
  <header
    class="floating-header d-flex justify-between align-center px-4 py-2 bg-secondary"
  >
    <!-- Left side navigation links -->
    <div class="left-nav d-flex">
      <a
        v-for="link in navLinks"
        :key="link.name"
        @click="scrollToSection(link.target)"
        class="mr-4 font-white text-md cursor-pointer"
      >
        {{ link.name }}
      </a>
    </div>

    <!-- Center logo/branding -->

    <!-- Right side Spencer+ link -->
    <div class="right-nav">
      <router-link
        to="/spencer-plus"
        class="bg-accent py-2 px-4 font-secondary font-bold"
        style="border-radius: 20px; text-decoration: none"
      >
        Spencer+
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { name: 'About', target: 'about' },
        { name: 'Work', target: 'work' },
        { name: 'Contact', target: 'contact' },
      ],
    }
  },
  methods: {
    scrollToSection(target) {
      const element = document.getElementById(target)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>

<style scoped>
.floating-header {
  border-radius: 24px;
  max-width: 1024px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.right-nav {
  text-align: right;
}
</style>
