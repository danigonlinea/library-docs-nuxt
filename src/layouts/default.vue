<template>
  <div id="watson-site" class="watson-site">
    <Sidebar navigation="menu" />
    <div class="watson-page">
      <Header />
      <!-- Here is the content of the page -->
      <main>
        <Nuxt />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
    }
  },
  async mounted() {
    const page = await this.$content('', { deep: true }).fetch()

    console.log('mounted', page)
  },
}
</script>

<style lang="scss" scoped>
.watson-site {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 24px;
  min-height: 100vh;

  .watson-sidebar {
    grid-column: 1 / 3;
    min-width: 260px;
  }

  .watson-page {
    grid-column: 3 / -1;

    main {
      min-height: calc(100vh - 128px);
      width: 100%;
    }
  }
}
</style>
