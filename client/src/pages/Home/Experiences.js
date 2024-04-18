import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Experiences = () => {

    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const { portfolioData } = useSelector(state => state.root)

    const { experience: experiences } = portfolioData;


    return (
        <div className='mt-28 mob:mt-16'>
            <SectionTitle title="Experience" />

            <div className="flex py-4 mob:py-2 gap-12 mob:gap-10 sm:flex-col">
                <div className={`flex flex-col gap-10 mob:gap-2 border-l-2 border-[#14655282] w-1/3 sm:flex-row sm:items-center sm:overflow-x-scroll sm:w-full `}>
                    {
                        experiences && experiences.map((expreince, index) => (
                            <div key={index} className='cursor-pointer' onClick={() => (
                                setSelectedItemIndex(index)
                            )}>
                                <h1 className={`text-xl px-6 mob:w-40 sm:w-64 mob:text-[14px] mob:px-4 ${selectedItemIndex === index ? ' text-tertiary border-tertiary border-l-4 ml-[-3px] bg-[#14745d3f] py-3 sm:w-64' : 'text-gray-200'}`}> {expreince.period} </h1>
                            </div>
                        ))
                    }
                </div>

                <div className='flex flex-col w-full gap-3 mob:gap-2 bg-primary-300 p-5 rounded'>
                    <h1 className="text-secondary text-2xl mob:text-xl">{experiences && experiences[selectedItemIndex].title} </h1>
                    <div >
                        <h1 className="text-tertiary text-2xl mob:text-lg"> <span className='bg-[#253258f4] text-xl mob:text-lg rounded px-2 py-1 text-gray-300'>Company</span> {experiences[selectedItemIndex].company} </h1>
                        {experiences && experiences[selectedItemIndex]?.reference && <div className='flex flex-wrap overflow-hidden'>
                            <span className='text-gray-500 text-sm block mt-2'>Reference &nbsp;</span> <a href={experiences[selectedItemIndex].reference} className='text-gray-500 text-sm mt-2 underline italic' target='_blank'>{experiences[selectedItemIndex].reference}</a>
                        </div>}
                    </div>

                    <div className='text-gray-300 mt-2'>
                        {experiences && experiences[selectedItemIndex]?.description?.split('~')?.map((item, i) => (
                            item?.length > 0 && <p key={i}>- {item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences