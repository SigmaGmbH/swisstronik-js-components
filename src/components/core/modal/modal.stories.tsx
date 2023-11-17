import Modal from './modal'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    mode: {
      table: {
        defaultValue: { summary: 'vertical' }
      },
      options: ['vertical', 'horizontal'],
      control: { type: 'inline-radio' },
    },
    header: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    text: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    btnText: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const HorizontalModal = Template.bind({})
HorizontalModal.args = {
  mode: 'horizontal',
  header: 'Enable notifications',
  text: 'Get exclusive updates and gifts right at your desktop without opening your mail again and again! You can disable them anytime.',
  btnText: 'Open horizontal',
}

export const VerticalModal = Template.bind({})
VerticalModal.args = {
  mode: 'vertical',
  header: 'Enable notifications',
  text: 'Get exclusive updates and gifts right at your desktop without opening your mail again and again! You can disable them anytime.',
  btnText: 'Open vertical',
}
