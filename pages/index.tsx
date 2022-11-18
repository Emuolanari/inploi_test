import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
// import { hitsPerPage } from 'instantsearch.js/es/widgets';
import algoliasearch from 'algoliasearch/lite'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID ?? '',
    process.env.ALGOLIA_API_KEY ?? ''
  )
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/jobs',
      query: { searchTerm },
    })
  }

  return (
    <div className="flex flex-col flex-auto justify-center items-center mt-11">
      <p className="text-4xl font-bold">Find a job you love 🫶</p>
      <p className="text-4xl font-bold">with Paradigmo.</p>
      <div className="mt-4 w-full">
        <InstantSearch
          indexName={process.env.ALGOLIA_INDEX_NAME ?? 'development_jobs_index'}
          refresh={true}
          searchClient={searchClient}
        >
          {/* Widgets */}
          <div className="flex flex-col m-6 sm:mx-[10%] md:mx-[15%] lg:mx-[25%] ">
            <SearchBox
              translations={{
                placeholder: 'Search jobs by keyword or location',
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
              onSubmit={(e) => handleSubmit(e)}
            />
          </div>
        </InstantSearch>
      </div>
    </div>
  )
}
