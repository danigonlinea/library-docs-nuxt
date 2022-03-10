<template>
  <button
    class="watson-btn"
    :class="buttonClass"
    type="button"
    @click="onClick"
  >
    <span>
      {{ label }}
    </span>
  </button>
</template>

<script>
import { BUTTON_SIZES, BUTTON_VARIANTS } from './config'

export default {
  name: 'Button',

  props: {
    label: {
      type: String,
      required: true,
      default: 'Button',
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator: value => BUTTON_SIZES.includes(value),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: value => BUTTON_VARIANTS.includes(value),
    },
  },

  computed: {
    buttonClass() {
      return {
        [`watson-btn-${this.variant}`]: true,
        [`watson-btn-${this.size}`]: true,
      }
    },
  },

  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */

      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Button.scss';
</style>
