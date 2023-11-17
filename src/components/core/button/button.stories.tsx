import Button from './button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'large', 'regular'],
      table: {
        defaultValue: { summary: 'regular' }
      },
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['info', 'error', 'neutral'],
      control: { type: 'inline-radio' },
      table: {
        defaultValue: { summary: 'info' }
      },
    },
    borderRadius: {
      options: ['big', 'small'],
      control: { type: 'inline-radio' },
      table: {
        defaultValue: { summary: 'big' }
      },
    },
    icon: {
      options: ['info', 'clock', 'bell', 'chevron', undefined], //todo import of array
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'select' },
    },
    iconSize: {
      options: [13, 14, 16, 18, 24],
      table: {
        defaultValue: { summary: 16 }
      },
      control: { type: 'inline-radio' },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
      table: {
        defaultValue: { summary: 'left' }
      },
    },
    text: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    isDisabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' }
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Info = Template.bind({})
Info.args = {
  size: 'regular',
  type: 'info',
  icon: 'info',
  iconSize: 16,
  borderRadius: 'big',
  iconPosition: 'left',
  text: 'Button CTA',
}

export const Error = Template.bind({})
Error.args = {
  size: 'regular',
  type: 'error',
  icon: 'info',
  iconPosition: 'left',
  text: 'Button CTA',
}

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args = {
  size: 'regular',
  type: 'secondary outline',
  icon: 'info',
  iconPosition: 'left',
  text: 'Button CTA',
}

export const InfoOutline = Template.bind({})
InfoOutline.args = {
  size: 'regular',
  type: 'info outline',
  icon: 'info',
  iconPosition: 'left',
  text: 'Button CTA',
}
