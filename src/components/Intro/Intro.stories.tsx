import { Intro } from './Intro'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/Intro',
  component: Intro,
} as ComponentMeta<typeof Intro>

const Template: ComponentStory<typeof Intro> = (args) => <Intro {...args} />

export const CurrentIntro = Template.bind({})
CurrentIntro.args = {
  title1: 'Find a job you love  🫶',
  title2: 'with Paradigmo',
  fontSize: 'bold',
}

export const SecondaryIntro = Template.bind({})
SecondaryIntro.args = {
  title1: 'The top job search platform 🧳',
  title2: 'find your next role here',
  fontSize: 'extra',
}
