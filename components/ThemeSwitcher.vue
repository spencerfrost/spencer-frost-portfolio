<template>
  <Card class="bg-card">
    <CardHeader>
      <CardTitle class="text-heading text-xl font-bold">Theme</CardTitle>
      <CardDescription class="text-muted-foreground">
        Choose your preferred theme.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid grid-cols-2 md:grid-cols-4 gap-3">
      <Button
        v-for="theme in themes"
        :key="theme"
        @click="setTheme(theme)"
        :active="theme === preferred"
      >
        <div class="flex items-center justify-center gap-2">
          <!-- <span v-if="theme === preferred" class="text-primary text-xs">●</span> -->
          <span>{{ formatThemeName(theme) }}</span>
        </div>
      </Button>
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
