<template>
  <div>
    <h1 ref="branding" id="branding" :class="{ sticky: isScrolled }">
      <slot></slot>
    </h1>
    <h1 class="placeholder" v-if="isScrolled">&nbsp;</h1>
  </div>
</template>

<script>
export default {
  name: 'StickyTitle',
  data() {
    return {
      isScrolled: false,
      transitionPoint: 0,
    }
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset
      this.isScrolled = scrollPosition > this.transitionPoint
    },
    calculateTransitionPoint() {
      const brandingElement = this.$refs.branding
      if (brandingElement) {
        const rect = brandingElement.getBoundingClientRect()
        this.transitionPoint = window.pageYOffset + rect.top - 33
      }
    },
    handleResize() {
      this.calculateTransitionPoint()
      this.handleScroll()
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.calculateTransitionPoint()
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
    })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 4rem;
  font-family: 'Chakra Petch', sans-serif;
  text-align: center;
  top: 33px;
  // left: 0;
  z-index: 1000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  transition: font-size 0.3s ease;
}

.sticky {
  position: fixed;
  color: white;
  font-size: 2rem;
}
</style>
