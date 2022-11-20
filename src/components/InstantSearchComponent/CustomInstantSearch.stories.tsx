import { CustomInstantSearch } from './CustomInstantSearch'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Hits, SearchBox } from 'react-instantsearch-dom'
import { JobCard } from '../JobCard/JobCard'

export default {
  title: 'Components/CustomInstantSearch',
  component: CustomInstantSearch,
} as ComponentMeta<typeof CustomInstantSearch>

const Template: ComponentStory<typeof CustomInstantSearch> = (args) => (
  <CustomInstantSearch {...args} />
)

export const DefaultCustomInstantSearch = Template.bind({})
DefaultCustomInstantSearch.args = {
  children: (
    <>
      <SearchBox />
      <Hits />
    </>
  ),
}
export const CustomInstantSearchsWithCards = Template.bind({})
CustomInstantSearchsWithCards.args = {
  children: (
    <>
      <SearchBox />
      <Hits hitComponent={JobCard} />
    </>
  ),
}
