import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import qs from 'qs'
import { useEffect, useState } from 'react'
interface Props {
  children: React.ReactNode
  onSearchStateChange?: (state: any) => void
  createURL?: (state: any) => string
}

export const InstantSearchComponent: React.FC<Props> = ({
  children,
  createURL,
  onSearchStateChange,
}) => {
  const [location, setLocation] = useState<string>('')
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID ?? '',
    process.env.ALGOLIA_API_KEY ?? ''
  )
  const urlToSearchState = () => {
    if (typeof window !== 'undefined') qs.parse(window.location.search.slice(1))
  }

  useEffect(() => {
    setLocation(window.location.search)
  }, [location])
  return (
    <InstantSearch
      indexName={process.env.ALGOLIA_INDEX_NAME ?? 'development_jobs_index'}
      refresh={true}
      searchClient={searchClient}
      searchState={urlToSearchState()}
      createURL={createURL}
      onSearchStateChange={onSearchStateChange}
    >
      {/* Widgets */}
      {children}
    </InstantSearch>
  )
}
