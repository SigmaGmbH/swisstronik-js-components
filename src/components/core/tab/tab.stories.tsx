import Tabs from './tabs'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const tabsData = [
  { tabName: 'Tab 1', contentText: 'Content 1' },
  { tabName: 'Tab 2', contentText: 'Content 2' },
  { tabName: 'Tab 3', contentText: 'Content 3' },
]

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const TabsDefault = Template.bind({})
TabsDefault.args = {
  data: tabsData,
}
