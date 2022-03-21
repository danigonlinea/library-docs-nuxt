<template>
  <div>
    Here is the list of all properties of the component {{ data.displayName }}
  </div>
</template>

<script>
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
      data: undefined,
    }
  },
  async fetch() {
    const response = await this.$axios.$post('/api/vue/props', {
      name: this.of,
    })

    console.log(response)

    const { data } = response
    this.data = data
  },
}
</script>

<style lang="scss" scoped></style>
