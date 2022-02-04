<template>
  <div class="main-container">
    <Sidebar />
    <slot />

  </div>

  
</template>

<script>
definePageMeta({
  layout: 'Default Page',
})
</script>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 100%;
}
</style>
