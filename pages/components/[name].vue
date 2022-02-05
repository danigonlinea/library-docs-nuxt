<template>
  <Content>
    <template #content>
      <h1>You are viewing components: {{ $route.params.name }}</h1>
    </template>
  </Content>
</template>

<script>
definePageMeta({
  layout: 'main',
})
</script>
