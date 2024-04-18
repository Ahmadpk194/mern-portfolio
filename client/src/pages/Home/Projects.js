import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Projects = () => {

    const [selectedItemIndex, setSelectedItemIndex] = useState(0)


    const { projects } = useSelector(state => state.root.portfolioData);

    return (
        <div className='mt-28 mob:mt-20'>
            <SectionTitle title="Projects" />

            <div className="flex py-4 gap-12 mob:gap-10 sm:flex-col">
                <div className={`flex flex-col sm:items-center gap-10 mob:gap-2 mob:items-center border-l-2 border-[#14655282] w-1/5 sm:flex-row sm:overflow-x-scroll sm:w-full mob:text-sm`}>
                    {
                        projects && projects.map((project, index) => (
                            <div key={index} className='cursor-pointer' onClick={() => (
                                setSelectedItemIndex(index)
                            )}>
                                <h1 className={`text-xl px-6 mob:w-48 sm:w-56 ${selectedItemIndex === index ? ' text-tertiary border-tertiary border-l-4 ml-[-3px] bg-[#14745d3f] py-3 sm:w-44 mob:w-48' : 'text-white'}`}> {project.title} </h1>
                            </div>
                        ))
                    }
                </div>

                <div className="flex items-center justify-between gap-10 mob:gap-4 px-10 sm:px-6 sm:mt-10 w-full md3:flex-col bg-primary-300 mob:px-4 mob:py-10 rounded 1100:flex-col 1100:px-4 1100:py-10">
                    <img src={projects[selectedItemIndex].image} alt="projectImg" className='h-70 w-72 ml-4 mob:ml-0 mob:mb-4 rounded' />
                    <div className='flex flex-col gap-4 w-4/6 py-3 mob:py-0 mob:w-full sm:w-full'>
                        <div className='flex flex-col gap-3  mob:mt-2'>
                            <h1 className="text-secondary text-2xl">{projects[selectedItemIndex].title}</h1>
                            <div className='text-gray-300'>
                                {projects && projects[selectedItemIndex]?.description?.split('~')?.map((item, i) => (
                                    item?.length > 0 && <p key={i}>- {item}</p>
                                ))}
                            </div>
                            <div className='flex md2:flex-col md2:items-start gap-4 md2:gap-1 mob:gap-2 items-center'>
                                <span className='px-2 mob:px-1 mob:py-2 md2:text-[17px] sm:text-[17px]  mob:text-[17px] text-white text-xl py-2 rounded bg-[#28305fae]'>Technologies</span><div>
                                    {projects && projects[selectedItemIndex]?.technologies[0]?.split(',')?.map((tech, i) => (
                                        <span key={i} className='text-[17px] md2:text-[15px] sm:text-[16px]  mob:text-[15px] text-white'>{tech} <span className='text-gray-600'>|</span> </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            {projects && projects[selectedItemIndex]?.link && <div className='flex flex-wrap items-center overflow-hidden mt-2'>
                                <span className='text-gray-400 text-lg block'>Demo &nbsp;</span> <a href={projects[selectedItemIndex].link} className='text-gray-500 text-sm underline italic' target='_blank'>{projects[selectedItemIndex].link}</a>
                            </div>}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects

