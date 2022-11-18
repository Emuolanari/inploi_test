import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import { useRouter } from 'next/router'

interface Props {
  children: React.ReactNode
  searchState?: any
}

export const InstantSearchComponent: React.FC<Props> = ({
  children,
  searchState,
}) => {
  const router = useRouter()
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID ?? '',
    process.env.ALGOLIA_API_KEY ?? ''
  )

  const searchStateToUrl = (searchState: any) =>
    searchState ? `${router.pathname}?${router.query}` : ''

  const onSearchStateChange = (searchState: any) => {
    const href = searchStateToUrl(searchState)
    if (router.pathname == '/jobs') router.push(href, href, { shallow: true })
  }

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
