import Toggle from './toggle'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Toggle',
  component: Toggle,
  argTypes: {
    isDisabled: {
      table: {
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' },
    },
    enabled: {
      table: {
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const ActiveToggle = Template.bind({})
ActiveToggle.args = {
  enabled: false,
  isDisabled: false
}

export const DisabledToggle = Template.bind({})
DisabledToggle.args = {
  isDisabled: true,
  enabled: false,
}
