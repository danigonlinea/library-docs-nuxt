<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  layout: 'main',
  async asyncData({ $content }) {
    const page = await $content('index').fetch()

    return {
      page,
    }
  },
}
</script>
