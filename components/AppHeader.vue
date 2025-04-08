<template>
  <div class="fixed w-full z-50 flex justify-center mt-3">
    <header
      class="w-full max-w-3xl rounded-full border border-border bg-background/80 shadow-md backdrop-blur-lg"
      :class="{ 'border-transparent': isH1Visible }"
      style="transition: border-color 0.5s ease"
    >
      <nav class="px-5 py-2 flex justify-between items-center min-h-[52px]">
        <div class="flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem v-for="item in navLinks" :key="item.target">
                <NavigationMenuLink
                  as="a"
                  :href="`#${item.target}`"
                  @click.prevent="scrollToSection(item.target)"
                  :class="navigationMenuTriggerStyle()"
                  class="cursor-pointer"
                >
                  {{ item.name }}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div class="flex-1 flex justify-center">
          <Transition name="fade">
            <div
              v-if="!isH1Visible"
              class="text-lg font-semibold text-foreground whitespace-nowrap"
            >
              Spencer
              <span class="text-primary">Frost</span>
            </div>
          </Transition>
        </div>

        <div class="flex-1 flex justify-end">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle, // Import the style function
} from "@/components/ui/navigation-menu";

// State for tracking visibility of the H1 element
const isH1Visible = ref(true);
const observer = ref<IntersectionObserver | null>(null);

// Navigation links data
const navLinks = [
  { name: "About", target: "about" },
  { name: "Work", target: "work" },
  { name: "Contact", target: "contact" },
];

// Smooth scrolling function
const scrollToSection = (target: string) => {
  if (!process.client) return; // Ensure runs client-side
  const element = document.getElementById(target);
  if (element) {
    // Calculate offset dynamically if needed (e.g., header height)
    const headerOffset = 80; // Adjust as necessary
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Function to set up the Intersection Observer
const setupIntersectionObserver = () => {
  const options: IntersectionObserverInit = {
    root: null, // viewport
    rootMargin: "-80px",
    threshold: 0.1, // Trigger when even a small part is visible/hidden
  };

  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isH1Visible.value = entry.isIntersecting;
    });
  }, options);

  nextTick(() => {
    const h1Element = document.querySelector("#landing-title");
    if (h1Element) {
      observer.value?.observe(h1Element);
    } else {
      console.warn(
        "AppHeader: Landing title element (#landing-title) not found for IntersectionObserver."
      );
    }
  });
};

// Lifecycle Hooks
onMounted(() => {
  if (process.client) {
    setupIntersectionObserver();
  }
});

onBeforeUnmount(() => {
  if (process.client && observer.value) {
    observer.value.disconnect();
  }
});
</script>

<style scoped>
/* Define the fade transition for the name visibility */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease; /* Slightly faster fade */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Optional: If NavigationMenu needs specific alignment tweaks within flex */
:deep(.flex-1 > nav) {
  justify-content: flex-start; /* Align nav menu items to the start */
}
</style>