import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

interface Props {
  children: React.ReactNode
}

export const InstantSearchComponent: React.FC<Props> = ({ children }) => {
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID ?? '',
    process.env.ALGOLIA_API_KEY ?? ''
  )
  return (
    <InstantSearch
      indexName={process.env.ALGOLIA_INDEX_NAME ?? 'development_jobs_index'}
      refresh={true}
      searchClient={searchClient}
    >
      {/* Widgets */}
      {children}
    </InstantSearch>
  )
}
