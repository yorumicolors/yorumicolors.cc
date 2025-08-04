<script>
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
  <div class="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full flex-grow">
    <div
      class="col-span-1 row-span-1 border border-gray-300 w-full h-full
      bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/hd/ba4afc116462261.606908659fef2.jpg')] bg-cover bg-left"
    ></div>
    <div
      class="col-span-1 row-span-1 border border-gray-300 w-full h-full
      bg-[url('https://avatars.mds.yandex.net/get-yapic/45566/enc-f3fd3ea93379494370a1ca43fac9af5987c761d217d50ad4157e454b5f2845d8/orig')] bg-cover bg-center"
    ></div>
    <div
      class="col-span-1 row-span-1 border border-gray-300 w-full h-full
      bg-[url('https://i01.fotocdn.net/s217/caedf51892892026/public_pin_l/2971454317.jpg')] bg-cover bg-center"
    ></div>
    <div
      class="col-span-1 row-span-1 border border-gray-300 w-full h-full
      bg-[url('https://m.media-amazon.com/images/M/MV5BM2NkYzRkYWMtOWFmNC00NTI3LTkzNmQtNzJmZGRhMDZlOGZmXkEyXkFqcGc@.jpg')] bg-cover bg-center"
    ></div>
  </div>
</section>

<section class="hero flex-col">
  <div class="flex flex-col gap-2 w-full">
    <div class="flex items-center gap-4">
      <h1 class="text-display whitespace-nowrap">The Yorumi Palette</h1>
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
</section>
