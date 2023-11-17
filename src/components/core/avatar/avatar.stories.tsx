import Avatar from './avatar'
// Button.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

const imgs = [
  {
    src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: '',
  },
  {
    src: undefined,
    alt: '',
  },
]

export default {
  title: 'Avatar',
  component: Avatar,
  args:{
    size: 8,
    initials: undefined
  },
  argTypes: {
    size: {
      options: [6, 8, 12],
      table: {
        defaultValue: { summary: 8 }
      },
      control: { type: 'inline-radio' },
    },
    src: {
      options: imgs.map((x) => x.src),
      table: {
        defaultValue: { summary: 'undefined' }
      },
      control: { type: 'radio' },
    },
    imgs: {
      options: imgs,
      table: {
        defaultValue: { summary: 'undefined' }
      },
    },
    initials: {
      control: { type: 'text' },
      description: 'src prop should be undefined',
      table: {
        defaultValue: { summary: 'undefined' }
      },
    },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const BigSimgle = Template.bind({})
BigSimgle.args = {
  size: 12,
  src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export const MediumSingle = Template.bind({})
MediumSingle.args = {
  size: 8,
  src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export const SmallSingle = Template.bind({})
SmallSingle.args = {
  size: 6,
  src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export const BigStacked = Template.bind({})
BigStacked.args = {
  size: 12,
  imgs: imgs,
}

export const MediumStacked = Template.bind({})
MediumStacked.args = {
  size: 8,
  imgs: imgs,
}

export const SmallStacked = Template.bind({})
SmallStacked.args = {
  size: 6,
  imgs: imgs,
}

export const BigInitials = Template.bind({})
BigInitials.args = {
  size: 12,
  initials: 'Aa',
}

export const MediumInitials = Template.bind({})
MediumInitials.args = {
  size: 8,
  initials: 'Aa',
}

export const SmallInitials = Template.bind({})
SmallInitials.args = {
  size: 6,
  initials: 'Aa',
}
