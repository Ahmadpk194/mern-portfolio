import React from 'react'
import Header from '../../components/Header'

const Blogs = () => {
    return (
        <>
            <Header scrollToContact={() => console.log('')} />
            <div className='h-screen bg-primary flex py-80 sm:py-40 justify-center'>
                <h1 className="text-3xl sm:text-lg text-white">Blogs Comming soon...</h1>
            </div>

        </>
    )
}

export default Blogs