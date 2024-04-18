import React from 'react'
import { useSelector } from 'react-redux';

const LeftSide = () => {

    const {portfolioData} = useSelector(state => state.root);

    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static sm:pb-4'>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col sm:flex-row gap-2">
                    <a href={portfolioData.socials.github} target="_blank"><i className="ri-github-line text-gray-400 text-3xl hover:text-secondary hover:text-[33px] cursor-pointer transition-all"></i></a>
                    <a href={portfolioData.socials.linkedin} target="_blank"> <i className="ri-linkedin-box-line text-gray-400 text-3xl hover:text-secondary hover:text-[33px] cursor-pointer transition-all"></i></a>
                    <a href={portfolioData.socials.twitter} target="_blank"> <i className="ri-twitter-line text-gray-400 text-3xl hover:text-secondary hover:text-[33px] cursor-pointer transition-all"></i></a>
                    <a href={portfolioData.socials.facebook} target="_blank"> <i className="ri-facebook-circle-line text-gray-400 text-3xl hover:text-secondary hover:text-[33px] cursor-pointer transition-all"></i></a>
                    <a href={portfolioData.socials.whatsapp} target="_blank"> <i className="ri-whatsapp-line text-gray-400 text-3xl hover:text-secondary hover:text-[33px] cursor-pointer transition-all"></i></a>
                </div>
                <div className="w-[1px] h-60 bg-[#125f63d3] mt-4 sm:hidden"></div>
            </div>
        </div>
    )
}

export default LeftSide