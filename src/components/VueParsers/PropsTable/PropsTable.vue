<template>
  <div>
    <p v-if="isLoading">Fetching properties...</p>
    <p v-else-if="isError">An error occurred :(</p>
    <div v-else>
      <template v-if="isEmpty"><p>No available props</p> </template>
      <template v-else>
        <div class="watson-table">
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prop in props" :key="prop.name">
                <td>
                  {{ getPropValue(prop, 'name') }}
                  <span v-if="getPropValue(prop, 'required')">*</span>
                </td>
                <td>
                  {{ getPropValue(prop, 'type') }}
                </td>
                <td>
                  {{ getPropValue(prop, 'description') }}
                </td>
                <td>
                  <p v-if="hasProp(prop, 'defaultValue')">
                    Default:
                    <code>{{ getPropValue(prop, 'defaultValue') }} </code>
                  </p>

                  <p v-if="hasProp(prop, 'values')">
                    <code>{{ getPropValue(prop, 'values') }}</code>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
      // eslint-disable-next-line no-console
      console.log(error)
      this.state = this.fetchState.error
    }
  },

  methods: {
    hasProp(propData, propName) {
      return Object.prototype.hasOwnProperty.call(propData, propName)
    },
    getPropValue(propData, propName) {
      const propValue = propData[propName]

      switch (propName) {
        case 'name':
        case 'required':
        case 'description':
          return propValue
        case 'type':
          return propValue.name
        case 'defaultValue':
          return propValue.value
        case 'values':
          return propValue.map(value => value).join(' | ')

        default:
          return propData[propName]
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
