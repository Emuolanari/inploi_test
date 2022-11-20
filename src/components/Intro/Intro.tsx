import React from 'react'
import clsx from 'clsx'

interface Props {
  title1: string
  title2: string
  fontSize: 'regular' | 'semi-bold' | 'bold' | 'extra'
}
export const Intro: React.FC<Props> = ({ title1, title2, fontSize }) => {
  return (
    <div
      className={clsx(
        'text-center text-xl sm:text-4xl mx-[10%] md:mx-auto',
        fontSize === 'regular' && 'font-normal',
        fontSize === 'bold' && 'font-bold',
        fontSize === 'semi-bold' && 'font-semibold',
        fontSize === 'extra' && 'font-extrabold'
      )}
    >
      <p>{title1}</p>
      <p>{title2}</p>
    </div>
  )
}
