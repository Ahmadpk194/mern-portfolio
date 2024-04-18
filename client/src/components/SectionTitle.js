import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex gap-4 items-center py-10 mob:py-6'>
        <div className='w-[5%] h-[1px] bg-tertiary'>

        </div>
        <h1 className="text-2xl text-secondary font-semibold">{title}</h1>
    </div>
  )
}

export default SectionTitle