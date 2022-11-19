import { InstantSearchComponent } from './InstantSearchComponent'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Hits, SearchBox } from 'react-instantsearch-dom'
import { JobCard } from '../JobCard/JobCard'

export default {
  title: 'Components/InstantSearchComponent',
  component: InstantSearchComponent,
} as ComponentMeta<typeof InstantSearchComponent>

const Template: ComponentStory<typeof InstantSearchComponent> = (args) => (
  <InstantSearchComponent {...args} />
)

export const DefaultInstantSearchComponent = Template.bind({})
DefaultInstantSearchComponent.args = {
  children: (
    <>
      <SearchBox />
      <Hits />
    </>
  ),
}
export const InstantSearchComponentsWithCards = Template.bind({})
InstantSearchComponentsWithCards.args = {
  children: (
    <>
      <SearchBox />
      <Hits hitComponent={JobCard} />
    </>
  ),
}
