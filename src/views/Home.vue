<template>
  <div class="home">
    <LandingSection id="landing" />
    <AboutSection id="about" />
    <WorkSection id="work" />
    <ContactSection id="contact" />
  </div>
</template>

<script>
import AboutSection from '@/components/AboutSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import LandingSection from '@/components/LandingSection.vue';
import WorkSection from '@/components/WorkSection.vue';

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
