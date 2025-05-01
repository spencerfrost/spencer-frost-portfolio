<template>
  <div class="container mx-auto flex flex-col gap-4 py-8">
    <h1 class="text-3xl font-bold">Theme Demo Page</h1>
    <ThemeSwitcherCard />

    <Card>
      <CardHeader>
        <CardTitle>Catppuccin Theme Demo</CardTitle>
        <CardDescription
          >Explore the Catppuccin theme colors and UI elements.</CardDescription
        >
      </CardHeader>
      <CardContent class="space-y-6">
        <Card class="bg-card-nested">
          <CardHeader>
            <CardTitle class="mb-2">Catppuccin Accent Colors</CardTitle>
            <CardDescription
              >Accent colors in the Catppuccin theme.</CardDescription
            >
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <ColorSwatch color="rosewater" />
              <ColorSwatch color="flamingo" />
              <ColorSwatch color="pink" />
              <ColorSwatch color="mauve" />
              <ColorSwatch color="red" />
              <ColorSwatch color="maroon" />
              <ColorSwatch color="peach" />
              <ColorSwatch color="yellow" />
              <ColorSwatch color="green" />
              <ColorSwatch color="teal" />
              <ColorSwatch color="blue" />
              <ColorSwatch color="sky" />
              <ColorSwatch color="lavender" />
              <ColorSwatch color="sapphire" />
            </div>
          </CardContent>
        </Card>
        <Card class="bg-card-nested">
          <CardHeader>
            <CardTitle class="mb-2">Text Colors</CardTitle>
            <CardDescription
              >Text colors in the Catppuccin theme.</CardDescription
            >
          </CardHeader>
          <CardContent>
            <p class="text-foreground">Foreground Text (text)</p>
            <p class="text-muted-foreground">Muted Text (subtext0)</p>
            <p class="text-primary">Primary Text (lavender)</p>
            <p class="text-card-foreground">Secondary Text (subtext1)</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>

    <ShadCNDemo />
  </div>
</template>

<script lang="ts" setup></script>
