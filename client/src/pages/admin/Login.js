import { message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn, hideLoading, showLoading } from '../../redux/rootSlice'

const Login = () => {

    const { portfolioData } = useSelector(state => state.root);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        username: '',
        password: ''
    })


    const loginHanlder = async () => {
        try {
            dispatch(showLoading())
            const response = await axios.post('/api/v1/admin-login', user)
            dispatch(hideLoading())
            if (response.data.success) {
                localStorage.setItem('token', response.data)
                localStorage.setItem('loggedIn', true)
                message.success(response.data.message);
                dispatch(LogIn(true))
                navigate('/admin')
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            message.error(error.message);
            dispatch(hideLoading())
        }
    }

    return (
        <div>
            <div className='p-5 bg-transparent flex justify-between px-44 sm:px-4 absolute'>
                <Link to='/'> <h2 className='text-4xl text-white sm:text-3xl'><span className='text-secondary'>A</span>hmad <span className='text-secondary'>K</span>han</h2></Link>
            </div>
            <div className='flex bg-primary justify-center items-center h-screen z-50'>
                <div className="w-96 sm:w-80 flex bg-white rounded-sm flex-col shadow gap-4 border p-4">
                    <h1 className='text-2xl'>{portfolioData?.intro?.logo?.split(' ')[0] || "Ahmad"}-Dev Login</h1>
                    <hr />
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='usernmae' className="w-full" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' placeholder='password' className="w-full" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <button className="bg-primary text-white py-2 rounded-sm" onClick={loginHanlder}>Login</button>
                    <Link to={'/admin-signup'} className='underline'>don't have an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login