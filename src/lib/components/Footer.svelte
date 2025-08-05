<script context="module">
  export const csr = false;
</script>

<script>
  import Icon from "@iconify/svelte";
</script>

<footer
  class="flex w-full items-center justify-between py-6 text-center z-12
    font-mono text-sm font-medium text-ghost fixed bottom-0 bg-surface-primary"
>
  <p class="flex items-center gap-1 mx-auto">
    <span>Copyright</span>
    <Icon icon="ph:copyright-duotone" class="text-lg" />
    <span>{new Date().getFullYear()}, Yorumi Colors️</span>
  </p>
  <p class="flex items-center gap-2 mx-auto">
    character permutations assembled in
    <Icon icon="openmoji:flag-india" class="text-xl" />
  </p>
</footer>
