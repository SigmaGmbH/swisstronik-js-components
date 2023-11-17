import Tooltip from './tooltip'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      options: [
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
      ],
      table: {
        defaultValue: { summary: 'auto' }
      },
      control: { type: 'inline-radio' },
    },
    icon: {
      options: ['info', 'clock', 'bell', 'chevron'], //todo import of array
      table: {
        defaultValue: { summary: 'undefined' }
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
    header: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    primaryBtnText: {
      control: { type: 'text' },
    },
    secondaryBtnText: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className='w-80'>
    <Tooltip {...args} />
  </div>
)

export const Regular = Template.bind({})
Regular.args = {
  hoverElement: <button>Hover</button>,
  position: 'auto',
  header: 'Title using (H5)',
  description: `A seed phrase is a set of twelve words that contains all the information about your wallet, including your funds. It's like a secret code used to access your entire wallet.
    You must keep your seed phrase secret and safe. If someone gets your seed phrase, they'll gain control over your accounts.
    Save it in a place where only you can access it. If you lose it, not even Cryptooly can help you recover it.`,
}
