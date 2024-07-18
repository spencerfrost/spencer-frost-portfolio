<template>
  <section
    id="landing"
    class="full-height d-flex flex-column justify-center align-center">
    <div class="text-center">
      <StickyTitle>
        Spencer <strong class="font-yellow">Frost</strong>
      </StickyTitle>
      <div class="inline-block mb-3">
        <img src="@assets/spencer.jpg" class="avatar" alt="Spencer Frost" />
      </div>
      <h2 class="font-yellow bg-secondary-30 inline-block p-2 mb-4">
        Front-end Developer / DevOps Tinkerer
      </h2>
      <div class="btn-group mt-3">
        <a href="#" class="mr-3">
          <img src="@assets/linkedin.png" class="logos" alt="LinkedIn" />
        </a>
        <a href="#">
          <img src="@assets/github.png" class="logos" alt="GitHub" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import StickyTitle from '../StickyTitle.vue';

export default {
  name: 'LandingSection',
  components: {
    StickyTitle,
  },
}
</script>

<style scoped lang="scss">
@import "@/style.scss";

h2 {
  background-color: rgba(50, 50, 50, 0.3);
  display: inline-block;
  padding: 4px;
}

.avatar {
  border-radius: 50%;
  width: 350px;
  height: 350px;
  border: 8px solid $secondary-color;
}
</style>