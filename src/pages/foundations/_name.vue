<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>

    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, route }) {
    const page = await $content(route.path).fetch()

    return {
      page,
    }
  },
}
</script>
