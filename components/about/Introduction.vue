<template>
  <section class="relative overflow-hidden py-16 md:py-24">
    <div
      class="container mx-auto flex flex-col items-center gap-12 px-4 md:flex-row"
    >
      <div class="flex w-full justify-center md:w-1/3 md:justify-end">
        <div class="relative">
          <CircleImage
            src="/images/spencer/kawaii.png"
            alt="Spencer Frost Cartoon Avatar"
            color="blue"
            size="lg"
          />
        </div>
      </div>

      <div class="w-full space-y-4 text-center md:w-2/3 md:text-left">
        <h1 class="text-rosewater font-black font-rounded">
          Spencer<span class="text-mauve">Frost</span>
        </h1>
        <h5 class="italic text-peach">
          Composing Clean Code & Crafting Engaging UIs
        </h5>
        <p class="max-w-prose text-lg md:text-xl">
          Hi there! I'm a passionate web developer who loves building beautiful
          user interfaces and understanding how everything works under the hood.
          I believe in creating robust, maintainable code that lasts.
        </p>
      </div>
    </div>
    <Separator class="mt-16 bg-mantle md:mt-24" />
  </section>
</template>
