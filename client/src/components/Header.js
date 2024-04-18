import { message } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn } from '../redux/rootSlice';

const Header = ({ scrollToContact }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { portfolioData } = useSelector(state => state.root);


  let firstLetter;
  let secondLetter;

  if (portfolioData?.intro?.logo) {
    var [firstName, lastName] = portfolioData.intro.logo.split(' ');
    firstLetter = firstName.charAt(0);
    secondLetter = lastName.charAt(0);
  }

  const logoutHandler = () => {
    localStorage.clear();
    message.success('Logged out Successfully');
    dispatch(LogIn(false))
    navigate('/')
  }

  return (
    <div className='p-5 mob:p-5 bg-primary flex justify-between px-44 md:px-32 md3:px-10 mob:px-4'>
      <div>
        {portfolioData && (<Link to='/'>
          <h2 className='text-4xl text-white sm:text-3xl mob:text-2xl'>
            <span className='text-secondary'>{firstLetter || 'A'}</span>
            {(firstName?.substring(1)|| 'hmad')}{' '}
            <span className='text-secondary'>{secondLetter || 'K'}</span>
            {(lastName?.substring(1) || "han")}
          </h2>
        </Link>)}
      </div>
      <div className='flex gap-2 sm:gap-2 mob:gap-1 items-center'>
        <ul className='flex gap-6 mob:gap-2 sm:gap-4 text-gray-200 text-lg sm:text-[17px] mob:text-[14px]'>
          <Link to={'blogs'}><li className='cursor-pointer hover:text-secondary transition-all '>Blog</li></Link>
          <li className='cursor-pointer hover:text-secondary transition-all ' onClick={() => scrollToContact()}>Contact</li>
        </ul>
        <div className="h-[1.5rem] border-r-[1px] mx-2  sm:mx-1 border-gray-700"></div>

        {!localStorage.getItem('loggedIn') && <Link to='/admin-login' className="border border-gray-400 rounded text-gray-200 px-4 py-1 mob:px-2 mob:text-sm sm:px-2 sm:py-1 hover:border-secondary hover:text-secondary transition-all">Login</Link>}
        {localStorage.getItem('loggedIn') && <button className="border border-gray-400 rounded text-gray-200 px-4 py-1 mob:px-2 mob:text-sm sm:px-2 sm:py-1 hover:border-secondary hover:text-secondary transition-all" onClick={logoutHandler}>Logout</button>}
        <Link to='/admin' className="border border-gray-400 rounded text-gray-200 px-4 py-1 sm:px-2 sm:py-1 hover:border-secondary hover:text-secondary transition-all 700:hidden">Admin Panel</Link>
      </div>
    </div>
  )
}

export default Header