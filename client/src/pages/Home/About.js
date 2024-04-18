import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

const About = () => {

    const { portfolioData } = useSelector(state => state.root)

    const {about} = portfolioData;
    const {skills, description1, description2} = about;
    
    return (
        <div className='mob:mt-44'>
            <SectionTitle title="About " />

            <div className="flex w-full items-center justify-around sm:flex-col border  border-gray-700 mb-4 mob:mb-4 rounded">
                <div className='h-[55vh] mob:h-[45vh] md:h-[50vh] w-1/2 md3:w-full mob:w-full flex items-center justify-between pl-10 sm:pl-0 mob:pl-0 sm:justify-center overflow-hidden'>
                    {/* <lottie-player src={lottieUrl} background="transparent" speed="1" loop autoplay direction="1" mode="normal"></lottie-player> */}
                    <img src={process.env.PUBLIC_URL+'/profPic.jpeg'} alt="profPic" className='w-[400px] h-[400px] sm:h-[400px] sm:w-[400px] md:h-[350px] md:w-[350px] mob:w-[300px] mob:h-[300px]  object-contain  rounded-md  brightness-75 transform hover:scale-[1.08] transition-all duration-500 ' />
                </div>
                <div className="flex flex-col gap-4 mob:gap-3 p-4 w-3/4 sm:w-full">
                    <p className="text-gray-200 text-lg">
                        {description1}
                    </p>
                    <p className="text-gray-200 text-lg">
                       {description2}
                    </p>
                </div>
            </div>

            {/* About Section */}
            <div>
                <h1 className="text-secondary text-2xl">Here are Technologies I've been working with recently</h1>
                <div className='flex flex-wrap gap-3 sm:gap-3 mob:gap-2 mt-4'>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className='bg-primary-200 px-4 py-2 mob:px-3 mob:py-1 rounded-sm transform hover:scale-[1.07] transition-all duration-75'>
                                <h1 className="text-gray-300 text-lg">{skill}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About