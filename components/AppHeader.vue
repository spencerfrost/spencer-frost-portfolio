<template>
  <header class="sticky top-0 z-50 w-full">
    <div class="container mx-auto">
      <nav class="flex h-16 items-center justify-between">
        <!-- Logo/Name - visible on all screens -->
        <div class="flex items-center gap-2 flex-1">
          <NuxtLink
            as="a"
            href="#"
            @click.prevent="scrollToSection('landing')"
            class="flex items-center cursor-pointer"
          >
            <span class="text-3xl font-black font-rounded text-rosewater">
              Spencer<span class="text-mauve">Frost</span>
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - hidden on mobile -->
        <div class="hidden md:flex flex-1 md:justify-center">
          <div class="flex items-center space-x-12">
            <NuxtLink
              href="#about"
              @click.prevent="scrollToSection('about')"
              class="text-green text-xl font-medium transition-colors hover:text-flamingo"
            >
              About
            </NuxtLink>
            <NuxtLink
              href="#work"
              @click.prevent="scrollToSection('work')"
              class="text-red text-xl font-medium transition-colors hover:text-blue"
            >
              Work
            </NuxtLink>
            <NuxtLink
              href="#contact"
              @click.prevent="scrollToSection('contact')"
              class="text-sapphire text-xl font-medium transition-colors hover:text-yellow"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
        <!-- Theme Switcher and Mobile Menu -->
        <div class="flex flex-1 items-center justify-end space-x-4">
          <ThemeSwitcherDialog icon />

          <!-- Mobile Menu (Hamburger + Sheet) -->
          <Sheet v-model:open="isSheetOpen">
            <SheetTrigger asChild class="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon class="h-5 w-5" />
                <span class="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" class="w-[250px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate to different sections of the portfolio.
                </SheetDescription>
              </SheetHeader>
              <div class="mt-6 flex flex-col gap-3">
                <Button
                  v-for="item in navLinks"
                  :key="item.target"
                  variant="ghost"
                  class="justify-start"
                  @click="mobileNavClick(item.target)"
                >
                  {{ item.name }}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  MenuIcon
} from "lucide-vue-next";
import { ref } from "vue";
import type { ThemePreference } from "~/plugins/theme/themes";

// Navigation links data
const navLinks = [
  { name: "About", target: "about" },
  { name: "Work", target: "work" },
  { name: "Contact", target: "contact" },
];

const isSheetOpen = ref(false);
const { $theme } = useNuxtApp();

function setTheme(theme: string) {
  $theme.setPreferredTheme(theme as ThemePreference);
}

function scrollToSection(target: string) {
  if (!process.client) return; // Ensure runs client-side
  const element = document.getElementById(target);
  if (element) {
    // Calculate offset for the header height
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

function mobileNavClick(target: string) {
  isSheetOpen.value = false; // Close the sheet
  setTimeout(() => {
    scrollToSection(target); // Scroll to the section with a slight delay to ensure sheet closes first
  }, 100);
}
</script>
