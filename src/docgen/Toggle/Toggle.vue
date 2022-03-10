<template>
  <div class="watson-toggle">
    <div class="watson-toggle-switch">
      <input
        :id="id"
        type="checkbox"
        :disabled="disabled"
        :checked="checked"
        @input="onInput"
      />
      <span aria-hidden="true"></span>
    </div>

    <label :for="id"> {{ label }} </label>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
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
    disabled: {
      type: Boolean,
      required: false,
    },
    checked: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onInput(evt) {
      return this.$emit('input', evt.target.checked)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Toggle.scss';
</style>
