<template>
  <div id="watson-site" class="watson-site">
    <Sidebar />
    <div>
      <Header />
      <!-- Here is the content of the page -->
      <main>
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
}
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
}
</style>
