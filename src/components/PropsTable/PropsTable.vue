<template>
  <div></div>
</template>

<script>
/**
 * this.$content page properties.
 * body, createdAt, description, dir, extension, path, slug, title, toc, updatedAt,
 */
export default {
  name: 'PropsTable',
  props: {
    of: {
      type: String,
      required: true,
      default: 'Button',
    },
  },
  data() {
    return {
      component: undefined,
    }
  },
  computed: {
    getComponent() {
      return () => import(`watson-vue/src/components/${this.of}/${this.of}.vue`)
    },
  },
  mounted() {
    // const vueComponent = require(`../../../node_modules/watson-vue/src/components/${this.of}/${this.of}.vue`)
    // const parsedVue = parse(this.getComponent())
    // console.log(parsedVue)
    // const { displayName } = parsedVue
    // console.log(`Generating... ${displayName}`)
  },
}
</script>

<style lang="scss" scoped></style>
