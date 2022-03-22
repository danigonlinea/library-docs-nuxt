<template>
  <div>
    <p v-if="isLoading">Fetching methods...</p>
    <p v-else-if="isError">An error occurred :(</p>
    <div v-else>
      <template v-if="isEmpty"><p>No available methods</p> </template>
      <template v-else>
        <ul>
          <li v-for="method of methods" :key="method.name">
            {{ method.name }}
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MethodsTable',
  props: {
    of: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      methods: [],
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
      return !this.methods.length
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
      const { methods } = await this.$axios.$post('/api/vue-methods', {
        name: this.of,
      })

      this.methods = [...methods]
      this.state = this.fetchState.loaded
    } catch (error) {
      this.state = this.fetchState.error
    }
  },
}
</script>

<style lang="scss" scoped></style>
