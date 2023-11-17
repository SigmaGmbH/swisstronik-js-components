import Progress from './progress'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    type: {
      options: ['linear', 'circular'],
      table: {
        defaultValue: { summary: 'linear' }
      },
      control: { type: 'inline-radio' },
    },
    percent: {
      table: {
        defaultValue: { summary: '0' }
      },
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => <div style={{width: '100%', height: '80px'}}>
  <Progress {...args} />
</div>

export const Linear = Template.bind({})
Linear.args = {
  type: 'linear',
  percent: 65,
}

export const Circular = Template.bind({})
Circular.args = {
  type: 'circular',
  percent: 35,
}
