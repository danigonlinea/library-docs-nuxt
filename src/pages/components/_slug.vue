<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'main',
  async asyncData({ $content, params }) {
    const page = await $content('components', params.slug).fetch()

    return {
      page,
    }
  },
}
</script>
