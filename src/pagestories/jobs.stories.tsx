import Jobs from '../../pages/jobs'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Pages/Jobs',
  component: Jobs,
  controls: {
    hideNoControlsWarning: true,
  },
} as ComponentMeta<typeof Jobs>

const Template: ComponentStory<typeof Jobs> = () => <Jobs />

export const Default = Template.bind({})
Default.parameters = {
  controls: { hideNoControlsWarning: true },
}
