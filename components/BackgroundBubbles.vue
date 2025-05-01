<template>
  <div class="bubble-container fixed inset-0 pointer-events-none -z-10">
    <div
      v-for="bubble in visibleBubbles" 
      :key="bubble.id"
      :class="`bubble absolute rounded-full ${bubble.color}`"
      :style="isHydrated
        ? {
            width: bubble.size + 'px',
            height: bubble.size + 'px',
            left: bubble.left + '%',
            top: bubble.top + '%',
            filter: 'blur(2px)',
            opacity: bubble.opacity,
          }
        : {
            width: bubble.size + 'px',
            height: bubble.size + 'px',
            left: bubble.left + '%',
            top: bubble.top + '%',
            filter: 'blur(2px)',
            opacity: bubble.opacity,
            transform: 'scale(1) rotate(' + bubble.rotation + 'deg)'
          }"
      :ref="el => bubbleRefs[bubble.id] = el"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useBubbles } from '~/composables/useBubbles.js'

const NUM_BUBBLES = 25
// Use Nuxt's useState to persist bubble data between SSR and client
const bubbles = useState('bubbles', () => useBubbles(NUM_BUBBLES))
const colors = ['bg-rosewater', 'bg-flamingo', 'bg-pink', 'bg-mauve', 'bg-red', 'bg-maroon', 'bg-peach', 'bg-yellow', 'bg-green', 'bg-teal', 'bg-sky', 'bg-sapphire', 'bg-blue', 'bg-lavender']

const bubbleRefs = ref({})
const scrollY = ref(0)
const scrollHeight = ref(0)
const isHydrated = ref(false)

const updateScroll = () => {
  scrollY.value = window.scrollY
  scrollHeight.value = document.documentElement.scrollHeight - window.innerHeight
}

onMounted(async () => {
  isHydrated.value = true
  await nextTick()
  updateScroll()
  window.addEventListener('scroll', updateScroll)
  window.addEventListener('resize', updateScroll)
  visibleBubbles.value.forEach(bubble => {
    const el = bubbleRefs.value[bubble.id]
    if (!el) return
    const appearStart = bubble.appearScrollPoint * (document.documentElement.scrollHeight - window.innerHeight)
    const popEnd = bubble.popScrollPoint * (document.documentElement.scrollHeight - window.innerHeight)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: () => `top+=${appearStart} top`,
        end: () => `top+=${popEnd} top`,
        scrub: true,
      }
    })
    if (bubble.appearScrollPoint > 0) {
      tl.fromTo(el, 
        { scale: 0.5, opacity: 0, rotate: 0 },
        { scale: 1.15, opacity: bubble.opacity, rotate: bubble.rotation, duration: 0.4, ease: 'elastic.out(1, 0.5)' }
      )
      tl.to(el, 
        { scale: 1, duration: 0.2, ease: 'elastic.out(1, 0.5)' }
      )
    } else {
      // Ensure initial state is correct for SSR/hydration
      gsap.set(el, { scale: 1, opacity: bubble.opacity, rotate: bubble.rotation })
    }
    tl.to(el, 
      { scale: 1.3, opacity: 0, rotate: bubble.rotation + (Math.random() - 0.5) * 20, duration: 0.25, ease: 'back.in(2)' }
    )
  })
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateScroll)
    window.removeEventListener('resize', updateScroll)
  }
})

const visibleBubbles = computed(() => {
  const progress = scrollY.value / (scrollHeight.value || 1)
  return bubbles.value.filter(b => progress >= b.appearScrollPoint && progress <= b.popScrollPoint)
})
</script>