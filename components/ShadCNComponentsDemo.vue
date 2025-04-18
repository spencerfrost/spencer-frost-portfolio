<template>
  <Card class="bg-card-nested">
    <CardHeader>
      <CardTitle class="mb-2">ShadCN Components</CardTitle>
      <CardDescription>ShadCN components in the Catppuccin theme.</CardDescription>
    </CardHeader>

    <CardContent>
      <div class="space-y-2">
        <Input type="text" />
      </div>
      <div class="flex gap-2">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>

      <ContactForm />
    </CardContent>
  </Card>
</template>

<script lang="ts" setup>

</script>

<style>

</style>