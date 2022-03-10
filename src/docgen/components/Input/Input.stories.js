import { INPUT_TYPES } from './config'
import Input from './Input.vue'

export default {
  title: 'Components',
  component: Input,
  argTypes: {
    type: {
      options: INPUT_TYPES,
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  props: [
    { name: 'label' },
    {
      name: 'type',
      description: 'Input type.',
      control: {
        type: 'select',
        options: INPUT_TYPES,
      },
    },
  ],
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input: Input },
  template: '<Input v-bind="$props" />',
})

export const WatsonInput = Template.bind({})
WatsonInput.storyName = 'Input'
// Default values for render
WatsonInput.args = {
  id: 'watson-input-id',
  type: 'text',
  disabled: false,
}
