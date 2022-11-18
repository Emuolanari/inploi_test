import { BriefcaseIcon } from '@heroicons/react/solid'
import { Configure, Hits, Pagination, SearchBox } from 'react-instantsearch-dom'
import { JobCard } from '../src/components/JobCard'
import { useContext, useEffect } from 'react'
import { PageBackgroundContext } from './_app'
import { InstantSearchComponent } from '../src/components/InstantSearchComponent'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Jobs() {
  const router = useRouter()
  const { setBackground } = useContext(PageBackgroundContext)
  useEffect(() => {
    setBackground('bg-[#F3F4EE]')
  })

  return (
    <>
      <Head>
        <title>Inploi - Our current openings</title>
        <meta name="description" content="View our current vacancies" />
      </Head>
      <div className="flex flex-col min-h-screen">
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
          <InstantSearchComponent searchState={router.query}>
            <div className="flex flex-col sm:mx-[10%] md:mx-[15%] lg:mx-[23%] mb-9 ">
              <div className="invisible">
                <SearchBox />
              </div>
              <Hits hitComponent={JobCard} />
              <Configure hitsPerPage={10} />
              <Pagination />
            </div>
          </InstantSearchComponent>
        </div>
      </div>
    </>
  )
}
