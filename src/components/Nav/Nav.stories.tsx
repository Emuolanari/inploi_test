import Nav from './Nav'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Nav>

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />

export const TopNav = Template.bind({})
