<template>
  <div id="watson-site" class="watson-site">
    <Sidebar />
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
export default {}
</script>

<style lang="scss" scoped>
.watson-site {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 24px;
  min-height: 100vh;

  :nth-child(1) {
    grid-column: 1 / 3;
  }

  :nth-child(2) {
    grid-column: 3 / -1;
  }

  main {
    min-height: calc(100vh - 128px);
    width: 100%;
  }
}
</style>
