<script>
  import Section from './Section.svelte'
  import Flex from './Flex.svelte'
</script>

<Section padding="2rem 0" background="#333">
  <h4>We offer multiple locations for in-clinic treatments.</h4>
  <div>
    <p>
      <big><strong>Golden, CO</strong></big><br />
      400 Indian Street, Suite 280<br />
      Golden, CO 80401
    </p>

    <p>
      <big><strong>Thornton, CO</strong></big><br />
      9195 Grant Street, Suite 305<br />
      Thornton, CO 80229
    </p>

    <p>
      <big><strong>Aurora, CO</strong></big><br />
      1421 S. Potomac Street, Suite 330<br />
      Aurora, CO 80012
    </p>
  </div>
  <p>Phone: (720) 678-9868 | Fax: (720) 678-9860</p>
</Section>

<style>
  div {
    display: flex;
    max-width: 960px;
    margin: auto;
    color: white;
  }
  h4 {
    color: gold;
    text-align: center;
  }
  p {
    flex: 1;
    margin-top: 1em;
    text-align: center;
    color: white;
  }
  @media screen and (max-width: 600px) {
    div {
      flex-direction: column;
    }
  }
</style>
