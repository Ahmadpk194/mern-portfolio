import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'

const Courses = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)

    const { portfolioData } = useSelector(state => state.root)

    const { courses } = portfolioData;


    return (
        <div className='mt-28 mob:mt-20 w-full '>
            <SectionTitle title="Courses" />

            <div className="flex py-4 gap-12 mob:gap-10 mob:py-2 sm:flex-col">
                <div className={`flex flex-col gap-10 mob:gap-2 border-l-2 border-[#14655282] w-1/4 sm:flex-row sm:items-center sm:overflow-x-scroll sm:w-full`}>
                    {
                        courses && courses.map((course, index) => (
                            <div key={index} className='cursor-pointer' onClick={() => (
                                setSelectedItemIndex(index)
                            )}>
                                <h1 className={`text-xl px-6 mob:px-4 sm:px-4 w-50 sm:w-52 sm:text-lg mob:text-[16px] ${selectedItemIndex === index ? ' text-tertiary sm:w-52 border-tertiary border-l-4 ml-[-3px] bg-[#14745d3f] py-3 sm:w-40 mob:w-48' : 'text-gray-100'}`}> {course.title} </h1>
                            </div>
                        ))
                    }
                </div>

                <div className="flex items-center px-10 sm:px-4 mob:px-3 justify-center gap-8 sm:flex-col bg-primary-300 p-4 rounded w-full md3:w-full 1100:flex-col">
                    <div className='flex flex-col gap-6 mob:gap-3 w-full'>
                        <div className='flex flex-col gap-4 mob:gap-2'>
                            <h1 className="text-secondary text-2xl">{courses && courses[selectedItemIndex].title}</h1>
                            {/* <p className="text-white">{courses[selectedItemIndex].description}</p> */}

                            <div className='text-gray-300'>
                                {courses && courses[selectedItemIndex]?.description?.split('~')?.map((item, i) => (
                                    item?.length > 0 && <p key={i}>- {item}</p>
                                ))}
                            </div>
                        </div>

                        <div>
                            {courses && courses[selectedItemIndex]?.link && <div className='flex items-center flex-wrap overflow-hidden mt-2'>
                                <span className='text-gray-400 text-lg block'>Reference &nbsp;</span> <a href={courses[selectedItemIndex].link} className='text-gray-500 text-sm underline italic' target='_blank'>{courses[selectedItemIndex].link}</a>
                            </div>}
                        </div>
                    </div>
                    <img src={courses && courses[selectedItemIndex].image} alt="courseImg" className='h-60 w-80 rounded mob:mb-6 sm:mb-10' />

                </div>
            </div>
        </div>
    )
}

export default Courses