<script lang="ts">
  import sealSots from "$lib/assets/sots.webp?enhanced";
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>Yorumi | About</title>
</svelte:head>

<section class="flex w-full gap-10 h-full justify-between hero">
  <div
    class="flex flex-col items-center justify-center group h-full w-full my-auto"
  >
    <enhanced:img
      src={sealSots}
      alt="song of the sea"
      class="h-auto max-h-[50vh] w-auto"
    />
    <a
      href="https://www.behance.net/gallery/139359451/Song-of-the-Sea"
      target="_blank"
      class="text-xs underline opacity-0 group-hover:opacity-100 transition-all mt-4"
    >
      Song of the sea by Dalya Elsamahy
    </a>
  </div>
  <div class="flex jusitfy-center items-center w-full">
    <div class="flex flex-col gap-6 w-full max-w-[600px]">
      <div class="flex flex-col gap-2 w-full">
        <h1 class="text-display">Deep Code, Quiet Seas</h1>
        <p>
          Escape the harsh glare of traditional themes. Yorumi's color scheme,
          inspired by the calming night sea, washes your editor in a soothing
          blend of blues and greens, enhancing focus and readability for
          productive late-night coding sessions.
        </p>
      </div>
      <div class="flex gap-4">
        <a href="#search" class="btn primary">
          <Icon icon="ph:caret-circle-double-down-duotone" class="text-xl" />
          <span>Get Yorumi</span>
        </a>
        <a
          href="https://github.com/sponsors/esskayesss/"
          target="_blank"
          class="btn border border-borders bg-surface-tertiary hover:bg-surface-secondary"
        >
          <Icon icon="ph:coins-duotone" class="text-xl" />
          <span>Fuel the Voyage</span>
        </a>
      </div>
    </div>
  </div>
</section>
