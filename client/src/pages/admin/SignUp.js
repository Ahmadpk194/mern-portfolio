import { message } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })


    const signupHandler = async () => {
        message.info('User Not Created: as this is not functional yet')
    };

    return (
        <div>
            <div className='p-5 bg-transparent flex justify-between px-44 sm:px-4 absolute'>
                    <Link to='/'> <h2 className='text-4xl text-white sm:text-3xl'><span className='text-secondary'>A</span>hmad <span className='text-secondary'>K</span>han</h2></Link>
            </div>
            <div className='flex bg-primary justify-center items-center h-screen'>
                <div className="w-96 sm:w-80 flex bg-white rounded-sm flex-col shadow gap-4 border p-4">
                    <h1 className='text-2xl'>Portfolio SignUp</h1>
                    <hr />
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='usernmae' className="w-full" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    <label htmlFor="pass">Password</label>
                    <input type="password" id='pass' placeholder='password' className="w-full" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" id='confirmPass' placeholder='confirm password' className="w-full" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                    <button className="bg-primary text-white py-2 rounded-sm" onClick={signupHandler}>Login</button>
                    <Link to={'/admin-login'} className='underline'>Aleready have account</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp