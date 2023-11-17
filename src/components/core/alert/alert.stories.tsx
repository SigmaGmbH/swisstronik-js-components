import Alert from './alert'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    header: {
      description: 'Main title',
      table: {
        defaultValue: { summary: null }
      },
      control: { type: 'text' },
    },
    type: {
      description: 'Theme of alert',
      table: {
        defaultValue: { summary: 'info' }
      },
      options: ['warning', 'success', 'error', 'info'],
      control: { type: 'inline-radio' },
    },
    text: {
      description: 'Description. Set withText to true',
      table: {
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' },
    },
    withText: {
      table: {
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' },
    },
    withControls: {
      table: {
        defaultValue: { summary: false }
      },
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Info = Template.bind({})
Info.args = {
  header: 'A new software update is available. See what’s new in version 2.0',
  type: 'info',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit non vel nulla sit gravida adipiscing. Gravida fusce enim habitant etiam netus sed.',
}

export const Warning = Template.bind({})
Warning.args = {
  header: 'A new software update is available. See what’s new in version 2.0',
  type: 'warning',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit non vel nulla sit gravida adipiscing. Gravida fusce enim habitant etiam netus sed.',
}

export const Success = Template.bind({})
Success.args = {
  header: 'A new software update is available. See what’s new in version 2.0',
  type: 'success',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit non vel nulla sit gravida adipiscing. Gravida fusce enim habitant etiam netus sed.',
}

export const Error = Template.bind({})
Error.args = {
  header: 'A new software update is available. See what’s new in version 2.0',
  type: 'error',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit non vel nulla sit gravida adipiscing. Gravida fusce enim habitant etiam netus sed.',
}
