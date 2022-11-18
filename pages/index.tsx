import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
// import { hitsPerPage } from 'instantsearch.js/es/widgets';
import algoliasearch from 'algoliasearch/lite'
import Hit from '../src/components/Hit'
import Head from 'next/head'
import { JobCard } from '../src/components/JobCard'

export default function Home() {
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID ?? '',
    process.env.ALGOLIA_API_KEY ?? ''
  )
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-primary-100 via-primary-200 to-[#F6f9EB]">
        {/* using relative positioning for the sake of not copying the logo to both pages */}
        <div className="flex relative justify-end top-6 right-7">
          <button className="bg-primary text-white text-sm py-2 px-6 rounded-md">
            Login
          </button>
        </div>
        <div className="flex flex-col flex-auto justify-start items-center mt-11">
          <p className="text-4xl font-bold">Find a job you love 🫶</p>
          <p className="text-4xl font-bold">with Paradigmo.</p>
          <div className="mt-4">
            <InstantSearch
              indexName={
                process.env.ALGOLIA_INDEX_NAME ?? 'development_jobs_index'
              }
              refresh={true}
              searchClient={searchClient}
            >
              {/* Widgets */}
              <div className="mx-11 flex flex-col">
                <SearchBox
                  translations={{
                    placeholder: 'Search jobs by keyword or location',
                  }}
                />
                <Hits hitComponent={Hit} />
              </div>
            </InstantSearch>
          </div>
        </div>
      </div>
    </>
  )
}
