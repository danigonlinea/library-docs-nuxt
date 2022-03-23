<template>
  <div>
    <p v-if="isLoading">Fetching slots...</p>
    <p v-else-if="isError">An error occurred :(</p>
    <div v-else>
      <template v-if="isEmpty"><p>No available slots</p> </template>
      <template v-else>
        <ul>
          <li v-for="slot of slots" :key="slot.name">{{ slot.name }}</li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotsTable',
  props: {
    of: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      slots: [],
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
      return !this.slots.length
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
      const { slots } = await this.$axios.$post('vue-slots', {
        name: this.of,
      })

      this.slots = [...slots]
      this.state = this.fetchState.loaded
    } catch (error) {
      this.state = this.fetchState.error
    }
  },
}
</script>

<style lang="scss" scoped></style>
