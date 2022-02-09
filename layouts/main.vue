<template>
  <div class="watson-site-container">
    <div class="watson-main-container">
      <Sidebar />
      <div>
        <Header />
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: 'Default Page',
})
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>
