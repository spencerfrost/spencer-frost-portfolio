<template>
  <div>
    <LandingSection id="landing" />
    <AboutSection id="about" />
    <WorkSection id="work" />
    <ContactSection id="contact" />
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/AppFooter.vue';
import AboutSection from '~/components/sections/AboutSection.vue';
import ContactSection from '~/components/sections/ContactSection.vue';
import LandingSection from '~/components/sections/LandingSection.vue';
import WorkSection from '~/components/sections/WorkSection.vue';
</script>