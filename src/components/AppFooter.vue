<template>
  <footer class="bg-background text-white py-4 mt-auto">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="w-1/3 text-sm">
        © {{ currentYear }} Spencer Frost. All rights reserved.
      </div>
      <div class="w-1/3 flex space-x-4 justify-center">
        <a href="https://linkedin.com/in/spencer-frost-40405463" target="_blank" rel="noopener noreferrer" class="hover:text-secondary">
          LinkedIn
        </a>
        <a href="https://github.com/spencerfrost" target="_blank" rel="noopener noreferrer" class="hover:text-secondary">
          GitHub
        </a>
      </div>
      <div class="w-1/3 text-sm text-right">
        Built with Vue.js and ❤️
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>