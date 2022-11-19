import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
interface Props {
  children: React.ReactNode
  onSearchStateChange?: (state: any) => void
  createURL?: (state: any) => string
  searchState?: any
}

export const InstantSearchComponent: React.FC<Props> = ({
  children,
  createURL,
  onSearchStateChange,
  searchState,
}) => {
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID ?? '',
    process.env.ALGOLIA_API_KEY ?? ''
  )

  return (
    <InstantSearch
      indexName={process.env.ALGOLIA_INDEX_NAME ?? 'development_jobs_index'}
      refresh={true}
      searchClient={searchClient}
      searchState={searchState}
      createURL={createURL}
      onSearchStateChange={onSearchStateChange}
    >
      {/* Widgets */}
      {children}
    </InstantSearch>
  )
}
