<template>
  <div>
    <transition name="slide-fade">
      <router-link to="/" custom v-slot="{ isActive, navigate }">
        <div
          v-if="!isActive"
          class="branding"
          @mouseover="hover = true"
          @mouseout="hover = false"
          @click="navigate"
        >
          <div class="img-container">
            <img src="@/assets/spencer.jpg" class="faceImage" alt="Avatar" />
          </div>
          <div class="nameLogo">
            <div>Spencer</div>
            <div>Frost</div>
          </div>
        </div>
      </router-link>
    </transition>
  </div>
</template>

<script>
import nameImageDefault from '@/assets/name.png'
import nameImageHover from '@/assets/namewhite.png'

export default {
  data() {
    return {
      hover: false,
    }
  },
  computed: {
    nameImage() {
      return this.hover ? nameImageHover : nameImageDefault
    },
  },
}
</script>

<style lang="scss">
.branding {
  display: flex;

  .img-container {
    width: 64px;
    height: 64px;
    border: 3px solid #2c3e50;
    border-radius: 50%;

    .faceImage {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .nameLogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Black Ops One', system-ui;
    font-weight: 400;
    font-size: 2rem;
    font-style: italic;
    letter-spacing: 0.12rem;
    line-height: 1.8rem;
    color: #f49f0a;
    margin-left: 10px;

    div {
      width: 100%;
      text-align: left;
    }
  }

  &:hover {
    .faceImage {
      box-shadow: 0 0 0px 1px #ffc636;
    }
    .nameLogo {
      color: white;
    }
  }
}
</style>
