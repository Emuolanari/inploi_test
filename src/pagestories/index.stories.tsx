import Home from '../../pages/index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Pages/Home',
  component: Home,
  controls: {
    hideNoControlsWarning: true,
  },
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => <Home />

export const Default = Template.bind({})
Default.parameters = {
  controls: { hideNoControlsWarning: true },
}
