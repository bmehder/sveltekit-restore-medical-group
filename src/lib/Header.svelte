<script>
  import BounceNav from '$lib/BounceNav.svelte'

  export let sticky = false
  export let uppercase = false
  export let background = 'white'
  export let color = '#001515'

  let mobile = false
  const showMobile = () => (mobile = !mobile)
</script>

<header class:sticky style="background:{background};color:{color};">
  <nav class="main">
    <a href="/"
      ><img
        class="logo"
        src="/restore-medical-group-logo.png"
        alt="Restore Medical Group Logo"
      /></a
    >
    <ul class:uppercase>
      <li><a href="/">Home</a></li>
      <li><a href="/patients">Patients</a></li>
      <li><a href="/providers">Providers</a></li>
      <li><a href="/case-studies">Case Studies</a></li>
      <li><a href="/testimonials">Testimonials</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  <span class="mobile">
    <BounceNav />
  </span>
</header>

<style>
  header {
    width: 100%;
    padding: 2em 0;
    background: darkorange;
    color: white;
    text-align: center;
  }
  .sticky {
    position: fixed;
    z-index: 100;
  }
  .logo {
    display: block;
    width: 200px;
    height: auto;
    /* padding: 1em 0; */
    background: white;
    border-radius: 4px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
    padding: 0;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
  }
  nav ul li {
    position: relative;
    margin-bottom: 0;
    padding: 0 1rem;
    list-style-type: none;
    font-weight: 600;
  }
  nav ul li:last-child {
    padding-right: 0;
  }
  nav ul li a {
    height: auto;
    color: white;
    font-size: 1em;
    text-decoration: none;
  }
  nav ul li a:hover {
    padding-bottom: 1rem;
    color: gold;
    border-bottom: 4px solid gold;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .mobile {
    display: none;
  }
  @media screen and (max-width: 900px) {
    header {
      padding: 0;
    }
    nav.main {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
</style>
