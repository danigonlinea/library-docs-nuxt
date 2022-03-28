<template>
  <div>
    <h1>{{ componentContent.title }}</h1>
    <p>{{ componentContent.description }}</p>

    <div class="navigation-container">
      <ul class="watson-tabs">
        <li v-for="tab in tabs" :key="tab.id" class="watson-tab">
          <NuxtLink :to="{ hash: `${tab.anchor}` }">{{ tab.text }}</NuxtLink>
        </li>
      </ul>
    </div>

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
            anchor: `#${id}`,
            text,
          }
        }),
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.navigation-container {
  position: sticky;
  z-index: 1;
  top: 76px;
  background: white;
}

.watson-tabs li {
  display: inline-block;
  padding: 1em;
}
</style>
