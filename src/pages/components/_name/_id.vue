<template>
  <article>
    <h1>{{ component.title }}</h1>
    <p>{{ component.description }}</p>

    <ul class="watson-tabs">
      <li v-for="tab in navigationTabMenu" :key="tab.key" class="watson-tab">
        <NuxtLink :to="tab.path">{{ tab.path }}</NuxtLink>
      </li>
    </ul>

    <nuxt-content :document="component" />
  </article>
</template>

<script>
const navigationTabOptions = ['Usage', 'Code', 'Examples']

export default {
  async asyncData({ $content, params, route }) {
    const component = await $content(route.path).fetch()

    return {
      component,
    }
  },
  computed: {
    navigationTabMenu() {
      return navigationTabOptions.map(navTabOption => {
        return {
          name: navTabOption,
          key: navTabOption.toLowerCase(),
          path: `${navTabOption.toLowerCase()}`,
        }
      })
    },
  },
}
</script>
