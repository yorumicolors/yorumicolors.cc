<script lang="ts">
  import { themeStore, type ThemeType } from "$lib/stores/themeStore";
  import Icon from "@iconify/svelte";
  import brand from "$lib/assets/brand.webp";
  import abyss from "$lib/assets/abyss.webp?enhanced";
  import shade from "$lib/assets/shade.webp?enhanced";
  import kraken from "$lib/assets/kraken.webp?enhanced";
  import mist from "$lib/assets/mist.webp?enhanced";
  import { writable } from "svelte/store";
  import { type Picture } from "imagetools-core";
  import { slide } from "svelte/transition";
  import { onDestroy, onMount } from "svelte";

  const showThemeSelector = writable<boolean>(false);
  let themeSelector: HTMLDivElement | undefined;

  const handleClickOutside = (event: MouseEvent) => {
    if (themeSelector && !themeSelector.contains(event.target as Node)) {
      showThemeSelector.set(false);
    }
  };

  const handleScroll = () => {
    showThemeSelector.set(false);
  };

  onMount(() => {
    const unsubscribe = showThemeSelector.subscribe((value) => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);

      if (value) {
        document.addEventListener("click", handleClickOutside);
        window.addEventListener("scroll", handleScroll);
      }
    });

    onDestroy(unsubscribe);
  });
</script>

<header
  class="text-l-white flex w-full items-center justify-between px-10 py-4 font-mono fixed top-0 max-w-[1400px] bg-surface-primary"
>
  <a href="/" class="flex items-center gap-2">
    <img
      src={brand}
      alt="Yorumi Seal"
      class="h-16 rounded-full bg-surface-tertiary"
    />
  </a>
  <nav class="flex items-center gap-8 text-base">
    <a href="/about" class="flex items-center gap-1">
      <Icon icon="ph:circle-wavy-question" class="text-2xl transition-colors" />
      About
    </a>
    <a href="/docs" class="flex items-center gap-1">
      <Icon icon="ph:file-doc-duotone" class="text-2xl transition-colors" />
      Documentation
    </a>
    <a href="/blog" class="flex items-center gap-1">
      <Icon icon="ph:article" class="text-2xl transition-colors" />
      Blog
    </a>
    <div
      class="flex items-center gap-4 p-2 rounded-full border border-borders bg-surface-floating relative"
    >
      <a
        href="https://github.com/yorumicolors"
        target="_blank"
        class="hover:*:text-blue"
      >
        <Icon
          icon="ph:github-logo-duotone"
          class="text-2xl transition-colors"
        />
      </a>
      <a
        href="https://discord.gg/yorumicolors"
        target="_blank"
        class="hover:*:text-purple"
      >
        <Icon
          icon="ph:discord-logo-duotone"
          class="text-2xl transition-colors"
        />
      </a>
      <a
        href="https://x.com/yorumicolors"
        target="_blank"
        class="hover:*:text-foreground-accent"
      >
        <Icon icon="ph:x-logo-duotone" class="text-2xl transition-colors" />
      </a>

      <div bind:this={themeSelector} class="relative flex items-center">
        <button
          on:click={() => showThemeSelector.set(!$showThemeSelector)}
          class="cursor-pointer relative"
        >
          {#if $themeStore === "abyss"}
            <enhanced:img src={abyss} alt="Abyss Theme" class="w-6 h-6" />
          {:else if $themeStore === "shade"}
            <enhanced:img src={shade} alt="Shade Theme" class="w-6 h-6" />
          {:else if $themeStore === "kraken"}
            <enhanced:img src={kraken} alt="Kraken Theme" class="w-6 h-6" />
          {:else}
            <enhanced:img src={mist} alt="Mist Theme" class="w-6 h-6" />
          {/if}
        </button>
        {#if $showThemeSelector}
          <div
            class="flex flex-col gap-1 absolute top-full w-fit -right-2 mt-4 z-20"
            transition:slide
          >
            {@render themeButton("abyss", abyss)}
            {@render themeButton("shade", shade)}
            {@render themeButton("kraken", kraken)}
            {@render themeButton("mist", mist)}
          </div>
        {/if}
      </div>
    </div>
  </nav>
</header>

{#snippet themeButton(name: ThemeType, imgSrc: Picture)}
  <button
    on:click={() => {
      themeStore.set(name);
      showThemeSelector.set(false);
    }}
    class="bg-surface-secondary p-1 pr-3 rounded-full flex items-center gap-2 cursor-pointer"
  >
    <div class="w-6 h-6 shrink-0">
      <enhanced:img
        src={imgSrc}
        alt="{name} Theme"
        class="w-full h-full object-contain"
      />
    </div>
    <span class="capitalize">{name}</span>
  </button>
{/snippet}
