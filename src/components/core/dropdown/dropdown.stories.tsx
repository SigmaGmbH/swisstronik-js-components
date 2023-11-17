import Button from '../button/button'
import Dropdown from './dropdown'
import { ComponentStory, ComponentMeta } from '@storybook/react'

let getAccountDropMenus = () => [
  { name: 'Item 1', className: 'text-neutral-600', action: () => {} },
  { name: 'Item 2', className: "text-neutral-600", action: () => {} },
]

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    btn: undefined,
    isFullWidth: false,
    isDisabled: false
  },
  parameters: {
    docs: { inlineStories: false, iframeHeight: 200 },
  },
  argTypes: {
    data: {
      table: {
        defaultValue: { summary: '[]' }
      },
      options: getAccountDropMenus(),
    },
    text: {
      description: 'Setting full width to options block',
      table: {
        defaultValue: { summary: 'undefined' }
      },
    },
    isFullWidth: {
      description: 'Setting full width to options block',
      table: {
        defaultValue: { summary: 'false' }
      },
    },
    btn: {
      description: 'You can provide any button you want',
      table: {
        defaultValue: { summary: 'undefined' }
      },
    },
    isDisabled: {
      table: {
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <div style={{width: '150px'}}>
  <Dropdown {...args} />
</div>

export const AvtiveDropdown = Template.bind({})
AvtiveDropdown.args = {
  data: getAccountDropMenus(),
  isFullWidth: true,
  text: 'Active Dropdown',
}

export const DisabledDropdown = Template.bind({})
DisabledDropdown.args = {
  data: getAccountDropMenus(),
  text: 'Disabled Dropdown',
  isDisabled: true,
}

export const DropdownWithCustomButton = Template.bind({})
DropdownWithCustomButton.args = {
  data: getAccountDropMenus(),
  btn: <Button text='Custom button' onClick={() => {}}  />,
  isFullWidth: true,
  isDisabled: false,
}
