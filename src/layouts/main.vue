<template>
  <div class="watson-site-container">
    <div class="watson-main-container">
      <Sidebar />
      <div>
        <Header />
        <!-- Here is the content of the page -->
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
}
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>
