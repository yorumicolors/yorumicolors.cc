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
  import { fade, slide } from "svelte/transition";
  import { onDestroy, onMount } from "svelte";

  let showNav = $state(false);
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
  class="text-l-white flex w-full items-center justify-between px-4 md:px-10 py-4 font-mono fixed top-0 max-w-[1400px] bg-surface-primary"
>
  <a href="/" class="flex items-center gap-2">
    <img
      src={brand}
      alt="Yorumi Seal"
      class="h-12 md:h-16 rounded-full bg-surface-tertiary"
    />
  </a>
  <nav class="flex flex-row-reverse md:flex-row items-center gap-4 md:gap-8 text-base">
    <div class="relative flex items-center">
        {#if !showNav}
          <Icon icon="ph:list" class="md:hidden text-2xl" onclick={() => showNav = true} />
        {:else}
          <Icon icon="ph:x" class="md:hidden text-2xl" onclick={() => showNav = false} />
          <div
            class="h-screen w-screen fixed top-0 left-0 md:hidden"
            role="button"
            tabindex="0"
            aria-label="Close navigation"
            onclick={() => showNav = false}
            onkeydown={(e) => { if (['Enter', ' '].includes(e.key)) showNav = false }}
          >
          </div>
        {/if}
      <div class={`absolute top-full right-0 mt-4 md:mt-0 bg-surface-floating md:bg-surface-primary border md:border-0 p-4 md:p-0
        md:static ${showNav ? "flex" : "hidden"} md:flex flex-col md:flex-row md:items-center gap-4 md:gap-8`}
      >
        <a href="/about" class="flex items-center gap-1" onclick={() => showNav = false}>
          <Icon icon="ph:circle-wavy-question" class="text-2xl transition-colors" />
          About
        </a>
        <a href="/docs" class="flex items-center gap-1" onclick={() => showNav = false}>
          <Icon icon="ph:file-doc-duotone" class="text-2xl transition-colors" />
          Documentation
        </a>
        <a href="/blog" class="flex items-center gap-1" onclick={() => showNav = false}>
          <Icon icon="ph:article" class="text-2xl transition-colors" />
          Blog
        </a>
      </div>
    </div>
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
          onclick={() => showThemeSelector.set(!$showThemeSelector)}
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
    onclick={() => {
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
