<template>
  <div>
    <h1>{{ page.title }}</h1>
    <h2>{{ page.description }}</h2>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route, params }) {
    const page = await $content(`components/index`).fetch()

    return {
      page,
    }
  },
}
</script>
