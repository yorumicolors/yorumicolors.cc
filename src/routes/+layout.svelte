<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import { fade } from "svelte/transition";
  import "../app.css";
  import { page } from "$app/state";
  import Navigation from "$lib/components/Navigation.svelte";

  let { children } = $props();
</script>

<Navigation />
{#key page.url.pathname}
  <div
    in:fade={{ duration: 300, delay: 300 }}
    out:fade={{ duration: 300 }}
    class="h-full flex-grow flex flex-col items-start w-full overflow-x-none"
  >
    {@render children()}
  </div>
{/key}
<Footer />
