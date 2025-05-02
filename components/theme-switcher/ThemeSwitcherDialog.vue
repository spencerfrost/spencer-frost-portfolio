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
    <DialogContent class="max-w-[calc(100vw-2rem)] sm:max-w-[420px]">
      <slot>
        <img
          src="/images/spencer/barista.webp"
          class="mx-auto mb-4 w-32 md:64 rounded-full border-4 border-peach"
          alt="Barista"
        >
        <CardTitle>Welcome to Spencer's Code Café!</CardTitle>
        <CardDescription>
          Hey there! I'm Spencer, your code barista today. Ready to serve up the
          perfect theme for your browsing experience!
        </CardDescription>
        <CardDescription>
          What's your flavour preference? Each brew has its own unique palette
          that'll transform how you experience my digital space!
        </CardDescription>
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
import { onMounted } from 'vue'

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

onMounted(() => {
  const hasVisited = localStorage.getItem('hasVisited')
  if (!hasVisited) {
    localStorage.setItem('hasVisited', 'true')
  }
  onUpdateOpen(true)
})
</script>
