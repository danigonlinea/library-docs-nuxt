<template>
  <header class="watson-header">
    <input
      v-model="query"
      type="search"
      autocomplete="off"
      placeholder="Search"
    />

    <ul v-if="pages.length">
      <li v-for="page of pages" :key="page.path">
        <NuxtLink
          :to="{
            path: `${page.path}`,
            params: { slug: page.slug },
          }"
          >{{ page.title }}
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script>
/**
 * this.$content page properties.
 * body, createdAt, description, dir, extension, path, slug, title, toc, updatedAt,
 */
export default {
  name: 'Header',
  data() {
    return {
      query: '',
      pages: [],
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.pages = []
        return
      }

      const pagesResult = await this.$content(('', { deep: true }))
        .limit(12)
        .search(query)
        .fetch()

      this.pages = pagesResult.filter(page => {
        return page.dir !== '/'
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Header.scss';
</style>
