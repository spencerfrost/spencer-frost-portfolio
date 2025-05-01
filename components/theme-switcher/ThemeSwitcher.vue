<template>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div
          v-for="theme in themes"
          :key="theme"
          class="flex flex-col items-center justify-center"
        >
          <img
            :src="`/images/catppuccin-icons/${theme}.webp`"
            class="w-16 h-16 cursor-pointer"
            @click="setTheme(theme)"
            :alt="`${theme} theme icon`"
            :class="{ 'opacity-30': theme !== preferred }"
          />
          <span class="text-sm mt-2">
            {{ formatThemeName(theme) }}
          </span>
        </div>
      </div>
      <p class="text-xs text-muted-foreground text-center">
        Click on a flavour to appply it.
      </p>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineProps<{
  welcome?: boolean;
  dialog?: boolean;
}>();

const { $theme } = useNuxtApp();
const preferred = computed(() => $theme.preferred.value);
const themes = ["latte", "frappe", "macchiato", "mocha"] as const;

function setTheme(theme: (typeof themes)[number]) {
  $theme.setPreferredTheme(theme);
}

function formatThemeName(theme: string): string {
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}
</script>
