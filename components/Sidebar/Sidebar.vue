<template>
  <div class="watson-sidebar">
    <NuxtLink class="watson-logo" to="/">Watson</NuxtLink>
    <nav>
      <ul>
        <li class="watson-sidebar-section" v-for="section in sidebarMenu">
          <NuxtLink :to="section.key">{{ section.name }}</NuxtLink>
          <ul v-if="section.items" class="watson-sidebar-item">
            <li
              class="watson-sidebar-section-item"
              v-for="item in section.items"
            >
              <NuxtLink :to="item.key">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { sidebarMenu } from './config'
</script>
<style lang="scss" scoped>
@import './Sidebar.scss';
</style>
