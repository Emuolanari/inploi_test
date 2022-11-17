import { PlusSmIcon } from '@heroicons/react/solid'

interface Props {
  description: string
  location: string
  title: string
}

export const JobCard: React.FC<Props> = ({ description, location, title }) => {
  return (
    <div className="flex flex-col rounded-md bg-white mx-6">
      <div className="flex justify-between">
        <p className=" text-base font-bold">{title}</p>
        <PlusSmIcon className="w-5 h-5" />
      </div>
      <hr />
      <div className="flex flex-col">
        <p>{description}</p>
        <div className="flex justify-between mt-5">
          <p className="text-gray-200">{location}</p>
          <button className="bg-[#111840]">Apply now</button>
        </div>
      </div>
    </div>
  )
}
