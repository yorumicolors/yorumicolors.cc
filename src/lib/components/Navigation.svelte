<script lang="ts">
  import { themeStore } from "$lib/stores/themeStore";
  import Icon from "@iconify/svelte";
  import brand from "$lib/assets/brand.webp";
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
      class="flex items-center gap-4 px-4 py-2 rounded-full border border-borders bg-surface-floating"
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
    </div>
  </nav>
</header>
