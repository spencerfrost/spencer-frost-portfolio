<template>
  <Dialog>
    <DialogTrigger as-child>
      <template #default>
        <Button v-if="icon" variant="ghost" size="icon">
          <Icon name="lucide-lab:coffee" class="h-5 w-5" />
        </Button>
        <Button v-else>Open Theme Switcher</Button>
      </template>
    </DialogTrigger>
    <DialogContent class="p-0 border-none h-64 w-max-screen sm:w-128">
      <ThemeSwitcher class="flex flex-col gap-4 p-4" />
    </DialogContent>
  </Dialog>
</template>

<script lang="ts" setup>
  import {
  defineProps
} from 'vue';

  const props = defineProps({
    icon: {
      type: Boolean,
      default: false
    }
  });
</script>