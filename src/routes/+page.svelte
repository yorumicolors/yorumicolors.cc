<script lang="ts">
  import Icon from "@iconify/svelte";
  import zed from "$lib/assets/zed_abyss.webp?enhanced";
  import ThemeIcons from "$lib/components/ThemeIcons.svelte";
  import seal from "$lib/assets/seal.gif";
  import { onMount } from "svelte";

  let getYorumiBtn: HTMLAnchorElement;

  onMount(() => {
    let searchInput = document.getElementById("search-input");
    if (!searchInput) return;
    getYorumiBtn?.addEventListener("click", () => {
      searchInput.scrollIntoView({ behavior: "smooth", block: "start" });
      searchInput.focus();
    });
  });
</script>

<svelte:head>
  <title>Yorumi</title>
</svelte:head>

<section class="flex-col items-center hero">
  <div class="flex jusitfy-center items-center w-full pt-6">
    <div class="flex justify-between items-end gap-6 w-full">
      <div class="flex flex-col gap-2 w-full max-w-[800px]">
        <div class="flex gap-4 items-center">
          <h1 class="text-display">Yorumi - Deep Code, Quiet Seas</h1>
          <span class="tag">
            <Icon icon="ph:check-circle-duotone" class="text-xl" />
            WCAG 2.0 - AAA</span
          >
        </div>
        <p>
          Yorumi is a calming night-sea colorscheme for developers. Yorumi
          immerses your editor in soothing blues and greens, with low-contrast
          mellow vibes for ultimate coziness. Text remains razor-sharp, easing
          eye strain during late-night marathons. Less fatigue, more code
          magic—dive in and keep your coding cool.
        </p>
      </div>
      <div class="flex gap-4">
        <a href="#search" class="btn primary" bind:this={getYorumiBtn}>
          <Icon icon="ph:caret-circle-double-down-duotone" class="text-xl" />
          <span>Get Yorumi</span>
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
  <enhanced:img src={zed} alt="Zed, Yorumi Abyss" class="h-auto w-full" />
</section>

<section class="flex-col">
  <div class="flex flex-col gap-2 w-full sticky-header">
    <div class="flex justify-between items-center w-full">
      <div class="flex items-center gap-4">
        <img src={seal} alt="seal" class="w-10 h-10 rounded-md" />
        <h1 class="text-display whitespace-nowrap">Get Yorumi</h1>
        <ThemeIcons />
      </div>
      <div class="flex flex-grow max-w-fit gap-4">
        <div class="flex items-center">
          <div
            class="flex items-center border border-borders rounded-full *:rounded-full *:p-2"
          >
            <div
              class="bg-green-hl ring ring-green text-green flex items-center gap-2 !px-4"
            >
              <Icon icon="ph:asterisk-duotone" class="text-xl" />
              <span>All</span>
            </div>
            <div>
              <Icon icon="ph:linux-logo-duotone" class="text-xl" />
            </div>
            <div>
              <Icon icon="ph:windows-logo-duotone" class="text-xl" />
            </div>
            <div>
              <Icon icon="ph:apple-logo-duotone" class="text-xl" />
            </div>
          </div>
        </div>
        <div class="relative flex items-center">
          <Icon icon="ph:magnifying-glass-duotone" class="absolute left-5" />
          <input
            type="text"
            id="search-input"
            placeholder="Search"
            class="w-full"
          />
        </div>
      </div>
    </div>
    <p></p>
  </div>
  <div class="flex flex-wrap w-full gap-8" id="search"></div>
</section>
