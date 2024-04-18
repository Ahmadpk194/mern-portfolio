import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Intro = () => {

    const { portfolioData } = useSelector(state => state.root)
    
    const { intro } = portfolioData;
    const { firstName, lastName, welcomeText, caption, description } = intro;
    

    return (
        <div className='flex items-center sm:flex-col sm:mb-6 mob:mb-0 sm:justify-center'>
            <div className='h-[70vh] mob:h-[40vh] bg-primary flex flex-col items-start gap-4 sm:gap-4 py-32 md3:hidden'>
                <h1 className='text-gray-300 text-3xl'>{welcomeText || ''} </h1>
                <h1 className="text-6xl md:text-5xl md2:text-5xl 1100:text-4xl sm:text-3xl text-secondary font-semibold">{firstName || ''} {lastName || ''} </h1>
                <h1 className="text-5xl md:text-4xl md2:text-4xl sm:text-3xl text-gray-300 font-semibold">{caption || ''}</h1>
                <p className="text-gray-400 mt-2 md:w-5/6 w-5/6">{description || ''}</p>
                {/* <button className="border-2 border-tertiary text-white px-10 py-5 rounded-sm text-tertiary">Get Started</button> */}
                <a href={process.env.PUBLIC_URL + '/Ahmad_Resume.pdf'} download={"Ahmad_Resume.pdf"} className="flex justify-center items-center py-3 px-7 sm:py-3 sm:px-5 mt-4 sm:mt-2 rounded-md text-white border cursor-pointer text-xl sm:text-sm hover:border-primary hover:text-primary hover:bg-secondary transform active:scale-[1.04]  transition-all" >My Resume</a>
            </div>
            <div className='md3:hidden'>
                <img className='rounded-[50%] max-w-[450px] sm:max-w-[400px] w-[450px] sm:w-[400px] h-[450px] sm:h-[400px] md:max-w-[380px] md:w-[380px] md:h-[380px] md2:max-w-[350px] md2:w-[350px] md2:h-[350px] object-cover' src={process.env.PUBLIC_URL+'/myPic.jpg'} alt="myPic" />
            </div>

            {/* For mobile view */}
            <div className='hidden md3:block mt-6 mob:mt-6'>
                <img className='rounded-[50%] mt-20 mob:mt-10 max-w-[450px] md3:w-[400px] md3:h-[400px] mob:w-[320px] mob:h-[320px] object-cover' src={process.env.PUBLIC_URL+'/myPic.jpg'} alt="myPic" />
            </div>
            <div className='h-[45vh] mob:h-[40vh] mt-10 bg-primary flex flex-col items-start gap-4 py-10 mob:py-6 hidden md3:block'>
                <h1 className='text-gray-300 text-3xl'>{welcomeText || ''} </h1>
                <h1 className="text-6xl md:text-5xl md2:text-5xl sm:text-4xl mob:text-3xl text-secondary font-semibold">{firstName || ''} {lastName || ''} </h1>
                <h1 className="text-5xl mob:text-2xl mt-4 mob:mt-1 md:text-4xl md2:text-4xl sm:text-3xl text-gray-300 font-semibold">{caption || ''}</h1>
                <p className="text-gray-400 mt-2 mb-10 sm:mb-8 md:w-5/6 w-2/3 sm:w-full mob:w-full">{description || ''}</p>
                {/* <button className="border-2 border-tertiary text-white px-10 py-5 rounded-sm text-tertiary">Get Started</button> */}
                <a href={process.env.PUBLIC_URL + '/Ahmad_Resume.pdf'} download={"Ahmad_Resume.pdf"} className=" md3:py-3 md3:px-5 mt-20 mob:mt-10 rounded-md text-white border cursor-pointer hover:border-primary hover:text-primary hover:bg-secondary transform active:scale-[1.04]  transition-all" >My Resume</a>
            </div>
        </div>
    )
}

export default Intro