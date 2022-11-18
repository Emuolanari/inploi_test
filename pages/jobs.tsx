import { BriefcaseIcon } from '@heroicons/react/solid'
import { Hits, InstantSearch } from 'react-instantsearch-dom'
import { JobCard } from '../src/components/JobCard'
import algoliasearch from 'algoliasearch/lite'

export default function Jobs() {
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID ?? '',
    process.env.ALGOLIA_API_KEY ?? ''
  )
  return (
    <div className="bg-[#F3F4EE] flex flex-col min-h-screen">
      <div>
        <div className="flex flex-col items-center mt-5">
          <div className="gap-4 flex">
            <h1 className="font-bold text-2xl md:text-4xl">Job Openings</h1>
            <BriefcaseIcon className="w-10 h-10" fill="#92705A" />
          </div>
          <p className="flex text-center w-[55%] md:mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
        </div>
        <div className="flex flex-col flex-auto justify-center items-center mt-5 mx-11">
          {/* {jobs.map((job) => (
            <div className="mb-5 w-[100%] md:w-[70%]" key={job.id}>
              <JobCard
                title={job.title}
                location={job.location}
                description={job.description}
              />
            </div>
          ))} */}
          <InstantSearch
            indexName={
              process.env.ALGOLIA_INDEX_NAME ?? 'development_jobs_index'
            }
            refresh={true}
            searchClient={searchClient}
          >
            {/* Widgets */}
            <div className="flex flex-col m-6 sm:mx-[10%] md:mx-[15%] lg:mx-[25%] ">
              <Hits hitComponent={JobCard} />
            </div>
          </InstantSearch>
        </div>
      </div>
    </div>
  )
}
