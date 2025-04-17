<template>
  <header class="sticky top-0 z-50 w-full">
    <div class="container mx-auto">
      <nav class="flex h-16 items-center justify-between">
        <!-- Logo/Name - visible on all screens -->
        <div class="flex items-center gap-2">
          <NuxtLink
            as="a"
            href="#"
            @click.prevent="scrollToSection('landing')"
            class="flex items-center cursor-pointer"
          >
            <span class="text-3xl font-black font-rounded text-mauve">
              Spencer<span class="text-primary">Frost</span>
            </span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - hidden on mobile -->
        <div class="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem v-for="item in navLinks" :key="item.target">
                <NavigationMenuLink
                  as="a"
                  :href="`#${item.target}`"
                  @click.prevent="scrollToSection(item.target)"
                  class="cursor-pointer"
                >
                  {{ item.name }}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <!-- Theme Switcher and Mobile Menu -->
        <div class="flex items-center gap-2">
          <!-- Theme Dropdown -->
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <SunIcon v-if="$theme.isLight.value" class="h-5 w-5" />
                <MoonIcon v-else class="h-5 w-5" />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="setTheme('latte')">
                <SunIcon class="mr-2 h-4 w-4" />
                <span>Light</span>
                <DropdownMenuShortcut v-if="$theme.active.value === 'latte'">
                  <CheckIcon class="h-4 w-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem @click="setTheme('frappe')">
                <MoonIcon class="mr-2 h-4 w-4" />
                <span>Dark 1</span>
                <DropdownMenuShortcut v-if="$theme.active.value === 'frappe'">
                  <CheckIcon class="h-4 w-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem @click="setTheme('macchiato')">
                <MoonIcon class="mr-2 h-4 w-4" />
                <span>Dark 2</span>
                <DropdownMenuShortcut
                  v-if="$theme.active.value === 'macchiato'"
                >
                  <CheckIcon class="h-4 w-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem @click="setTheme('mocha')">
                <MoonIcon class="mr-2 h-4 w-4" />
                <span>Dark 3</span>
                <DropdownMenuShortcut v-if="$theme.active.value === 'mocha'">
                  <CheckIcon class="h-4 w-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="setTheme('system')">
                <LaptopIcon class="mr-2 h-4 w-4" />
                <span>System</span>
                <DropdownMenuShortcut
                  v-if="$theme.preferred.value === 'system'"
                >
                  <CheckIcon class="h-4 w-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
import { ref, computed } from "vue";
import type { ThemePreference } from "~/plugins/theme/themes";
import {
  SunIcon,
  MoonIcon,
  MenuIcon,
  CheckIcon,
  LaptopIcon,
} from "lucide-vue-next";

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
