<template>
  <div class="home">
    <LandingSection id="landing" />
    <AboutSection id="about" />
    <WorkSection id="work" />
    <ContactSection id="contact" />
  </div>
</template>

<script>
import AboutSection from '@/components/sections/AboutSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import LandingSection from '@/components/sections/LandingSection.vue';
import WorkSection from '@/components/sections/WorkSection.vue';

export default {
  name: 'Home',
  components: {
    LandingSection,
    AboutSection,
    WorkSection,
    ContactSection,
  },
}
</script>
