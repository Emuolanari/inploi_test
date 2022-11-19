import { JobCard } from '../../components/JobCard'
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
    description: 'Coding is fun. You should do this all day',
    apply_url: 'google.com',
    town: 'London',
  },
}
