import { JobCard } from './JobCard'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/JobCard',
  component: JobCard,
} as ComponentMeta<typeof JobCard>

const Template: ComponentStory<typeof JobCard> = (args) => <JobCard {...args} />

export const DefaultJobCard = Template.bind({})
DefaultJobCard.args = {
  hit: {
    title: 'Software Engineer',
    description:
      'We are looking for an experienced Front-End Developer to join our growing team. Working as part of a talented team, you will be helping our varied clients realise their goals and ambitions through a wide range of digital projects',
    apply_url: 'google.com',
    town: 'London',
  },
}
