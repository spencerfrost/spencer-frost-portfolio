<template>
  <Card class="w-full">
    <!-- Welcome Header -->
    <CardHeader v-if="welcome" class="text-center flex flex-col gap-4">
      <img
        src="/images/spencer/barista.webp"
        class="w-64 h-64 rounded-full border-4 border-peach mx-auto mb-4"
        alt="Barista"
      />
      <CardTitle>Welcome to Spencer's Code Café!</CardTitle>
      <CardDescription class="">
        Hey there! I'm Spencer, your code barista today. Ready to serve up the perfect theme for your browsing experience!
      </CardDescription>
      <CardDescription class="">
        What's your flavor preference? Each brew has its own unique palette that'll transform how you experience my digital space!
      </CardDescription>
    </CardHeader>
    <!-- Theme Selection Header -->
    <CardHeader v-else class="text-center">
      <CardTitle>Theme Switcher</CardTitle>
      <CardDescription>Select your preferred theme.</CardDescription>
    </CardHeader>

    <CardContent class="flex flex-col gap-4 justify-center">
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
            :class="{ 'opacity-30': theme !== preferred }"
          />
          <span class="text-sm mt-2">
            {{ formatThemeName(theme) }}
          </span>
        </div>
      </div>
      <!-- <p class="text-xs text-muted-foreground text-center">
        Click on a theme to select it.
      </p> -->
    </CardContent>
    <CardFooter class="flex flex-col justify-center">
      <Button @click="$emit('close')" variant="outline" class="w-full">
        Close
      </Button>
    </CardFooter>
  </Card>
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
