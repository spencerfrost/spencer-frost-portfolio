<template>
  <header class="sticky top-0 z-50 w-full px-4 bg-background/20">
    <div class="container mx-auto">
      <nav class="flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center gap-2">
          <NuxtLink
            as="a"
            href="/"
            class="cursor-pointer font-rounded text-3xl font-black"
          >
            <span class="hidden text-rosewater lg:inline">
              <span>Spencer</span>
              <span class="text-primary">Frost</span>
            </span>
            <span class="inline text-rosewater lg:hidden">
              <span>S</span>
              <span class="text-primary">F</span>
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - hidden on mobile -->
        <div class="hidden flex-1 md:flex md:justify-center">
          <div class="flex items-center space-x-12">
            <NuxtLink
              href="/about"
              class="text-xl font-medium text-green transition-colors hover:text-flamingo"
            >
              About
            </NuxtLink>
            <NuxtLink
              href="/projects"
              class="text-xl font-medium text-red transition-colors hover:text-blue"
            >
              Projects
            </NuxtLink>
            <NuxtLink
              href="/contact"
              class="text-xl font-medium text-sapphire transition-colors hover:text-yellow"
            >
              Contact
            </NuxtLink>
            <NuxtLink
              href="/spencer-plus"
              class="text-xl font-medium text-flamingo transition-colors hover:text-yellow"
            >
              Spencer+
            </NuxtLink>
          </div>
        </div>
        <!-- Theme Switcher and Mobile Menu -->
        <div class="flex flex-1 items-center justify-end space-x-4">
          <ThemeSwitcherDialog v-model="showThemeDialog" icon />

          <!-- Mobile Menu (Hamburger + Sheet) -->
          <Sheet v-model:open="isSheetOpen">
            <SheetTrigger as-child class="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon class="h-5 w-5" />
                <span class="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" class="w-[250px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>
                  <span
                    class="font-rounded text-xl font-black text-rosewater md:text-2xl"
                  >
                    Spencer<span class="text-mauve">Frost</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div class="mt-6 flex flex-col gap-3">
                <NuxtLink
                  href="/about"
                  variant="ghost"
                  class="text-md justify-start font-medium text-green transition-colors hover:text-flamingo md:text-xl"
                >
                  About
                </NuxtLink>
                <NuxtLink
                  href="/projects"
                  variant="ghost"
                  class="text-md justify-start font-medium text-red transition-colors hover:text-blue md:text-xl"
                >
                  Projects
                </NuxtLink>
                <NuxtLink
                  href="/contact"
                  variant="ghost"
                  class="text-md justify-start font-medium text-sapphire transition-colors hover:text-yellow md:text-xl"
                >
                  Contact
                </NuxtLink>
                <NuxtLink
                  href="/spencer-plus"
                  variant="ghost"
                  class="text-md justify-start font-medium text-flamingo transition-colors hover:text-yellow md:text-xl"
                >
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
import { MenuIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const isSheetOpen = ref(false)
const showThemeDialog = ref(false)
</script>
