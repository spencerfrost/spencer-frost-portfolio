<template>
  <div>
    <LandingSection id="landing" />
    <AboutSection id="about" />
    <WorkSection id="work" />
    <ContactSection id="contact" />

    <WelcomePopup />
  </div>
</template>

<script setup>
import AboutSection from '~/components/sections/AboutSection.vue';
import ContactSection from '~/components/sections/ContactSection.vue';
import LandingSection from '~/components/sections/LandingSection.vue';
import WorkSection from '~/components/sections/WorkSection.vue';
import WelcomePopup from '~/components/theme-switcher/WelcomePopup.vue';
</script>