<template>
  <div>
    <h1>{{ componentContent.title }}</h1>
    <p>{{ componentContent.description }}</p>

    <ul class="watson-tabs">
      <li v-for="tab in tabs" :key="tab.id" class="watson-tab">
        <NuxtLink :to="{ hash: `${tab.anchor}` }">{{ tab.text }}</NuxtLink>
      </li>
    </ul>

    <nuxt-content :document="componentContent" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, route }) {
    const componentContent = await $content(
      `${route.path}/${params.name}`
    ).fetch()

    return {
      componentContent,
      tabs: componentContent.toc
        .filter(heading => heading.depth === 2)
        .map(heading => {
          const { id, text } = heading

          return {
            id,
            path: route.path,
            anchor: `#${id}`,
            text,
          }
        }),
    }
  },
  computed: {},
}
</script>
