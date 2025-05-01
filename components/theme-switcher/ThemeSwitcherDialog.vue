<template>
  <Dialog :open="modelValue" @update:open="onUpdateOpen">
    <DialogTrigger as-child v-if="trigger">
      <slot name="trigger">
        <Button v-if="icon" variant="ghost" size="icon">
          <Icon name="lucide-lab:coffee" class="h-5 w-5" />
        </Button>
        <Button v-else>Open Theme Switcher</Button>
      </slot>
    </DialogTrigger>
    <DialogContent class="w-max-screen sm:w-128">
      <slot>
        <DialogHeader class="text-center flex flex-col gap-4">
          <DialogTitle class="text-2xl font-bold text-heading">
            Theme Switcher
          </DialogTitle>
          <DialogDescription class="text-muted-foreground">
            Switch between different themes.
          </DialogDescription>
        </DialogHeader>
      </slot>
      <ThemeSwitcher class="flex flex-col gap-4 p-4" />
      <slot name="footer" v-if="footer">
        <CardFooter class="flex justify-center">
          <Button class="w-full" @click="onUpdateOpen(false)">
            Close
          </Button>
        </CardFooter>
      </slot>
    </DialogContent>
  </Dialog>
</template>

<script lang="ts" setup>
defineProps({
  icon: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: Boolean,
    default: true
  },
  footer: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['update:modelValue']);

function onUpdateOpen(val: boolean) {
  emit('update:modelValue', val);
}
</script>