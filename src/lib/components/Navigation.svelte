<script lang="ts">
  import { themeStore } from "$lib/stores/themeStore";
  import Icon from "@iconify/svelte";
</script>

<header class="text-l-white flex w-full items-center justify-between px-8 py-4">
  <div class="flex gap-2 font-mono">
    <span>yorumi</span>
  </div>
  <nav class="flex items-center gap-8 text-base">
    <a
      href="https://github.com/yorumicolors"
      class="btn primary"
      target="_blank">Get Yorumi</a
    >
    <button
      on:click={() =>
        themeStore.set($themeStore === "light" ? "dark" : "light")}
    >
      {#if $themeStore === "light"}
        <Icon
          icon="ph:moon-duotone"
          class="moon-transition cursor-pointer text-2xl transition-colors"
        />
      {:else if $themeStore === "dark"}
        <Icon
          icon="ph:sun-duotone"
          class="sun-transition cursor-pointer text-2xl text-orange transition-colors hover:text-yellow-dull"
        />
      {:else}
        <Icon
          icon="ph:palette-duotone"
          on:click={() => alert("clicked")}
          class="cursor-pointer text-2xl transition-colors"
        />
      {/if}
    </button>
  </nav>
</header>
