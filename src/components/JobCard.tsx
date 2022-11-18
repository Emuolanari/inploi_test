import { ChevronRightIcon, PlusIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'


export const JobCard: React.FC<any> = ({ hit }) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false)

  return (
    <div
      className="flex flex-col rounded-lg shadow-sm shadow-gray-400 bg-white px-6 text-xs sm:text-sm md:text-base"
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
      {/* <div className={`${descriptionOpen ? 'transition' : 'hidden'}`}> */}
      {/* <div
        className={`transition-all  ${
          descriptionOpen
            ? 'duration-500 opacity-100 max-h-[1000px]'
            : 'duration-200 opacity-0 max-h-0'
        }`}
      > */}
      <div
        className={`transition-opacity transition-[height] ${
          descriptionOpen
            ? 'duration-500 opacity-100 h-auto scale-y-100'
            : 'duration-500 opacity-0 h-0 scale-y-0'
        }`}
      >
        <hr />
        <div className="flex flex-col py-6">
          <p>{hit?.description}</p>
          <div className="flex justify-between mt-5">
            <p className="text-gray-400">{hit?.town}</p>
            <button className="flex gap-3 bg-[#111840] items-center text-white px-3 md:px-6 py-2 rounded-md">
              <span className="text-sm">Apply now</span>{' '}
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
