import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

interface Props {
  children: React.ReactNode
  searchState?: any
  onSearchStateChange?: (searchState: any) => void
}

export const InstantSearchComponent: React.FC<Props> = ({
  children,
  searchState,
  onSearchStateChange,
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
      onSearchStateChange={onSearchStateChange}
    >
      {/* Widgets */}
      {children}
    </InstantSearch>
  )
}
