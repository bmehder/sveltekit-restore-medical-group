<script>
  import { fly } from 'svelte/transition'
  export let refresh = ''
</script>

{#key refresh}
  <div
    in:fly={{ x: -500, duration: 300, delay: 400 }}
    out:fly={{ x: 500, duration: 300 }}
  >
    <slot />
  </div>
{/key}
