import { PlusSmIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useState } from 'react'

interface Props {
  description: string
  location: string
  title: string
}

export const JobCard: React.FC<Props> = ({ description, location, title }) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false)
  return (
    <div className="flex flex-col rounded-md bg-white px-6">
      <div className="flex justify-between py-6">
        <p className=" text-base font-bold">{title}</p>
        <PlusSmIcon className="w-8 h-8" />
      </div>
      <hr />
      <div className="flex flex-col py-6">
        <p>{description}</p>
        <div className="flex justify-between mt-5">
          <p className="text-gray-400">{location}</p>
          <button className="flex gap-3 bg-[#111840] text-white px-6 py-2 rounded-md">
            <span>Apply now</span> <ChevronRightIcon className="w-5 h-5 mt-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
