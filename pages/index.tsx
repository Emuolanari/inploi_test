import { SearchBox } from 'react-instantsearch-dom'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PageBackgroundContext } from './_app'
import Head from 'next/head'
import { InstantSearchComponent } from '../src/components/InstantSearchComponent/InstantSearchComponent'

export default function Home() {
  const { setBackground } = useContext(PageBackgroundContext)
  useEffect(() => {
    setBackground(
      'bg-gradient-to-r from-primary-100 via-primary-200 to-[#F6f9EB]'
    )
  })
  const [searchTerm, setSearchTerm] = useState<string>()

  const router = useRouter()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (searchTerm) {
      router.push({ pathname: '/jobs', query: { query: searchTerm, page: 1 } })
    }
  }

  return (
    <>
      <Head>
        <title>Paradigmo - Find a job you love</title>
        <meta
          name="description"
          content="We help thousands of individuals find suitable jobs"
        />
      </Head>
      <div className="flex flex-col flex-auto justify-center items-center mt-11">
        <p className="text-4xl font-bold">Find a job you love &#129782;</p>
        <p className="text-4xl font-bold">with Paradigmo.</p>
        <div className="mt-4 w-full">
          <InstantSearchComponent>
            <div className="flex flex-col m-6 sm:mx-[10%] md:mx-[15%] lg:mx-[25%] ">
              <SearchBox
                translations={{
                  placeholder: 'Search jobs by keyword or location',
                }}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                onSubmit={(e) => handleSubmit(e)}
              />
            </div>
          </InstantSearchComponent>
        </div>
      </div>
    </>
  )
}
