import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-40'>
        <div className="flex gap-5 sm:gap-3 text-7xl sm:text-6xl font-semibold">
            <h1 className="text-secondary a">A</h1>
            <h1 className="text-white k">K</h1>
            <h1 className="text-tertiary j">J</h1>
        </div>
    </div>
  )
}

export default Loader