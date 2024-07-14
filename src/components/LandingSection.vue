<template>
  <section
    id="landing"
    class="full-height d-flex flex-column justify-center align-center">
    <div class="text-center">
      <h1 id="branding" :class="{ sticky: isScrolled }">
        Spencer <strong class="font-yellow">Frost</strong>
      </h1>
      <h1 v-if="isScrolled">&nbsp;</h1>
      <div class="inline-block mb-3">
        <img src="../assets/spencer.jpg" class="avatar" alt="Spencer Frost" />
      </div>
      <h2 class="font-yellow bg-secondary-30 inline-block p-2 mb-4">
        Front-end Developer / DevOps Tinkerer
      </h2>
      <div class="btn-group mt-3">
        <a href="#" class="mr-3">
          <img src="../assets/linkedin.png" class="logos" alt="LinkedIn" />
        </a>
        <a href="#">
          <img src="../assets/github.png" class="logos" alt="GitHub" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingSection',
  data() {
    return {
      hovered: false,
      isScrolled: false,
    }
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight
      this.isScrolled = scrollPosition > windowHeight * 0.25 - 33
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped lang="scss">
@import "@/style.scss";

h1 {
  font-size: 4rem;
  font-family: 'Chakra Petch', sans-serif;
  text-align: center;
  top: 33px;
  left: 0;
  z-index: 1000;
  width: 100%;
  margin-top: 0;
  transition: font-size 0.3s ease;
}

h2 {
  background-color: rgba(50, 50, 50, 0.3);
  display: inline-block;
  padding: 4px;
}

.sticky {
  position: fixed;
  color: white;
  font-size: 2rem;
}

.avatar {
  border-radius: 50%;
  width: 350px;
  height: 350px;
  border: 8px solid $secondary-color;
}

</style>
