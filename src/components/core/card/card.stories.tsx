import Card from './card'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const Cards = [
  {
    src: 'https://images.unsplash.com/photo-1652300162135-6dc9ba079e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    text: 'Superman',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1652278987461-c8e9f61c8ff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    text: 'Superman',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1652274409558-c778d3aa3903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    text: 'Superman',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Superman',
    alt: '',
  },
]

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    type: {
      options: ['default', 'uncommon', 'rare', 'ultra-rare'],
      table: {
        defaultValue: { summary: 'default' }
      },
      control: { type: 'inline-radio' },
    },
    img: {
      options: Cards.map((x) => x.src),
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'inline-radio' },
    },
    text: {
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'text' },
    },
    price: {
      table: {
        defaultValue: { summary: '0' }
      },
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  img: Cards[0].src,
  text: 'Superman',
  price: 10,
}

export const Uncommon = Template.bind({})
Uncommon.args = {
  type: 'uncommon',
  img: Cards[1].src,
  text: 'uncommon',
  price: 20,
}

export const Rare = Template.bind({})
Rare.args = {
  type: 'rare',
  img: Cards[2].src,
  text: 'rare',
  price: 30,
}

export const Ultrarare = Template.bind({})
Ultrarare.args = {
  type: 'ultra-rare',
  img: Cards[3].src,
  text: 'ultra-rare',
  price: 40,
}
