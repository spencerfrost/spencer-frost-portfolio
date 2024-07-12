<template>
  <div class="app-container">
    <app-header :isScrolled="isScrolled" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      isScrolled: false,
    }
  },
}
</script>
