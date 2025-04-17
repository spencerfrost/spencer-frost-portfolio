<template>
  <Card>
    <CardHeader class="text-center">
      <CardTitle>Welcome to Spencer's Code Cafe!</CardTitle>
      <CardDescription>What’ll it be today?</CardDescription>
    </CardHeader>
    <CardContent class="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div
      v-for="theme in themes"
          :key="theme"
          class="flex flex-col items-center justify-center"
      >
        <img
          :src="`/images/catppuccin-icons/${theme}.webp`"
          class="w-16 h-16 cursor-pointer"
          @click="setTheme(theme)"
          :class="{ 'opacity-50': theme !== preferred }"
        />
        <span class="text-xs mt-2">
          {{ formatThemeName(theme) }}
        </span>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { $theme } = useNuxtApp();
const preferred = computed(() => $theme.preferred.value);

// Define the themes as constants for type safety
const themes = ["latte", "frappe", "macchiato", "mocha"] as const;

// Simple mapping for better display names
const themeDisplayNames = {
  latte: "Latte",
  frappe: "Frappe",
  macchiato: "Macchiato",
  mocha: "Mocha",
  // system: "System",
};

function setTheme(theme: (typeof themes)[number]) {
  $theme.setPreferredTheme(theme);
}

function formatThemeName(theme: string): string {
  return themeDisplayNames[theme as keyof typeof themeDisplayNames] || theme;
}
</script>
