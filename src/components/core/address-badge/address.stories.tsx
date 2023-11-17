import AddressBadge from './addressBadge'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'AddressBadge',
  component: AddressBadge,
  argTypes: {
    address: {
      description: 'Wallet address or any other info',
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof AddressBadge>

const Template: ComponentStory<typeof AddressBadge> = (args) => <AddressBadge {...args} />

export const AddressBadgeExample = Template.bind({})
AddressBadgeExample.args = {
  address: '0xC5B9d6b9K59G3C84b7Cw26F136A1442731880977',
}

