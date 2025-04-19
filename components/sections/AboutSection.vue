<template>
  <section id="about" class="flex flex-col md:flex-row container mx-auto">
    <div class="w-full md:w-1/3 flex items-center justify-center px-4 md:px-0 mb-6 md:mb-0">
      <img
        src="/images/spencer/developer.png"
        class="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-sapphire mx-auto"
        alt="Spencer as a developer"
      />
    </div>
    <div class="w-full md:w-2/3 flex flex-col justify-center px-4 md:pl-8 lg:pl-12 gap-y-4 md:gap-y-6">
      <h1 class="text-3xl md:text-4xl font-bold">About Me</h1>

      <div class="role-display">
        <span class="text-xl md:text-2xl font-medium">I'm a </span>
        <span class="text-xl md:text-2xl font-medium text-primary" ref="roleText"></span>
      </div>

      <div class="max-w-4xl space-y-4">
        <p class="text-sm md:text-lg text-foreground">
          I'm Spencer, a front-end developer who believes in <strong>clean solutions, not quick fixes</strong>.
          My journey spans from creating comprehensive component libraries to leading open-source projects
          with hundreds of commits.
        </p>

        <p class="text-sm md:text-lg text-foreground">
          As a UI specialist, I craft interfaces that balance visual appeal with intuitive functionality.
          My approach is shaped by the belief that the simplest solution is often the strongest—incorprorating
          the latest technologies and best practices to ensure that every project is something I can be proud of.
        </p>

        <p class="text-sm md:text-lg text-foreground">
          When I'm not immersed in code, you'll find me at the rock climbing gym, cycling, jamming some music,
          or belting out songs at karaoke. These diverse experiences inform my problem-solving approach
          and remind me that the best technical solutions come from understanding the human elements behind them.
        </p>

        <p class="text-sm md:text-lg text-foreground">
          I'm currently focused on projects that emphasize component-driven architecture and sustainable
          development practices that minimize technical debt. I'm passionate about building things right
          the first time, even when that means advocating for modern approaches over quick patches.
        </p>

        <p class="text-sm md:text-lg text-foreground">
          <a href="#contact">Let's connect</a> if you're looking for a developer who brings both technical precision and creative energy to every project.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const roleText = ref(null);
const roles = [
  "Front-end Developer",
  "DevOps Enthusiast",
  "Open Source Contributor",
  "UI Specialist",
  "Rock Climber",
  "Music Festival Organizer",
  "Component Architect",
  "Microphone Warrior",
  "Homelab Server Admin",
  "Minecraft Veteran",
  "Nature Lover",
  "Cycling Advocate",
  "Trivia Enthusiast",
  "AI-Curious"
];

onMounted(() => {
  // Ensure roleText.value exists before creating the timeline
  if (!roleText.value) return;

  const tl = gsap.timeline({ repeat: -1 });

  roles.forEach((role, index) => {
    // Type the text
    tl.to(roleText.value, {
      duration: 1,
      text: role,
      ease: "none"
    });

    // Pause on the text
    tl.to({}, { duration: 2 }); // Use an empty object for a pure time delay

    // Clear the text (unless it's the last item)
    if (index < roles.length - 1) {
      tl.to(roleText.value, {
        duration: 0.5,
        text: "",
        ease: "none"
      });
    }
  });
});
</script>

<style scoped>
.role-display {
  min-height: 2.25rem; /* Adjusted slightly for text-xl potentially needing more space */
}
</style>