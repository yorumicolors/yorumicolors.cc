<script lang="ts">
  import ThemeIcons from "$lib/components/ThemeIcons.svelte";
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>Yorumi | Docs</title>
</svelte:head>

<section class="hero flex-col">
  <div class="flex flex-col gap-2 w-full">
    <div class="flex items-center gap-4">
      <h1 class="text-display whitespace-nowrap">The Colorschemes</h1>
      <ThemeIcons />
    </div>
    <p class="max-w-5/6">
      Yorumi features a deep sea palette, thoughtfully divided into six thematic
      color groups. Each group embodies a different element of the ocean to
      create a serene and focused coding environment. Utilize these colors to
      enhance various aspects of your editor, from syntax highlighting to UI
      components, ensuring a cohesive and visually appealing workspace.
    </p>
  </div>
  <div class="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full flex-grow group">
    {@render colorschemeCard(
      "Abyss",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/ba4afc116462261.606908659fef2.jpg",
      "bottom-left",
      "top left",
    )}
    {@render colorschemeCard(
      "Kraken",
      "https://avatars.mds.yandex.net/get-yapic/45566/enc-f3fd3ea93379494370a1ca43fac9af5987c761d217d50ad4157e454b5f2845d8/orig",
      "center",
      "top right",
    )}
    {@render colorschemeCard(
      "Shade",
      "https://i01.fotocdn.net/s217/caedf51892892026/public_pin_l/2971454317.jpg",
      "center",
      "bottom left",
    )}
    {@render colorschemeCard(
      "Mist",
      "https://m.media-amazon.com/images/M/MV5BM2NkYzRkYWMtOWFmNC00NTI3LTkzNmQtNzJmZGRhMDZlOGZmXkEyXkFqcGc@.jpg",
      "center",
      "bottom right",
    )}
  </div>
</section>

<section class="hero flex-col">
  <div class="flex flex-col gap-2 w-full">
    <div class="flex items-center gap-4 justify-between">
      <h1 class="text-display whitespace-nowrap">The Yorumi Palette</h1>
    </div>
    <p class="max-w-5/6">
      Yorumi features a deep sea palette, thoughtfully divided into six thematic
      color groups. Each group embodies a different element of the ocean to
      create a serene and focused coding environment. Utilize these colors to
      enhance various aspects of your editor, from syntax highlighting to UI
      components, ensuring a cohesive and visually appealing workspace.
    </p>
    <span class="flex items-center gap-1 text-foreground-secondary">
      <span>Port Yorumi for your favorite application.</span>
      <a href="/llms.txt" class="link-btn">
        <Icon icon="ph:download-duotone" class="" />
        Download LLMs.txt
      </a>
    </span>
  </div>
</section>

{#snippet colorschemeCard(
  name: string,
  imgSrc: string,
  position: string,
  origin: string,
)}
  <div
    class="flex flex-col gap-1 hover:scale-125 hover:z-12 hover:opacity-100 transition-all group-hover:opacity-10"
    style={`transform-origin: ${origin} !important;`}
  >
    <div
      class="col-span-1 row-span-1 border border-gray-300 w-full h-full"
      style={`background-image: url(${imgSrc}); background-size: cover; background-position: ${position};`}
    ></div>
    <span class="font-mono text-sm">{name}</span>
  </div>
{/snippet}
