<template>
  <transition name="fade">
    <div
      v-if="visible"
      ref="promptRef"
      class="scroll-prompt group fixed bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center text-white opacity-75 transition-opacity duration-300 hover:opacity-100"
      aria-label="Scroll down"
      @click="scrollToNext"
    >
      <Icon
        :name="iconName"
        class="h-7 w-7 text-current transition-transform duration-300 ease-in-out group-hover:scale-110"
        filled
      />
      <span v-if="promptText" class="mt-1 text-xs font-light tracking-wide">
        {{ promptText }}
      </span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import gsap from 'gsap'

interface Props {
  visible?: boolean
  promptText?: string
  iconName?: string
  sections: Array<{ $el?: HTMLElement } | HTMLElement | null>
}

const props = withDefaults(defineProps<Props>(), {
  visible: true,
  promptText: 'Scroll Down',
  iconName: 'heroicons:chevron-down-20-solid',
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const promptRef = ref<HTMLDivElement | null>(null)

let tween: gsap.core.Tween | null = null

const createAnimation = () => {
  if (tween) {
    tween.kill()
  }
  if (promptRef.value) {
    tween = gsap.to(promptRef.value, {
      y: '+=4px',
      duration: 1,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    })
  }
}

const killAnimation = () => {
  if (tween) {
    tween.kill()
    tween = null
    if (promptRef.value) {
      gsap.set(promptRef.value, { clearProps: 'y' })
    }
  }
}

// --- Lifecycle Hooks ---

onMounted(() => {
  if (props.visible) {
    nextTick(createAnimation)
  }
})

onUnmounted(() => {
  killAnimation()
})

watch(
  () => props.visible,
  isVisible => {
    if (isVisible) {
      nextTick(createAnimation)
    } else {
      killAnimation()
    }
  },
  { immediate: false }
)

const visible = ref(true)

// Function to check if the last section is visible
const updateVisibility = () => {
  if (typeof window !== 'undefined') {
    const lastSection = props.sections[props.sections.length - 1]
    if (lastSection) {
      const element = (lastSection as { $el: HTMLElement }).$el || lastSection
      const rect = element.getBoundingClientRect()
      visible.value = !(rect.top < window.innerHeight && rect.bottom > 0)
    }
  }
}

// Scroll to the next section
const scrollToNext = () => {
  let currentSectionIndex = -1
  let maxVisibleHeight = 0

  // Find the most prominently visible section
  for (let i = 0; i < props.sections.length; i++) {
    const section = props.sections[i]
    if (section) {
      const element = (section as { $el: HTMLElement }).$el || section
      const rect = element.getBoundingClientRect()

      // Calculate visible height
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
      if (visibleHeight > maxVisibleHeight && visibleHeight > 0) {
        maxVisibleHeight = visibleHeight
        currentSectionIndex = i
      }
    }
  }

  // Scroll to the next section if it exists
  if (currentSectionIndex !== -1) {
    const nextSection = props.sections[currentSectionIndex + 1]
    if (nextSection) {
      const nextElement = (nextSection as { $el: HTMLElement }).$el || nextSection
      console.log('Scrolling to next section:', nextElement.getBoundingClientRect().top)
      const offset = 64
      const top = nextElement.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}

// Add and remove scroll event listeners
onMounted(() => {
  if (typeof window !== 'undefined') {
    updateVisibility()
    window.addEventListener('scroll', updateVisibility)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateVisibility)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure NuxtIcon fills correctly if using CSS variables */
:deep(.nuxt-icon svg) {
  margin-bottom: 0; /* Override potential default margins */
}

.scroll-prompt {
  cursor: pointer;
  /* Add your styles here */
}
</style>
