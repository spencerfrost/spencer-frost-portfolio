<template>
  <header class="header">
    <HeaderBranding />
    <HeaderNav />
  </header>
</template>

<script>
import HeaderBranding from './AppHeader/HeaderBranding.vue'
import HeaderNav from './AppHeader/HeaderNav.vue'

export default {
  components: {
    HeaderBranding,
    HeaderNav,
  },
}
</script>

<style scoped>
.header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
