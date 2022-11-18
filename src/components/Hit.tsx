import Image from 'next/image'

interface Props {
  hit: any
}

const Hit: React.FC<Props> = ({ hit }) => {
  // console.log(hit)

  return (
    <div className="mt-2">
      <div className="flex flex-col rounded-md bg-white py-6 px-6 max-w-2xl ">
        <div className="flex justify-between mb-2">
          {/* couldn't use next image because of various domains */}
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <img
              src={hit.company_logo}
              alt="company logo"
              height={50}
              width={50}
            />
            <p>{hit.company_name}</p>
          </div>
          <a
            href={hit.apply_url}
            target="_blank"
            className="text-blue-400 hover:text-blue-600 justify-self-end"
          >
            click here to apply
          </a>
        </div>
        <p className="mb-2">
          <span className="font-bold">Job description:</span> {hit.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between">
          <p>
            {' '}
            <span className="font-bold">Location: </span>
            {hit.town}
          </p>
          <p>
            <span className="font-bold">Job title:</span>{' '}
            {hit.title.replace('_', '-')}
          </p>
        </div>
        <div className="flex justify-between flex-col sm:flex-row">
          <p>
            <span className="font-bold">Pay:</span> {hit.pay_currency}
            {hit.pay_min} to {hit.pay_currency}
            {hit.pay_max} {hit.pay_type}
          </p>
          <p>
            <span className="font-bold">Employment Type:</span>{' '}
            {hit.employment_type}
          </p>
        </div>
      </div>
      <hr className="my-2 h-px bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  )
}

export default Hit
