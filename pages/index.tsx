import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

export default function Home() {
  const searchClient = algoliasearch(
    process.env.APP_ID ?? '',
    process.env.API_KEY ?? ''
  )
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-primary-100 via-primary-200 to-[#F6f9EB]">
      <div className="relative">
        <button className="absolute bg-primary text-white text-sm py-2 px-6 rounded-md top-6 right-7">
          Login
        </button>
      </div>
      <div className="flex flex-col flex-auto justify-center items-center mt-5">
        <p className="text-4xl font-bold">Find a job you love 🫶</p>
        <p className="text-4xl font-bold">with Paradigmo.</p>
        <InstantSearch
          indexName={`${process.env.INDEX_NAME} ?? development_jobs_index`}
          refresh={true}
          searchClient={searchClient}
        >
          {/* Widgets */}
          <div>
            <SearchBox
              translations={{
                placeholder: 'Search jobs by keyword or location',
              }}
            />
            <Hits />
          </div>
        </InstantSearch>
      </div>
    </div>
  )
}
