import DatePicker from './datePicker'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {},
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <div className='max-w-xs'>
    <DatePicker />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
