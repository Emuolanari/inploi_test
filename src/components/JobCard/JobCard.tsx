import { ChevronRightIcon, PlusIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { startCaseWords } from '../../../lib/startCaseWords'

interface Props {
  hit: any
}
export const JobCard: React.FC<Props> = ({ hit }) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false)

  return (
    <div
      className="flex flex-col rounded-lg shadow-sm shadow-gray-400
       bg-white mx-2 px-6 text-xs sm:text-sm md:text-base my-3"
      onClick={() => {
        if (!descriptionOpen) setDescriptionOpen(true)
      }}
    >
      <div
        className={`flex justify-between py-6 ${
          descriptionOpen ? '' : 'cursor-pointer'
        }`}
      >
        <div className=" text-base font-bold">{startCaseWords(hit.title)}</div>
        <PlusIcon
          className={`w-5 h-5 cursor-pointer ${descriptionOpen && 'rotate-45'}`}
          onClick={() => setDescriptionOpen(false)}
        />
      </div>
      <hr />
      <div className={`${descriptionOpen ? 'transition-[height]' : 'hidden'}`}>
        <div className="py-6">
          <div>{ReactHtmlParser(hit?.description)}</div>
          <div className="flex justify-between mt-5">
            <div className="text-gray-400">{hit?.town}</div>
            <a
              className="flex gap-3 bg-[#1c2970] hover:bg-[#111840] items-center text-white px-3 md:px-6 py-2 text-xs sm:text-sm rounded-md"
              href={hit?.apply_url}
              target="_blank"
              rel="noreferrer"
            >
              Apply now <ChevronRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
