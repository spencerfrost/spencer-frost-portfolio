<template>
  <header class="sticky top-0 z-50 w-full px-4">
    <div class="container mx-auto">
      <nav class="flex h-16 items-center justify-between">
        <!-- Logo/Name - visible on all screens -->
        <div class="flex items-center gap-2 flex-1">
          <NuxtLink as="a" href="/""
            class=" flex items-center cursor-pointer">
            <span class="text-3xl font-black font-rounded text-rosewater">
              Spencer<span class="text-mauve">Frost</span>
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - hidden on mobile -->
        <div class="hidden md:flex flex-1 md:justify-center">
          <div class="flex items-center space-x-12">
            <NuxtLink href="/about" class="text-green text-xl font-medium transition-colors hover:text-flamingo">
              About
            </NuxtLink>
            <NuxtLink href="/projects" class="text-red text-xl font-medium transition-colors hover:text-blue">
              Projects
            </NuxtLink>
            <NuxtLink href="/contact" class="text-sapphire text-xl font-medium transition-colors hover:text-yellow">
              Contact
            </NuxtLink>
            <NuxtLink href="/spencer-plus"
              class="text-flamingo text-xl font-medium transition-colors hover:text-yellow">
              Spencer+
            </NuxtLink>
          </div>
        </div>
        <!-- Theme Switcher and Mobile Menu -->
        <div class="flex flex-1 items-center justify-end space-x-4">
          <ThemeSwitcherDialog icon v-model="showThemeDialog" />

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
                <SheetTitle>
                  <span class="text-xl md:text-2xl font-black font-rounded text-rosewater">
                    Spencer<span class="text-mauve">Frost</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div class="mt-6 flex flex-col gap-3">
                <NuxtLink href="/about" variant="ghost"
                  class="justify-start text-green text-md md:text-xl font-medium transition-colors hover:text-flamingo">
                  About
                </NuxtLink>
                <NuxtLink href="/projects" variant="ghost"
                  class="justify-start text-red text-md md:text-xl font-medium transition-colors hover:text-blue">
                  Projects
                </NuxtLink>
                <NuxtLink href="/contact" variant="ghost"
                  class="justify-start text-sapphire text-md md:text-xl font-medium transition-colors hover:text-yellow">
                  Contact
                </NuxtLink>
                <NuxtLink href="/spencer-plus" variant="ghost"
                  class="justify-start text-flamingo text-md md:text-xl font-medium transition-colors hover:text-yellow">
                  Spencer+
                </NuxtLink>
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

const isSheetOpen = ref(false);
const showThemeDialog = ref(false);
</script>
