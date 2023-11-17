import Accordion from './accordion'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const accordionData = [
  {
    header: 'What is your refund policy?',
    text: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    isDisabled: false,
  },
  {
    header: 'Do you offer technical support?',
    text: 'Empty',
    isDisabled: true,
  },
  {
    header: 'Do you offer technical support?',
    text: 'Empty',
    isDisabled: false,
  },
]

export default {
  title: 'Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const ActiveAccordion = Template.bind({})
ActiveAccordion.args = {
  data: accordionData,
}


