<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<script>
  import '../app.css'
  import PageTransition from '$lib/PageTransition.svelte'
  import Head from '$lib/Head.svelte'
  import Header from '$lib/Header.svelte'
  import Bottom from '$lib/Bottom.svelte'
  import Footer from '$lib/Footer.svelte'

  export let key
</script>

<Head />

<Header background="#111" />
<PageTransition refresh={key}>
  <slot />
</PageTransition>
<Bottom />
<Footer background="#111" color="white">Restore Medical Group</Footer>
