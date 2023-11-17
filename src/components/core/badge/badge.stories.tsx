import Badge from './badge'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    type: {
      options: ['default', 'uncommon', 'rare', 'ultra-rare'],
      table: {
        defaultValue: { summary: 'default' }
      },
      control: { type: 'inline-radio' },
    },
    text: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'undefined' }
      },
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  text: 'default',
}

export const Uncommon = Template.bind({})
Uncommon.args = {
  type: 'uncommon',
  text: 'uncommon',
}

export const Rare = Template.bind({})
Rare.args = {
  type: 'rare',
  text: 'rare',
}

export const Ultrarare = Template.bind({})
Ultrarare.args = {
  type: 'ultra-rare',
  text: 'ultra-rare',
}
