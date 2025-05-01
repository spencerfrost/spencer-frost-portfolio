<template>
  <Dialog :open="modelValue" @update:open="onUpdateOpen">
    <DialogTrigger v-if="trigger" as-child>
      <slot name="trigger">
        <Button v-if="icon" variant="ghost" size="icon">
          <Icon name="lucide-lab:coffee" class="h-5 w-5" />
        </Button>
        <Button v-else>Open Theme Switcher</Button>
      </slot>
    </DialogTrigger>
    <DialogContent class="">
      <slot>
        <DialogHeader class="flex flex-col gap-4 text-center">
          <DialogTitle class="text-heading text-2xl font-bold">
            Theme Switcher
          </DialogTitle>
          <DialogDescription class="text-muted-foreground">
            Switch between different themes.
          </DialogDescription>
        </DialogHeader>
      </slot>
      <ThemeSwitcher class="flex flex-col gap-4 p-4" />
      <slot v-if="footer" name="footer">
        <CardFooter class="flex justify-center">
          <Button class="w-full" variant="outline" @click="onUpdateOpen(false)">
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
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  trigger: {
    type: Boolean,
    default: true,
  },
  footer: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue'])

function onUpdateOpen(val: boolean) {
  emit('update:modelValue', val)
}
</script>
