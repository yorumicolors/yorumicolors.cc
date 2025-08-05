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
    <div class="flex flex-col gap-8 w-full max-w-[600px]">
      <div class="flex flex-col gap-4 w-full">
        <p>
          Yorumi is a calming deep sea colorscheme for developers. Inspired by
          the tranquil night sea, Yorumi bathes your editor in a soothing blend
          of blues. Your text stays razor-sharp and easy on the eyes, perfect
          for late-night coding marathons or when you crave a cozy nook.
        </p>
        <p>
          As a longtime fan of the
          <a
            href="https://github.com/rebelot/kanagawa.nvim"
            target="_blank"
            class="text-foreground-accent"
          >
            Kanagawa theme
          </a>
          by rebelot, I wanted to elevate the experience further. Yorumi offers a
          darker and cozier aesthetic, perfect for maintaining a sharp and serene
          coding environment.
        </p>
      </div>
      <div class="flex gap-4">
        <a
          href="https://github.com/yorumicolors#contributing"
          class="btn primary"
        >
          <Icon icon="ph:handshake-duotone" class="text-xl" />
          <span>Contribute</span>
        </a>
        <a
          href="https://github.com/sponsors/esskayesss/"
          target="_blank"
          class="btn border border-borders bg-surface-tertiary
          hover:bg-surface-secondary hover:shadow-lg shadow-yellow-dull/30 hover:border-yellow"
        >
          <Icon icon="ph:coins-duotone" class="text-xl" />
          <span>Fuel the Voyage</span>
        </a>
      </div>
    </div>
  </div>
</section>
