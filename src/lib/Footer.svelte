<script>
  import { scrollToTop } from './utils'

  export let background = 'rgba(82, 98, 125, 0.8)'
  export let color = 'white'
  export let height = ''

  const year = new Date().getFullYear()
</script>

<footer style="height:{height};background:{background};color:{color};">
  <div>
    <p>
      ©2021 Restore Medical Group is a DBA of Restore Osteo of Colorado, LLC
    </p>
    <p on:click={scrollToTop}>
      Back to Top <i class="fa fa-arrow-up" aria-hidden="true" />
    </p>
  </div>
</footer>

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1020px;
    margin: auto;
    padding: 2em;
  }
  p {
    margin-bottom: 0;
  }
  p:last-child {
    cursor: pointer;
  }
  i {
    width: 25px;
    height: 25px;
    margin-left: 0.5em;
    background-color: white;
    color: black;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    animation: pulse 2s ease infinite alternate;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.25);
    }
  }
  @media screen and (max-width: 600px) {
    p {
      max-width: 200px;
      font-size: 12px;
    }
  }
</style>
