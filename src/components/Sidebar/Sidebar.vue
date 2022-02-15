<template>
  <div class="watson-sidebar">
    <NuxtLink class="watson-logo" to="/">Watson</NuxtLink>
    <nav>
      <ul>
        <li
          class="watson-sidebar-section"
          :key="section.name"
          v-for="section in sidebarMenu"
        >
          <NuxtLink :to="section.path">{{ section.name }}</NuxtLink>
          <ul v-if="section.items" class="watson-sidebar-item">
            <li
              class="watson-sidebar-section-item"
              :key="item.name"
              v-for="item in section.items"
            >
              <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
/**
 * Sidebar based on sections and
 */
const watsonSidebarMenu = {
  Foundations: ['Design', 'Spacing', 'Colors', 'Typography'],
  Components: ['Button', 'Dropdown', 'Input'],
}

export default {
  name: 'Sidebar',

  computed: {
    sidebarMenu() {
      return Object.keys(watsonSidebarMenu).map(sectionName => {
        return {
          name: sectionName,
          key: sectionName.toLowerCase(),
          path: `/${sectionName.toLowerCase()}`,
          items: watsonSidebarMenu[sectionName].map(sectionItem => {
            return {
              name: sectionItem,
              key: sectionItem.toLowerCase(),
              path: `/${sectionName.toLowerCase()}/${sectionItem.toLowerCase()}`,
            }
          }),
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Sidebar.scss';
</style>
