<template>
  <div>
    <p v-if="$fetchState.pending">Fetching properties...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <p>Properties for component {{ data.displayName }}</p>

      <ul>
        <li v-for="props of data.props" :key="props.name">{{ props.name }}</li>
      </ul>
    </div>
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
    const response = await this.$axios.$post('/api/vue-props', {
      name: this.of,
    })

    console.log(response)

    const { data } = response
    this.data = data
  },
}
</script>

<style lang="scss" scoped></style>
