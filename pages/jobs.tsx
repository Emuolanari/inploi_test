import { BriefcaseIcon } from '@heroicons/react/solid'
import { jobs } from '../data/jobs'
import { JobCard } from '../src/components/JobCard'

export default function Jobs() {
  return (
    <div className="bg-[#F3F4EE] flex flex-col min-h-screen">
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
        {jobs.map((job) => (
          <div className="mb-5 w-[70%]">
            <JobCard
              key={job.id}
              title={job.title}
              location={job.location}
              description={job.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
