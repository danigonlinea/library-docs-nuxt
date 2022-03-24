<template>
  <div>
    <p v-if="isLoading">Fetching properties...</p>
    <p v-else-if="isError">An error occurred :(</p>
    <div v-else>
      <template v-if="isEmpty"><p>No available props</p> </template>
      <template v-else>
        <ul>
          <li v-for="prop of props" :key="prop.name">{{ prop.name }}</li>
        </ul>
      </template>
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
    },
  },
  data() {
    return {
      props: [],
      state: 0,
      fetchState: {
        loading: 0,
        loaded: 1,
        error: 2,
      },
    }
  },
  computed: {
    isEmpty() {
      return !this.props.length
    },
    isLoading() {
      return this.state === this.fetchState.loading
    },
    isError() {
      return this.state === this.fetchState.error
    },
  },
  async mounted() {
    try {
      const { default: { props = [] } = {} } = await import(
        `../../../vueJson/${this.of}.parsed.json`
      )

      this.props = [...props]
      this.state = this.fetchState.loaded
    } catch (error) {
      console.log(error)
      this.state = this.fetchState.error
    }
  },
}
</script>

<style lang="scss" scoped></style>
