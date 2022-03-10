import Toggle from './Toggle.vue'

export default {
  title: 'Components',
  component: Toggle,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  props: [{ name: 'label' }],
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toggle: Toggle },
  template: '<Toggle v-bind="$props" />',
})

export const WatsonToggle = Template.bind({})
WatsonToggle.storyName = 'Toggle'
// Default values for render
WatsonToggle.args = {
  id: 'watson-toggle-id',
  disabled: false,
  checked: false,
}
