<script>
  import Section from '$lib/Section.svelte'
</script>

<svelte:head>
  <meta
    name="description"
    content="Watch video testimonials from patients who have been helped by Restore Medical Group."
  />
  <title>Restore Medical Group | Testimonials | Golden, CO</title>

  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=UA-185413763-1"></script>
  <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())

    gtag('config', 'UA-185413763-1')
  </script>
</svelte:head>

<Section background="white" padding="0.5em 2em" boxed>
  <h3 style="text-align:center;">Testimonials</h3>
  <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe
      src="https://player.vimeo.com/video/540318619?title=0&byline=0&portrait=0"
      style="position:absolute;top:0;left:0;width:100%;height:100%;"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      title="Restore Osteo Testimonial Video"
    />
  </div>
  <p style="padding: 2em;">
    Richard has wounds on both legs. In this video, he talks about his
    experience at Restore Medical Group, and we share some before and after
    pictures.
  </p>
</Section>

<Section background="white" boxed>
  <div style="display:grid;place-items:center;">
    <iframe
      src="https://player.vimeo.com/video/575120253"
      width="640"
      height="564"
      frameborder="0"
      allow="autoplay; fullscreen"
      title="Harold's Story"
      allowfullscreen
    />
  </div>
</Section>

<style>
  iframe {
    margin: auto;
    text-align: center;
  }
</style>
