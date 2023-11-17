import List from './list'
import Avatar from '../avatar/avatar'
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
]

const stackedLists = [
  { fullname: 'Kristin Watson', img: imgs, email: 'kristin.watson@example.com' },
  { fullname: 'Courtney Henry', img: imgs, email: 'courtney.harry@example.com' },
  { fullname: 'Bessie Cooper', img: imgs, email: 'bessie.cooper@example.com' },
  { fullname: 'Theresa Webb', img: imgs, email: 'theresa.webb@example.com' },
]

const singleLists = [
  { fullname: 'Kristin Watson', img: [imgs[0]], email: 'kristin.watson@example.com' },
  { fullname: 'Courtney Henry', img: [imgs[1]], email: 'courtney.harry@example.com' },
  { fullname: 'Bessie Cooper', img: [imgs[2]], email: 'bessie.cooper@example.com' },
  { fullname: 'Theresa Webb', img: [imgs[3]], email: 'theresa.webb@example.com' },
]

export default {
  title: 'List',
  component: List,
  subcomponents: { Avatar },
  argTypes: {
    items: {
      table: {
        defaultValue: { summary: '[]' }
      },
      options: stackedLists,
    },
  },
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <Avatar />
  </List>
)



export const Stacked = Template.bind({})
Stacked.args = {
  items: stackedLists,
}

export const Default = Template.bind({})
Default.args = {
  items: singleLists,
}
