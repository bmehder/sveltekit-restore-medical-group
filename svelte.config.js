import adapter from '@sveltejs/adapter-netlify'
// import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    target: '#svelte',
  },
}

export default config
