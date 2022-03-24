<template>
  <div>
    <h1>{{ component.title }}</h1>
    <p>{{ component.description }}</p>

    <!-- <ul class="watson-tabs">
      <li v-for="tab in navigationTabMenu" :key="tab.key" class="watson-tab">
        <NuxtLink :to="tab.path">{{ tab.path }}</NuxtLink>
      </li>
    </ul> -->

    <nuxt-content :document="component" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, route }) {
    const component = await $content(`${route.path}/${params.name}`).fetch()

    return {
      component,
    }
  },
  computed: {},
}
</script>
