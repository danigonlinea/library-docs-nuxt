<template>
  <article>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>

    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'main',
  async asyncData({ $content, params, route }) {
    console.log(route.path, params)
    const page = await $content(route.path).fetch()

    return {
      page,
    }
  },
}
</script>
