import Tag from './tag'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    size: {
      options: ['large', 'regular'],
      table: {
        defaultValue: { summary: 'regular' }
      },
      control: { type: 'inline-radio' },
    },
    icon: {
      options: ['info', 'clock', 'bell', 'chevron'], //todo import of array
      table: {
        defaultValue: { summary: 'info' }
      },
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['left', 'right'],
      table: {
        defaultValue: { summary: 'left' }
      },
      control: { type: 'inline-radio' },
    },
    text: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    isDisabled: {
      table: {
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Regular = Template.bind({})
Regular.args = {
  size: 'regular',
  icon: 'info',
  iconPosition: 'left',
  text: 'Tag',
  isDisabled: false
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  icon: 'info',
  iconPosition: 'right',
  text: 'Tag',
}

export const RegularDisabled = Template.bind({})
RegularDisabled.args = {
  size: 'regular',
  icon: 'info',
  iconPosition: 'left',
  text: 'Tag',
  isDisabled: true,
}
