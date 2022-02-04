<template>
  <div class="watson-site-container">
    <div class="watson-main-container">
      <Sidebar />
      <slot />
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: 'Default Page',
})
</script>

<style scoped>
.watson-site-container {
  min-height: 100vh;
}
.watson-main-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 100%;
}
</style>
