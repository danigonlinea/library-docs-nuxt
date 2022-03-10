<template>
  <div>
    <label class="watson-input-label" :for="id"> {{ label }}</label>
    <input
      class="watson-input"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :class="inputClass"
      :value="localValue"
      :disabled="disabled"
      @input="onInput"
    />
  </div>
</template>

<script>
import { INPUT_TYPES } from './config'

export default {
  name: 'Input',

  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
      default: 'Label',
    },
    name: {
      type: String,
      required: false,
    },

    value: {
      required: false,
      type: String,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
      validator: value => INPUT_TYPES.includes(value),
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      newValue: this.value,
    }
  },

  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(value) {
        this.newValue = value
      },
    },
    inputClass() {
      return {
        [`watson-input`]: true,
      }
    },
  },

  methods: {
    onInput(evt) {
      this.localValue = evt.target.value
      this.$emit('input', this.newValue)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Input.scss';
</style>
