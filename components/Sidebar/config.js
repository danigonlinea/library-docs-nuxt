/**
 * Sidebar based on sections and
 */
const watsonSidebarMenu = {
  Foundations: ['Design', 'Spacing', 'Colors', 'Typography'],
  Components: ['Button', 'Dropdown', 'Input'],
}

/**
 * Generates Sidebar Menu
 */
export function generateSidebar() {
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
}
