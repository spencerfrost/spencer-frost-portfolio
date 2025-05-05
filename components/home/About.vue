<template>
  <section class="container relative mx-auto my-8 flex flex-col md:flex-row">
    <div
      class="mb-6 flex w-full items-center justify-center px-4 md:mb-0 md:w-1/3 md:px-0"
    >
      <CircleImage
        size="lg"
        color="sapphire"
        src="/images/spencer/developer.png"
        class="mx-auto h-48 w-48 rounded-full border-4 border-sapphire"
        alt="Spencer as a developer"
      />
    </div>
    <div class="flex w-full flex-col justify-center md:w-2/3 md:pl-8 lg:pl-12">
      <Card class="rounded-none border-none sm:rounded-xl sm:border">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="role-display">
            <span class="text-xl font-medium md:text-2xl">I'm </span>
            <span
              ref="roleText"
              class="text-xl font-medium text-lavender md:text-2xl"
            />
          </div>
          <div class="max-w-4xl space-y-4">
            <p class="text-sm md:text-md">
              I'm Spencer, a front-end developer who believes in
              <strong>clean solutions, not quick fixes</strong>. My journey
              spans from creating comprehensive component libraries to leading
              open-source projects with hundreds of commits.
            </p>

            <p class="text-sm md:text-md">
              As a UI specialist, I craft interfaces that balance visual appeal
              with intuitive functionality. My approach is shaped by the belief
              that the simplest solution is often the strongest—incorprorating
              the latest technologies and best practices to ensure that every
              project is something I can be proud of.
            </p>

            <p class="text-sm md:text-md">
              When I'm not immersed in code, you'll find me at the rock climbing
              gym, cycling, jamming some music, or belting out songs at karaoke.
              These diverse experiences inform my problem-solving approach and
              remind me that the best technical solutions come from
              understanding the human elements behind them.
            </p>

            <p class="text-sm md:text-md">
              I'm currently focused on projects that emphasize component-driven
              architecture and sustainable development practices that minimize
              technical debt. I'm passionate about building things right the
              first time, even when that means advocating for modern approaches
              over quick patches.
            </p>

            <p class="text-sm md:text-md">
              <a href="#contact">Let's connect</a> if you're looking for a
              developer who brings both technical precision and creative energy
              to every project.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const roleText = ref(null)
const roles = [
  'a Front-end Developer',
  'a DevOps Tinkerer',
  'an Open Source Contributor',
  'a UI Specialist',
  'a Rock Climber',
  'a Music Festival Organizer',
  'a Component Architect',
  'a Microphone Warrior',
  'a Homelab Server Admin',
  'a Minecraft Veteran',
  'a Nature Lover',
  'a Cycling Advocate',
  'great at trivia nights',
  'AI-Curious',
]

onMounted(() => {
  // Ensure roleText.value exists before creating the timeline
  if (!roleText.value) return

  const tl = gsap.timeline({ repeat: -1 })

  roles.forEach((role, index) => {
    // Type the text
    tl.to(roleText.value, {
      duration: 1,
      text: role,
      ease: 'none',
    })

    // Pause on the text
    tl.to({}, { duration: 2 }) // Use an empty object for a pure time delay

    // Clear the text (unless it's the last item)
    if (index < roles.length - 1) {
      tl.to(roleText.value, {
        duration: 0.5,
        text: '',
        ease: 'none',
      })
    }
  })
})
</script>

<style scoped>
.role-display {
  min-height: 2.25rem;
  /* Adjusted slightly for text-xl potentially needing more space */
}
</style>
