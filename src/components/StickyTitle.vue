<template>
  <h1 ref="branding" id="branding" :class="{ sticky: isScrolled }">
    <slot></slot>
  </h1>
  <h1 class="placeholder" v-if="isScrolled">&nbsp;</h1>
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
  z-index: 1000;
  left: 50%;
  margin: 0;
  
  &.sticky {
    animation: decreaseFontSize 0.3s forwards;
    transform: translateX(-50%);
    position: fixed;
    color: white;
    font-size: 2rem;
  }
}

@keyframes decreaseFontSize {
  from {
    font-size: 4rem
  }
  to {
    font-size: 2rem;
  }
}

</style>
