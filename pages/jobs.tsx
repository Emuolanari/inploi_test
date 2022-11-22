import { BriefcaseIcon } from '@heroicons/react/solid'
import {
  Configure,
  Hits,
  Pagination,
  SearchBox,
  Stats,
} from 'react-instantsearch-dom'
import { JobCard } from '../src/components/JobCard/JobCard'
import { useContext, useEffect } from 'react'
import { PageBackgroundContext } from './_app'
import { CustomInstantSearch } from '../src/components/CustomInstantSearch/CustomInstantSearch'
import { useRouter } from 'next/router'
import Head from 'next/head'
import qs from 'qs'

export default function Jobs() {
  const router = useRouter()
  const { setBackground } = useContext(PageBackgroundContext)
  useEffect(() => {
    setBackground('bg-[#F3F4EE]')
  })

  const createURL = (state: any) => `?${qs.stringify(state)}`

  const searchStateToUrl = (state: any) => (state ? createURL(state) : '')

  const onSearchStateChange = (searchState: any) => {
    const href = searchStateToUrl(searchState)
    router.replace(href)
  }

  return (
    <>
      <Head>
        <title>Paradigmo - Current job openings</title>
        <meta name="description" content="View our current vacancies" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <div>
          <div className="flex flex-col items-center mt-5">
            <div className="gap-4 flex">
              <h1 className="font-bold text-2xl md:text-4xl">Job Openings</h1>
              <BriefcaseIcon className="w-10 h-10" fill="#92705A" />
            </div>
            <p className="text-center mt-5 max-w-[55%] text-base md:text-lg lg:text-xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
          <CustomInstantSearch
            onSearchStateChange={onSearchStateChange}
            createURL={createURL}
            searchState={router.query}
          >
            <div className="flex flex-col sm:mx-[10%] md:mx-[15%] lg:mx-[23%] mb-9 ">
              <div className="hidden">
                <SearchBox />
              </div>
              <div className="flex justify-center my-14 ">
                <Stats
                  translations={{
                    stats(nbHits) {
                      if (nbHits == 0) return 'No jobs found for this search'
                      if (nbHits == 1) return '1 job found'
                      return `${nbHits} jobs found for this search`
                    },
                  }}
                />
              </div>
              <Hits hitComponent={JobCard} />
              {/* <Configure hitsPerPage={10} /> */}
              <Pagination />
            </div>
          </CustomInstantSearch>
        </div>
      </div>
    </>
  )
}
