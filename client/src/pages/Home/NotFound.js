import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const NotFound = () => {

    const { portfolioData } = useSelector(state => state.root);

    let firstLetter;
    let secondLetter;

    if (portfolioData?.intro?.logo) {
        var [firstName, lastName] = portfolioData.intro.logo.split(' ');
        firstLetter = firstName.charAt(0);
        secondLetter = lastName.charAt(0);
    }

    let char = ")"

    return (
        <div className='h-screen bg-primary'>
            <div className='p-5 bg-transparent flex justify-between px-44 sm:px-4 absolute'>
                {portfolioData && (<Link to='/'>
                    <h2 className='text-4xl text-white sm:text-3xl mob:text-2xl'>
                        <span className='text-secondary'>{firstLetter || 'A'}</span>
                        {(firstName?.substring(1) || 'hmad')}{' '}
                        <span className='text-secondary'>{secondLetter || 'K'}</span>
                        {(lastName?.substring(1) || "han")}
                    </h2>
                </Link>)}
            </div>
            <div className='text-3xl text-white h-screen w-full flex items-center justify-center'>
                Page Not Found :{char}
            </div>
        </div>
    )
}

export default NotFound