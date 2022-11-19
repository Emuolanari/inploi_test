import { ChevronRightIcon, PlusIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'

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
        <p className=" text-base font-bold">{hit?.title}</p>
        {descriptionOpen ? (
          <XIcon
            className="w-8 h-8 cursor-pointer"
            onClick={() => setDescriptionOpen(false)}
          />
        ) : (
          <PlusIcon
            className="w-8 h-8 cursor-pointer"
            onClick={() => setDescriptionOpen(true)}
          />
        )}
      </div>
      {/* come back to this to ease the description into view slowly */}
      <div className={`${descriptionOpen ? 'transition' : 'hidden'}`}>
        <hr />
        <div className="flex flex-col py-6">
          <p>{ReactHtmlParser(hit?.description)}</p>
          <div className="flex justify-between mt-5">
            <p className="text-gray-400">{hit?.town}</p>
            <a
              className="flex gap-3 bg-[#111840] items-center text-white px-3 md:px-6 py-2 text-xs sm:text-sm rounded-md"
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
