<script lang="ts">
  import abyss from "$lib/assets/abyss.webp?enhanced";
  import shade from "$lib/assets/shade.webp?enhanced";
  import kraken from "$lib/assets/kraken.webp?enhanced";
  import mist from "$lib/assets/mist.webp?enhanced";
  import { type Picture } from "imagetools-core";
  import { writable } from "svelte/store";

  let selected = writable<string>("");
  let { className } = $props();
</script>

<div class={`flex items-center gap-4 ${className}`}>
  <div class="flex items-center justify-center px-4 *:transition-all group">
    {@render themeBubble("abyss", abyss)}
    {@render themeBubble("shade", shade)}
    {@render themeBubble("kraken", kraken)}
    {@render themeBubble("mist", mist)}
  </div>
  <span class="hidden lg:flex font-mono text-foreground-accent">
    {$selected ? `yorumi-${$selected}` : ""}
  </span>
</div>

{#snippet themeBubble(theme: string, imgSrc: Picture)}
  <div
    class="w-8 md:w-10 h-auto block -m-2 group-hover:opacity-5 hover:opacity-100 hover:z-12 hover:scale-110"
    role="contentinfo"
    onmouseover={() => selected.set(theme)}
    onmouseleave={() => selected.set("")}
    onfocus={() => selected.set(theme)}
    onblur={() => selected.set("")}
  >
    <enhanced:img src={imgSrc} alt={`yorumi-${theme}`} class="w-full h-auto" />
  </div>
{/snippet}
