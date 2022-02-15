<template>
  <article>
    <h1>{{ page.title }}</h1>
    <h2>{{ page.description }}</h2>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'main',
  async asyncData({ $content, route, params }) {
    const page = await $content(`components/index`).fetch()

    return {
      page,
    }
  },
}
</script>
