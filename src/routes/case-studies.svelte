<script>
  import Grid from '$lib/Grid.svelte'
  import Section from '$lib/Section.svelte'

  let value = ''
  let isBlur = true
  const unblur = () => (isBlur = false)
</script>

<svelte:head>
  <title>Case Studies | Restore Medical Group | Golden, CO</title>

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

<Section boxed background="white" padding="0.5em 2em 4em">
  <h3 style="text-align:center;">Case Studies</h3>
  <p>Click on the images to unblur them.</p>
  <div on:click={unblur}>
    <Grid columns="1fr 1fr" gap="2em">
      <div>
        <h5 class="before-after">Before</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/patient-1-left-leg-before.jpg"
            alt="before"
          />
          <aside>
            Patient M. left leg after 5 years of treatment with traditional
            methods.
          </aside>
        </div>
      </div>
      <div>
        <h5 class="before-after">After</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/patient-1-left-leg-after.jpg"
            alt="after"
          />
          <aside>
            Patient M. left leg after 21 days with Restore Medical Group.
          </aside>
        </div>
      </div>
    </Grid>
    <Grid columns="1fr 1fr" gap="2em">
      <div>
        <h5 class="before-after">Before</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/patient-1-right-leg-before.jpg"
            alt="before"
          />
          <aside>
            Patient M. right leg after 5 years of treatment with traditional
            methods.
          </aside>
        </div>
      </div>
      <div>
        <h5 class="before-after">After</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/patient-1-right-leg-after.jpg"
            alt="after"
          />
          <aside>
            Patient M. right leg after 21 days with Restore Medical Group.
          </aside>
        </div>
      </div>
    </Grid>
    <Grid columns="1fr 1fr" gap="2em">
      <div>
        <h5 class="before-after">Before</h5>
        <div>
          <img class:blur={isBlur} src="/images/image4.jpg" alt="before" />
          <aside>
            6.5CM wide persistent wound unable to be healed with traditional
            treatments.
          </aside>
        </div>
      </div>
      <div>
        <h5 class="before-after">After</h5>
        <div>
          <img class:blur={isBlur} src="/images/image9.jpg" alt="after" />
          <aside>
            After 7 weeks of treatment using Restore’s Wound Care Protocol.
          </aside>
        </div>
      </div>
    </Grid>
    <!-- <Grid columns="1fr 1fr" gap="2em">
    <div>
      <h5 class="before-after">Before</h5>
      <div>
        <img class:blur={isBlur} src="/images/image1.jpg" alt="before" />
        <aside>Picture taken 2 weeks into treatment</aside>
      </div>
    </div>
    <div>
      <h5 class="before-after">After</h5>
      <div>
        <img class:blur={isBlur} src="/images/image7.jpg" alt="after" />
        <aside>Picture taken 3-4 weeks into treatment</aside>
      </div>
    </div>
  </Grid> -->
    <!-- <Grid columns="1fr 1fr" gap="2em">
      <div>
        <h5 class="before-after">Before</h5>
        <div>
          <img class:blur={isBlur} src="/images/image11.jpg" alt="before" />
          <aside>Two year old sacrum wound starting at 5.5CM</aside>
        </div>
      </div>
      <div>
        <h5 class="before-after">After</h5>
        <div>
          <img class:blur={isBlur} src="/images/image3.jpg" alt="after" />
          <aside>Reduced to 3.5CM in 4 weeks. Still in treatment.</aside>
        </div>
      </div>
    </Grid> -->
    <Grid columns="1fr">
      <h3 style="margin-top:2em;text-align:center;">Leg Wound Series</h3>
    </Grid>
    <Grid columns="1fr 1fr 1fr" gap="2em">
      <div>
        <h5 class="before-after">Top</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/maxine/maxine-3-24-top.jpg"
            alt="maxine 3-24 top"
          />
          <aside>
            3-24-2021. Top wound following 2 1/2 years of traditional wound
            treatment. Open wound, no skin coverage. Day One with Restore
            Medical Group.
          </aside>
        </div>
      </div>
      <div>
        <h5 class="before-after">Top</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/maxine/maxine-5-17-top.jpg"
            alt="maxine 5-17 top"
          />
          <aside>
            5-17-2021. Top wound following first treatment plan with Restore.
            Skin completely covering wound.
          </aside>
        </div>
      </div>
      <div>
        <h5 class="before-after">Top</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/maxine/maxine-6-18-top.jpg"
            alt="maxine 6-18 top"
          />
          <aside>
            6-18-2021. Top wound showing continued healing and shrinkage.
          </aside>
        </div>
      </div>
    </Grid>
    <Grid columns="1fr 1fr 1fr" gap="2em">
      <div>
        <h5 class="before-after">Side</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/maxine/maxine-3-24-side.jpg"
            alt="maxine 3-24 side"
          />
          <aside>
            3-24-2021. Side wound; basically one large wound connected to the
            top wound. Again, after 2 1/2 years of traditional wound treatment.
            Day One with Restore.
          </aside>
        </div>
      </div>
      <div>
        <h5 class="before-after">Side</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/maxine/maxine-5-17-side.jpg"
            alt="maxine 5-17 side"
          />
          <aside>
            5-17-2021. Side wound following first treatment plan showing clear
            separation from top wound.
          </aside>
        </div>
      </div>
      <div>
        <h5 class="before-after">Side</h5>
        <div>
          <img
            class:blur={isBlur}
            src="/images/maxine/maxine-6-16-side.jpg"
            alt="maxine 6-16 side"
          />
          <aside>
            6-18-2021. Side wound magnified 10x showing complete healing with a
            slight discoloration of skin.
          </aside>
        </div>
      </div>
    </Grid>
  </div>
</Section>

<style>
  p {
    text-align: center;
  }
  h5 {
    font-size: 150%;
    text-align: center;
  }
  .before-after {
    margin-top: 2em;
  }
  aside {
    display: block;
    background: #eee;
    text-align: center;
    padding: 2em;
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
  }
  .blur {
    filter: blur(10px);
  }
</style>
