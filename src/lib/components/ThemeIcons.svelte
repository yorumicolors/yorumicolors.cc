<script lang="ts">
  import abyss from "$lib/assets/abyss.webp?enhanced";
  import shade from "$lib/assets/shade.webp?enhanced";
  import kraken from "$lib/assets/kraken.webp?enhanced";
  import mist from "$lib/assets/mist.webp?enhanced";
  import { writable } from "svelte/store";

  let selected = writable<string>("");
</script>

<div class="flex items-center gap-4">
  <div class="flex items-center justify-center px-4 *:transition-all group">
    {@render themeBubble("abyss", abyss)}
    {@render themeBubble("shade", shade)}
    {@render themeBubble("kraken", kraken)}
    {@render themeBubble("mist", mist)}
  </div>
  <span class="font-mono text-foreground-accent">
    {$selected ? `yorumi-${$selected}` : ""}
  </span>
</div>

{#snippet themeBubble(theme: string, imgSrc)}
  <div
    class="w-10 h-auto block -m-2 group-hover:opacity-5 hover:opacity-100 hover:z-12 hover:scale-110"
    role="contentinfo"
    on:mouseover={() => selected.set(theme)}
    on:mouseleave={() => selected.set("")}
    on:focus={() => selected.set(theme)}
    on:blur={() => selected.set("")}
  >
    <enhanced:img src={imgSrc} alt={`yorumi-${theme}`} class="w-full h-auto" />
  </div>
{/snippet}
