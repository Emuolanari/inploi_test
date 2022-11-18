import { BriefcaseIcon } from '@heroicons/react/solid'
import { Hits, SearchBox } from 'react-instantsearch-dom'
import { JobCard } from '../src/components/JobCard'
import { useContext, useEffect } from 'react'
import { PageBackgroundContext } from './_app'
import { InstantSearchComponent } from '../src/components/InstantSearchComponent'
import { useRouter } from 'next/router'
import qs from 'qs'

export default function Jobs() {
  const router = useRouter()
  const urlToSearchState = () => {
    if (typeof window !== 'undefined') {
      const pathnameMatches = window.location.pathname.match(/jobs\/(.*?)\/?$/)
      const { query } = qs.parse(window.location.search.slice(1))
      return {
        query: decodeURIComponent(query as string),
      }
    }
  }

  const searchStateToUrl = (searchState: any) =>
    searchState
      ? `${window.location.pathname}?${qs.stringify(searchState)}`
      : ''
  const { setBackground } = useContext(PageBackgroundContext)
  useEffect(() => {
    setBackground('bg-[#F3F4EE]')
  })

  const onSearchStateChange = (searchState: any) => {
    const href = searchStateToUrl(searchState)
    router.push(href, href, { shallow: true })
    // console.log('hred', href)
    // console.log('searchState', searchState)

    // Router.push(href, href, {
    //   shallow: true,
    // })
  }

  return (
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
        <InstantSearchComponent
          searchState={urlToSearchState()}
          onSearchStateChange={onSearchStateChange}
        >
          <div className="flex flex-col sm:mx-[10%] md:mx-[15%] lg:mx-[25%] ">
            <div className="invisible">
              <SearchBox
                translations={{
                  placeholder: 'Search jobs by keyword or location',
                }}
              />
            </div>
            <Hits hitComponent={JobCard} />
          </div>
        </InstantSearchComponent>
      </div>
    </div>
  )
}
