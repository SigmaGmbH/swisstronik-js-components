import Input from './input'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Placeholder',
    size: 'regular',
    state: 'default',
    name: 'customName',
    label: 'Label',
    errorMessage: undefined,
    tip: undefined
  },
  argTypes: {
    size: {
      options: ['small', 'large', 'regular'],
      table: {
        defaultValue: { summary: 'regular' }
      },
      control: { type: 'inline-radio' },
    },
    state: {
      options: ['default', 'error'],
      table: {
        defaultValue: { summary: 'default' }
      },
      control: { type: 'inline-radio' },
    },
    name: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    placeholder:{
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    value: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    label: {
      description: 'set showLabel to true',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    errorMessage: {
      description: 'state prop should be an error',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    tip: {
      description: 'set showTip to true',
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
    showTip: {
      table: {
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' },
    },
    showLabel: {
      table: {
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <div className='max-w-xs'>
    <Input {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  size: 'regular',
}

export const DefaultWithTip = Template.bind({})
DefaultWithTip.args = {
  placeholder: 'Placeholder',
  size: 'regular',
  showTip: true,
  tip: 'Simple caption text here',
}

export const DefaultWithTipAndLabel = Template.bind({})
DefaultWithTipAndLabel.args = {
  size: 'regular',
  showTip: true,
  showLabel: true,
  tip: 'Simple caption text here',
  label: 'Label',
}

export const ErrorWithTipAndLabel = Template.bind({})
ErrorWithTipAndLabel.args = {
  size: 'regular',
  state: 'error',
  showLabel: true,
  label: 'Label',
  errorMessage: 'Error message here',
}


